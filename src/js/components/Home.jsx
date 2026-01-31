import { Navbar } from "./Navbar"
import Card from "./Card"
// Un componente es una funcion (function o arrow function) que devuelve solo un JSX

// Fragmento de react


function Home() {
    // Aquí podemos escribir javascript 
    let names = ["Juana", "Deimian", "Marcos", "Carlos"]

    return (
        <> {/* Esto es un Fragmento de react */}
            {/* Navbar */}
            <Navbar />

            <h1>Hola desde el componente Home</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Totam asperiores at placeat consectetur sed praesentium
                pariatur aperiam, beatae sit suscipit nemo necessitatibus.
                Maiores nulla asperiores, veniam dolorum mollitia beatae eum.
            </p>

            <div className="container">
                <div className="row">

                    {/* <Card />
                    <Card />
                    <Card /> */}
                    {
                        names.map(() => {
                            return (
                                <Card />
                            )
                        })
                    }

                </div>
            </div>
        </>

    )
}

export default Home