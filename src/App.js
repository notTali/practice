import NavBar from "./NavBar";
import Home from "./Home"
import Card from "./Card";

function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <Home/>

        <Card />
        <br />
        <Card />
        <br />
        <Card />
        <br />
        <Card />
        <br />
        <Card />
      </div>
    </div>
  );
}

export default App;
