//2.6-2.11, 2.15-2.17, 2.19 
import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'
import crud from './crud'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')  
  const [ newSuccess, setSuccess ] = useState('')  

  const nameChange = (event) => {
    setNewName(event.target.value)
  }
  const numberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const searchChange = (event) => {
    setSearch(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const pers = {
      name: newName,
      cel: newNumber
    }
    persons.filter(d => d.name === newName).length === 0  
    ? crud
        .addContacts(pers)
        .then( response => setPersons(persons.concat(response)))
        .then(response => setSuccess(`added ${pers.name}`))
    : alert(`${newName} is already added to phonebook`)
    
    setNewName('')
    setNewNumber('')
  }
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      crud
        .deleteContact(id)
        .then(response => setSuccess(`deleted ${name}`)) 
    }
  }
  crud
    .showContacts()
    .then(response=> setPersons(response))
    
  const ExpReg = new RegExp("^" + search, "i")
  const found = persons.filter(d => ExpReg.test(d.name))  
  return (
    <div>
      <h2>Phonebook</h2>
      <Success message={newSuccess} />
      <PhonebookForm searchChange={searchChange} search={search} />
      <h2>Add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        nameChange={nameChange} 
        newName={newName} 
        numberChange={numberChange} 
        newNumber={newNumber} 
      />
      <h2>Numbers</h2>
      {found.map(date =>
        <Contact name={date.name}
          key={date.id}
          cel={date.cel} 
          deleteP={()=>deletePerson(date.id, date.name)} 
        />
      )}
    </div>
  )
}
const Contact = ({name, cel, id, deleteP}) =>{
  return(
    <div>
    {name} : {cel} 
    <button onClick={deleteP} >delete</button>
    </div>
  )
} 
const PhonebookForm = ({searchChange, search}) =>{
  return(
    <form>
      <div>
        filter: 
        <input
          onChange={searchChange} value={search} 
        />
      </div>
    </form>
  )
}
const PersonForm = ({addPerson, nameChange, newName, numberChange, newNumber}) =>{
  return(
    <form onSubmit={addPerson}>
      <div>
        name: 
        <input 
          onChange={nameChange} value={newName} 
        />
      </div>
      <br/>
      <div>
        number: 
        <input 
          onChange={numberChange} value={newNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
const Success = ({message}) => {
  if (message === ''){
    return null
  }
  return(
    <div className="success">
      {message}
    </div>
  )
}
const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />) 
//--------------------------------------------------------------
//2.1 - 2.5
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import Course from './Course'
// const App = () => {
//   const course = [
//     {
//       id: 1,
//       name: 'Half Stack application development',
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id:1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id:2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id:3
//         }
//       ]
//     },
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1,
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2,
//         },
//       ],
//     }
//   ]
   
//   return (
//     course.map(obj => 
//       <div key= {obj.id}>
//         <Course course = {obj} />
//       </div>
//     )
    
//   )
// }

// const container = document.getElementById('root')
// const root = createRoot(container);
// root.render(<App />) 
