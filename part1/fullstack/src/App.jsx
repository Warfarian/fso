import Part from "./Part"

const App = () => {
  return (
    <div>
      <Part course={'Half Stack Application development'} part = {'Fundamentals of react'} exercise={'10 exercises'}/>
      <Part part = {'Using state and props'} exercise={'7 exercises'}/>
      <Part part = {'State of a component'} exercise={' 14 exercises'}/>
    </div>
  )
}

export default App