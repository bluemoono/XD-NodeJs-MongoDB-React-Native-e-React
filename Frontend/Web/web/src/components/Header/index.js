import React, {useState, useEffect} from 'react';
import * as S from './style';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo-p.png';
import bell from '../../assets/bell-p.png';

import api from '../../services/api';
import isConnected from '../../utils/IsConnected';

function Header({clickNotification}) {
    const [lateCount, setLateCount] = useState();

    async function lateVerify(){
        await api.get(`/task/filter/late/${isConnected}`)
        .then(response =>{
            setLateCount(response.data.length);
        });
    }

    useEffect(()=>{
        lateVerify();
    });

    async function Logout(){
        localStorage.removeItem('@todo/macddress');
        window.location.reload();
    }

    return (

        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo" />
            </S.LeftSide>
            <S.RightSide>
                <Link to="/">INICÍO</Link>
                <span className="divisor"/>

                <Link to="/task">NOVA TAREFA</Link>
                <span className="divisor"/>

                {!isConnected ? 
                <Link to="/qrcode">SINCRONIZAR O CELULAR</Link> :
                <button className="sair" type="button" onClick={Logout}>SAIR</button>}

                {
                lateCount &&
                <>
                    <span className="divisor"/>
                    <button onClick={clickNotification} id="notification">
                        <img src={bell} alt="Notificação" />
                        <span>{lateCount}</span>
                    </button>
                </>
                }
            </S.RightSide>
        </S.Container>
    )
}

export default Header;
