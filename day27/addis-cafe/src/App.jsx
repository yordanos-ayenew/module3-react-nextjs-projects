import Menu from "./Menu";
import dishes from "./data"
function App() {

  return (
    <div>
      <h1>Addis Eats</h1>
      <Menu dishes={dishes} category="Main"/>
    </div>
  )
}

export default App;