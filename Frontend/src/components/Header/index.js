import React, {useState} from 'react'
import * as S from './styles'
import {Link} from 'react-router-dom'

// Componentes
import HeaderItem from '../HeaderItem'
import HeaderStatus from '../HeaderStatus'

function Header({view}) {

    const [item, setItem] = useState(view);

    return (
      <S.Container>
        <S.LeftSide>
            <Link to="/">
                <button type="button" onClick={ () => setItem("HOM") }>
                    <HeaderItem image="HOM" selected={item==="HOM"}/>
                </button>
            </Link>
            <Link to="/" to="/project">
                <button type="button" onClick={ () => setItem("PRO") }>
                    <HeaderItem image="PRO" selected={item==="PRO"}/>
                </button>
            </Link>
            <Link to="/" to="/create/0">
                <button type="button" onClick={ () => setItem("CRE") }>
                    <HeaderItem image="CRE" selected={item==="CRE"}/>
                </button>
            </Link>
        </S.LeftSide>
        <S.RightSide>
            <HeaderStatus/>
        </S.RightSide>
      </S.Container>
    );
  }
  
  export default Header
