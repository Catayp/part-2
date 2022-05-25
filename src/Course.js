import React from 'react';
import { createRoot } from 'react-dom/client';
const Course = ({course}) => {
  return(
    <>
    <Header title = {course.name} />
    <Content part = {course.parts} />
    <Total total = {course.parts} />
    </>
  )
}
const Header = (prop) => {
  return(
    <h1>{prop.title}</h1>
  )
}
const Total = (prop) => {
  const tot =  prop.total.reduce((a, b) => a + b.exercises,0)
  return( 
    <p>
      Number of exercises: {tot}
    </p>
  )
}
const Content = (prop) => {
  return(
    <div>
      <Part part = {prop.part}  />
    </div>
  )
}
const Part = (prop) => {
  return(
    prop.part.map(p => 
      <p key={p.id}>
        {p.name} = {p.exercises}
      </p>
    )
  )
}
export default Course