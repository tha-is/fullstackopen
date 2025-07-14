const App = () => {
  
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [ 
  {
    name: 'Fundamentos da biblioteca React',
    exercises: 10
  },
 {
    name: 'Usando props para passar dados',
    exercises: 7
  },
 {
    name: 'Estado de um componente',
    exercises: 14
  }
  ]
}
  const Header = () => {
  return (
  <h1>{course.name}</h1>
  )  
}
  const Content = () => {
  return (
    <>
<p>{course.parts[0].name} {course.parts[0].exercises}</p>
<p>{course.parts[1].name} {course.parts[1].exercises}</p> 
<p>{course.parts[2].name} {course.parts[2].exercises}</p> 
  </>
  )
  }
  const Total = () => {
    return (
      <p>{course.parts[0].exercises} + {course.parts[1].exercises} + {course.parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course}/>
      <Total parts={course.parts.exercises} />
    </div>
  )
}

export default App