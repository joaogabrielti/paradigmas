import React from 'react'
import * as S from './styles'

import home from '../../assets/home.png'
import home_sel from '../../assets/home_sel.png'
import add from '../../assets/add.png'
import add_sel from '../../assets/add_sel.png'
import menu from '../../assets/menu.png'
import menu_sel from '../../assets/menu_sel.png'

function HeaderItem({image, selected}) {

    let img 

    if(image === "HOM") {
        img = home
        if(selected) img = home_sel
    }
    else if(image === "PRO") {
        img = menu
        if(selected) img = menu_sel
    }
    else if(image === "CRE") {
        img = add
        if(selected) img = add_sel
    }

    return (
      <S.Container>
        <img src={img} alt="button"/>
      </S.Container>
    );
  }
  
  export default HeaderItem
