import React from 'react'
import * as S from './styles'

function PageTitle({title}) {
    return (
        <S.Container>
            <span>{title}</span>
        </S.Container>
    )
}

export default PageTitle