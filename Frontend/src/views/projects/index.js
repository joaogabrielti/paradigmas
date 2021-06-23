import React, { useState, useEffect } from 'react'
import * as S from './styles'
import {Redirect} from 'react-router-dom'
import {format} from 'date-fns'

import api from '../../services/api'
import {adapterDate} from '../../util'

// Ícones
import update_icon from '../../assets/repeat.png'
import finish_icon_sel from '../../assets/check.png'
import finish_icon from '../../assets/check_sel.png'

// Componentes
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Footer from '../../components/Footer'

function Projects() {

    const [redirect, setRedirect] = useState(false)
    const [projects, setProjects] = useState([])
    const [dateup, setDate] = useState(format(new Date(), "yyyy-MM-dd"))
    const [id, setId] = useState(0)

    async function loadProjects() {
        await api.get('/project')
        .then(response => {
            setProjects(response.data)
            console.log(projects)
        })
    }

    async function finishProject(id) {

        let newDate = adapterDate(dateup, 2)

        await api.put(`/project/finish/${id}`,
            {'finish' : format(new Date(newDate), "yyyy-MM-dd")}
        )
        .then(response => {
            alert('Projeto Finalizado com Sucesso!')
            loadProjects()
        })
        .catch(error => {
            alert('ERRO')
            console.log(error)
        })
    }

    function updateProject(id) {
        setId(id)
        setRedirect(true)
    }

    useEffect(() => {
        loadProjects()
    }, [])

    return (
      <S.Container>
        { redirect && <Redirect to={`/create/${id}`}/>}
        <Header view="PRO"/>
        <PageTitle title="PROJECTS"/>
        <S.Content>
            <table>
                <tr>
                    <th>TÍTULO</th>
                    <th>COORDENADOR</th>
                    <th>CATEGORIA</th>
                    <th>INÍCIO</th>
                    <th>FINAL</th>
                    <th>AÇÕES</th>
                </tr>
                {
                    projects.map(p =>
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.manager}</td>
                            <td>{p.type === "P" ? "Pesquisa" : "Inovação"}</td>
                            <td>{format(new Date(p.begin), 'dd/MM/yyyy')}</td>
                            <td> 
                                {
                                    p.finish == null 
                                    ?
                                        <input 
                                            type="date"
                                            value={dateup}
                                            onChange={(event) => {setDate(event.target.value)}}
                                        />   
                                    :
                                        <input type="date" value={format(new Date(p.finish), 'yyyy-MM-dd')} disabled/>  
                                }
                            </td>
                            <td>
                                <S.Actions>
                                    <S.Item>
                                        {
                                            p.finish == null
                                            ?
                                                <button onClick={() => finishProject(p._id)}>
                                                    <img src={finish_icon} alt="Finish project"/>
                                                </button>
                                            :
                                                <img src={finish_icon_sel} alt="Project Finished"/>
                                        
                                        }                                   
                                    </S.Item>
                                    <S.Item>
                                        <button onClick={() => updateProject(p._id)}>
                                            <img src={update_icon} alt="Update project"/>
                                        </button>
                                    </S.Item>
                                </S.Actions>
                            </td>
                        </tr>
                    )
                }
            </table>
        </S.Content>
        <Footer/>
      </S.Container>
    );
  }
  
  export default Projects;
  