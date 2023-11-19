import { Link } from "react-router-dom"
import style from "./home.module.css"

function HomePage(){
    return (
        <body>
                <h1>Produtos</h1>
                <p>
                    <Link to="/1">flor 1</Link>
                </p>
                <p>
                    <Link to="/2">flor 2</Link>
                </p>
                <p>
                    <Link to="/3">flor 3</Link>
                </p>
        </body>
    )
}

export default HomePage