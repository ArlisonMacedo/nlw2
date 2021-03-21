import React, { useState, FormEvent } from 'react'

// Components
import PageHeader from '../../Components/PageHeader'
import TeacherItem, {Teacher} from '../../Components/TeacherItem'
import Input from '../../Components/Input'
import Select from '../../Components/Select'

import api from '../../services/api'

// styles
import './styles.css'

function TeacherList () {

  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')


  async function onSearchTeachers(e : FormEvent){
    e.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)

  }


  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponiveis">
        <form id="search-teachers" onSubmit={onSearchTeachers}>
        <Select  
            name='subject' 
            label='Matéria'
            value={subject}
            onChange={e => {setSubject(e.target.value)}}
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Educação Fisica', label: 'Educação Fisica'},
              {value: 'Ciências', label: 'Ciências'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Física', label: 'Física'},
              {value: 'Português', label: 'Português'},
              {value: 'Historia', label: 'Historia'},
            ]}
          />
          <Select  
            name='week_day' 
            label='Dia da Semana'
            value={week_day}
            onChange={e => {setWeek_day(e.target.value)}}
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-Feira'},
              {value: '2', label: 'Terça-Feira'},
              {value: '3', label: 'Quarta-Feira'},
              {value: '4', label: 'Quinta-Feira'},
              {value: '5', label: 'Sexta-Feira'},
              {value: '6', label: 'Sabado'},
              
            ]}
          />
          <Input 
            value={time}
            onChange={e => setTime(e.target.value)}
            type='time' 
            name='time' 
            label='Hora'
          />
          <button type='submit'>Buscar</button>
        </form>
      </PageHeader>

      <main>
        { teachers.map((teacher: Teacher )=> {
          return (
            <TeacherItem key={teacher.id} teacher={teacher} />
          )
        })}
      </main>

      
    </div>
  )
}


export default TeacherList