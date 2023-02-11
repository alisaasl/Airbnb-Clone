import React from "react"
import Card from "./components/Card"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.rating}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Main />
            <section className="cards-list">
                {cards}
            </section>

        </div>
    )
}