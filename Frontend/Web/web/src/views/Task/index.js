import React, {useState, useEffect} from 'react';
import {format} from 'date-fns';
import {Redirect} from 'react-router-dom';
import * as S from './style';

import api from '../../services/api';
import isConnected from '../../utils/IsConnected';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import TypeIcons from '../../utils/typeIcons';

import calendar from '../../assets/calendrio-p.png';
import clock from '../../assets/relogio-p.png';

function Task({match}) {
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();

    async function LoadTaskDatails(){
        await  api.get(`/task/${match.params.id}`)
        .then(response =>{
            setType(response.data.type)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(format (new Date(response.data.when), 'yyyy-MM-dd'))
            setHour(format (new Date(response.data.when), 'HH:mm'))
            setDone(response.data.done)
        });
    }

    async function save(){
        //Validação de dados
        if(!type){
            return alert("Você precisa informar o tipo da tarefa")
        } else if(!title){
            return alert("Você precisa informar o título da tarefa")
        } else if(!description){
            return alert("Você precisa informar o descrição da tarefa")
        } else if(!date){
            return alert("Você precisa informar o data da tarefa")
        } else if(!hour){
            return alert("Você precisa informar o hora da tarefa")
        }


        if(match.params.id){
            await api.put(`/task/${match.params.id}`, {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(
                setRedirect(true)
                ).catch();
            } else {
                await api.post('/task', {
                    macaddress: isConnected,
                    type,
                    title,
                    description,
                    when: `${date}T${hour}:00.000`
                }).then(
                setRedirect(true)
            ).catch();
        }
    }

    async function remove(){
        const res = window.confirm('Deseja realmente excluir a tarefa?')
        if(res == true){
            await api.delete(`/task/${match.params.id}`)
            .then(() => setRedirect(true));
        } else {
            alert("mantido :D");
        }
    }

    useEffect(()=>{
        if(!isConnected){
            setRedirect(true);
        }
        LoadTaskDatails();
    }, []);

    return ( 
    <S.Container>
        {redirect && <Redirect to="/" />}
        <Header/>

        <S.Form>
            <S.TypeIcons>
                {
                    TypeIcons.map((icon, index) => (
                        index > 0 && 
                        <button type="button" onClick={()=> setType(index)}>
                            <img src={icon} alt="Tipo de Tarefas" className ={type && type !== index && 'inative'} />
                        </button>
                    ))
                }
            </S.TypeIcons>

            <S.Input>
                <span>Título</span>
                <input type="text" placeholder="Título da Tarefa" onChange={e => setTitle(e.target.value)} value={title}></input>
            </S.Input>

            <S.TextArea>
                <span>Descrição</span>
                <textarea rows={5} placeholder="Destalhes da Tarefa" onChange={e => setDescription(e.target.value)} value={description}></textarea>
            </S.TextArea>

            <S.Input>
                <span>Data</span>
                <input type="date" placeholder="Data da Tarefa" onChange={e => setDate(e.target.value)} value={date}></input>
                <img src={calendar} alt="Calendário" />
            </S.Input>

            <S.Input>
                <span>Hora</span>
                <input type="time" placeholder="Hora da Tarefa" onChange={e => setHour(e.target.value)} value={hour}></input>
                <img src={clock} alt="Relógio" />
            </S.Input>

            <S.Options>
                <div>
                    <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                    <span>CONCLUÍDO</span>
                </div>

                {match.params.id && <button type="button" onClick={remove}>EXCLUIR</button>}
            </S.Options>

            <S.Save>
                <button type="button" onClick={save}>SALVAR</button>
            </S.Save>
        </S.Form>


        <Footer/>
    </S.Container>
    )
}

export default Task;
