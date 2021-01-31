import React, {useState} from 'react';
import * as S from './style';
import Qr from 'qrcode.react';
import {Redirect} from 'react-router-dom';

//import api from '../../services/api';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);
    
    async function saveMac(){
        if(!mac){
            alert('Insira o código presente no seu celular');
        } else {
            await localStorage.setItem('@todo/macddress', mac);
            setRedirect(true);
            window.location.reload();
        }
    }

    return(
        <S.Container>
            {redirect && <Redirect to="/" />}
            <Header/>

        <S.Content>
            <h1>SINCRONIZE COM SEU CELULAR</h1>
            <h2>E tenha suas tarefas nas palmas das mãos</h2>
            
            <S.QrCodeArea>
                <Qr value='getMacaddress' size={350}/>
            </S.QrCodeArea>

            <S.ValidationCode>
                <span>Digite o código para a sincronização</span>
                <input type="text" onChange = {macaddress => setMac(macaddress.target.value)} value={mac}/>
                <button type="button" onClick={saveMac}>SINCRONIZAR</button>
            </S.ValidationCode>

        </S.Content>

            <Footer />
        </S.Container>
    )
}

export default QrCode;