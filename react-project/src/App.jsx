/* eslint-disable react/prop-types */
import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}&apos;s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  'Macaroni and Cheese',
  'Salmon with Potatoes',
  'Tofu with Vegetables'
]

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish, ind) => <li key={ind} style={{listStyle: "none"}}>{dish}</li>)}
    </ul>
    
  )
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={items}/>
    </div>
  );
}

export default App;
