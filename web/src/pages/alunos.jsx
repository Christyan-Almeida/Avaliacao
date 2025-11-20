import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import { Link } from 'react-router-dom'
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap'

export default function StudentsList(){
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const load = async () => {
      try {
        const res = await api.get('/alunos')  // <--- ADAPTADO
        setStudents(res.data)
      } catch (err) {
        setError(err.message || 'Erro ao carregar')
      } finally {
        setLoading(false)
      }
    }
    load()
  },[])

  if(loading) return <div className="text-center"><Spinner animation="border" /></div>
  if(error) return <div className="alert alert-danger">{error}</div>

  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {students.map(s => (
        <Col key={s.id}>
          <Card>
            <Card.Body>
              <Card.Title>{s.nome}</Card.Title>

              <Card.Text>
                <strong>Curso:</strong> {s.curso}<br/>
                <strong>Turma:</strong> {s.turma}<br/>
                <strong>Matrícula:</strong> {s.matricula}
              </Card.Text>

              <Button as={Link} to={`/students/${s.id}`} variant="primary">
                Ver detalhes
              </Button>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
