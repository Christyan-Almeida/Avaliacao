import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../api/axios'
import { Card, Button, Spinner } from 'react-bootstrap'

export default function StudentDetails(){
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const load = async () => {
      try {
        const res = await api.get(`/alunos/${id}`)  // <--- ADAPTADO
        setStudent(res.data)
      } catch (err) {
        setError(err.message || 'Erro ao carregar os dados')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if(loading) return <div className="text-center"><Spinner animation="border" /></div>
  if(error) return <div className="alert alert-danger">{error}</div>
  if(!student) return null

  return (
    <Card>
      <Card.Header>{student.nome}</Card.Header>

      <Card.Body>
        <Card.Text>
          <strong>ID:</strong> {student.id}<br/>
          <strong>Matrícula:</strong> {student.matricula}<br/>
          <strong>Curso:</strong> {student.curso}<br/>
          <strong>Turma:</strong> {student.turma}
        </Card.Text>

        <Button as={Link} to="/">Voltar</Button>
      </Card.Body>
    </Card>
  )
}
