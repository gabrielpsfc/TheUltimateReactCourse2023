import React from "react";
import ReactDOM from 'react-dom/client'
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




function App() {

  return <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>

}

function Menu() {
  return <main className="menu">
    <h2>Menu</h2>
    <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName="pizzas/spinaci.jpg" price={10}></Pizza>
    <Pizza name='Pizza Funghi' ingredients='Tomato, mushrooms' photoName="pizzas/funghi.jpg" price={12}></Pizza>
  </main>
}

function Pizza({ name, ingredients, photoName, price }) {
  return <div className="pizza">
    <img src={photoName} alt="spinaci pizza" />
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{price + 3}</span>
    </div>
  </div>
}





const horario = () => new Date().toLocaleTimeString()

function Header() {
  return <header className="header">
    <h1>Fast React Pizza Co.</h1>
  </header>
}



function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22

  if (hour >= openHour && hour <= closeHour) {
    alert("We're currently open!")
  } else {
    alert("Sorry we're closed")
  }


  return <footer className="footer">{horario()} We're currently open!</footer>

  //return React.createElement('footer', null, "We're currently open!")
}



//react v18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App></App></React.StrictMode>)