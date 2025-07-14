const App = () => {
  
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  const list = [
    { part: 'Fundamentos da biblioteca React', exercise: 10},
    { part: 'Usando props para passar dados', exercise: 7},
    { part: 'Estado de um componente', exercise: 14},
  ]

  const Header = () => {
  return (
  <h1>{course}</h1>
  )
}
  const Part = (props) => {
  return (
    <p>
    {props.part} {props.exercise}
    </p>
  )
}
  const Content = () => {
  return (
    <>
    <Part part={list[0].part} exercise={list[0].exercise}/>
    <Part part={list[1].part} exercise={list[1].exercise}/>
    <Part part={list[2].part} exercise={list[2].exercise}/>
  </>
  )
  }
  const Total = () => {
    return (
<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
  }
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App