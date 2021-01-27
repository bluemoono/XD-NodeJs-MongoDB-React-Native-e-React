import React from 'react';
import * as S from './style';

import logo from '../../assets/logo-p.png';
import bell from '../../assets/bell-p.png';

function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo" />
            </S.LeftSide>
            <S.RightSide>
                <a href="#">INICÍO</a>
                <span className="divisor"/>

                <a href="#">NOVA TAREFA</a>
                <span className="divisor"/>

                <a href="#">SINCRONIZAR O CELULAR</a>
                <span className="divisor"/>
                
                <a href="#" id="notification">
                    <img src={bell} alt="Notificação" />
                    <span>5</span>
                </a>
            </S.RightSide>
        </S.Container>
    )
}

export default Header;
