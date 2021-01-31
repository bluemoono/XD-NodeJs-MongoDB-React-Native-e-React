import React, {useState, useEffect} from 'react';
import * as S from './style';
import {Link, Redirect} from 'react-router-dom';

import api from '../../services/api';
import isConnected from '../../utils/IsConnected';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    const [redirect, setRedirect] = useState(false);


    async function loadTasks(){
        await api.get(`/task/filter/${filterActived}/${isConnected}`)
        .then(response =>{
            setTasks(response.data);
        });
    }

    

    function Notification(){
        setFilterActived('late');
    }

    useEffect(()=>{
        loadTasks();
        if(!isConnected){
            setRedirect(true);
        }
    }, [filterActived]);

    return ( 
    <S.Container>
        {redirect && <Redirect to="/qrcode" />}
        <Header clickNotification={Notification}/>
        
        <S.FilterArea>
            <button type="button" onClick={() => setFilterActived("all")}>
            <FilterCard actived={filterActived === 'all'} title="Todos"/>
            </button>

            <button type="button" onClick={() => setFilterActived("today")}>
            <FilterCard actived={filterActived === 'today'} title="Hoje"/>
            </button>

            <button type="button" onClick={() => setFilterActived("week")}>
            <FilterCard actived={filterActived === 'week'}  title="Semana"/>
            </button>

            <button type="button" onClick={() => setFilterActived("month")}>
            <FilterCard actived={filterActived === 'month'} title="Mês"/>
            </button>

            <button type="button" onClick={() => setFilterActived("year")}>
            <FilterCard actived={filterActived === 'year'} title="Ano"/>
            </button>
            
        </S.FilterArea>

        <S.Title>
            <h2>{filterActived === 'late'? 'TAREFAS ATRASADAS': 'TAREFAS'}</h2>
        </S.Title>

        <S.Content>
            {
            tasks.map(task => (
            <Link to={`/task/${task._id}`}>
                <TaskCard type={task.type} title={task.title} when={task.when} done={task.done} />
            </Link>
            ))
            }
        </S.Content>

        <Footer/>
    </S.Container>
    )
}

export default Home;
