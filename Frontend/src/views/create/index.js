import React, {useEffect, useState} from 'react'
import * as S from './styles'
import {format} from 'date-fns'
import { Redirect } from 'react-router'

// Ícones
import research_icon_sel from '../../assets/box_sel.png'
import research_icon from '../../assets/box.png'
import inovation_icon_sel from '../../assets/cpu_sel.png'
import inovation_icon from '../../assets/cpu.png'

import api from '../../services/api'
import {adapterDate} from '../../util'

// Componentes
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle'
import Footer from '../../components/Footer'

function Create({match}) {

    const [redirect, setRedirect] = useState(false)
    const [type, setType] = useState('P')
    const [title, setTitle] = useState('')
    const [begin, setBegin] = useState(format(new Date(), "yyyy-MM-dd"))
    const [description, setDescription] = useState('')
    const [manager, setManager] = useState('')
    const [submanager, setSubManager] = useState('')

    async function create() {
        let newBegin = adapterDate(begin, 2)
        if (match.params.id == 0) {
            await api.post('/project', {
                    'name': title,
                    'type': type,
                    'begin': format(new Date(newBegin), "yyyy-MM-dd"),
                    'description': description,
                    'manager': manager,
                    'sub_manager': submanager
            }).then(response => {
                alert("Projeto Criado com Sucesso!")
                setRedirect(true)
            }).catch(error => {
                alert("ERRO")
                console.log(error)
            })
        } else {
            await api.put(`/project/${match.params.id}`, {
                'name': title,
                'type': type,
                'begin': format(new Date(newBegin), "yyyy-MM-dd"),
                'description': description,
                'manager': manager,
                'sub_manager': submanager
            }).then(response => {
                alert("Projeto Alterado com Sucesso!")
                setRedirect(true)
            }).catch(error => {
                alert("ERRO")
                console.log(error)
            })
        }
    }

    async function loadDataProject() {
        if (match.params.id != 0) {
            await api.get(`/project/${match.params.id}`).then(response => {
                setTitle(response.data.name)
                setType(response.data.type)
                setBegin(format(new Date(response.data.begin), "yyyy-MM-dd"))
                setDescription(response.data.description)
                setManager(response.data.manager)
                setSubManager(response.data.sub_manager)
            })
        }
    }

    useEffect(() => {
        loadDataProject()
    }, [])

    return (
        <S.Container>
            {redirect && <Redirect to="/project"/>}
            <Header view="CRE"/>
            <PageTitle title="CREATE"/>
            <S.Content>
                <S.TypeBar>
                    <S.IconBar>
                        <button onClick={() => {setType('P')}}>
                        <img src={type === "P" ? research_icon_sel: research_icon} alt="Research Project"/>
                        </button>
                        <button onClick={() => {setType('I')}}>
                        <img src={type === "I" ? inovation_icon_sel: inovation_icon} alt="Inovation Project"/>
                        </button>
                    </S.IconBar>
                    <span>
                        {type === "P" ? "Projeto Pesquisa": "Projeto Inovação"}
                    </span>
                </S.TypeBar>
                <S.FormLine>
                    <S.FormItem>
                        <label>Título: </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(event) => {setTitle(event.target.value)}}
                            placeholder="Título do Projeto"
                            required
                        />
                    </S.FormItem>
                    <S.FormItem>
                        <label>Data Início: </label>
                        <input
                            type="date"
                            value={begin}
                            onChange={(event) => {setBegin(event.target.value)}}
                            required
                        />
                    </S.FormItem>
                </S.FormLine>
                <S.FormLine>
                    <S.FormItem>
                        <label>Descrição: </label>
                        <textarea
                            rows="6"
                            value={description}
                            onChange={(event) => {setDescription(event.target.value)}}
                            placeholder="Resumo do Projeto"
                        />
                    </S.FormItem>
                    <S.FormItem>
                        <label>Coordenador: </label>
                        <input
                            type="text"
                            value={manager}
                            onChange={(event) => {setManager(event.target.value)}}
                            placeholder="Nome do Coordenador"
                        />
                        <label>Vice-Coordenador: </label>
                        <input
                            type="text"
                            value={submanager}
                            onChange={(event) => {setSubManager(event.target.value)}}
                            placeholder="Nome do Vice-Coordenador"
                        />
                    </S.FormItem>
                </S.FormLine>
                <S.FormLine>
                    <S.FormItem>
                        <button onClick={() => create()}>Confirmar / Salvar</button>
                    </S.FormItem>
                </S.FormLine>
            </S.Content>
            <Footer/>
        </S.Container>
    );
}
  
export default Create;
  