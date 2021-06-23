import React from 'react'
import * as S from './styles'

import logo from '../../assets/sigla.png'

function Footer() {
    return (
        <S.Container>
            <S.LeftSide>
                <span>João Gabriel Xavier</span>
            </S.LeftSide>
            <S.RightSide>
                <img src={logo} alt="logo app"/>
            </S.RightSide>
        </S.Container>
    );
  }
  
  export default Footer;
  