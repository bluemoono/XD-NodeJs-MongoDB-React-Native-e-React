import React, {useState, useEffect} from 'react';
import * as S from './style';

import api from '../../services/api';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);

    async function loadTasks(){
        await api.get(`/task/filter/${filterActived}/11:11:11:11:11`)
        .then(response =>{
            setTasks(response.data);
            console.log(response.data);
        });
    }

    useEffect(()=>{
        loadTasks();

    }, [filterActived]);

    return ( 
    <S.Container>
        <Header/>
        
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
            <h2>TAREFAS</h2>
        </S.Title>

        <S.Content>
            {
            tasks.map(task => (
            <TaskCard type={task.type} title={task.title}when={task.when} />
            ))
            }
        </S.Content>

        <Footer/>
    </S.Container>
    )
}

export default Home;
