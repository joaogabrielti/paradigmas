import React, {useState, useEffect} from 'react'
import * as S from './styles'

import api from '../../services/api'
import status from '../../assets/sin.png'

function HeaderStatus() {

    const [count, setCount] = useState([])

    async function countProjects() {
        await api.get('/project/count')
        .then(response => {
            setCount(response.data)
        })
    }

    useEffect(() => {
        countProjects()
    }, [])

    return (
        <S.Container>
            <img src={status} alt="status home"/>
            <span>{count}</span>
        </S.Container>  
    )
}

export default HeaderStatus