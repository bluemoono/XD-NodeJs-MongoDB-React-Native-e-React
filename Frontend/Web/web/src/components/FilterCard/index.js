import React from 'react';
import * as S from './style';

import filtro from '../../assets/filtro-p.png';

function FilterCard({title, actived}) {
    return (
        <S.Container actived = {actived}>
            <img src={filtro} alt="Filtro"/>
            <span>{title}</span>
        </S.Container>
    )
}

export default FilterCard;
