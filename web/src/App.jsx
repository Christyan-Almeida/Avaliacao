import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import StudentsList from './pages/alunos'
import StudentDetails from './pages/detelhealuno'
import { Container, Navbar } from 'react-bootstrap'

export default function App(){
  return (
    <>
      <Navbar bg="light" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">Estudo de Caso - Alunos</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<StudentsList />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </Container>
    </>
  )
}
