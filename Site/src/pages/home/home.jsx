import { Link } from "react-router-dom"
import style from "./home.module.css"
import ProdutoComponet from "../../components/produto/produto"
import buque from "../../img/buque.png"
import buque1 from "../../img/buque1.png"
import buque2 from ".././../img/buque2.png"
import buque3 from ".././../img/buque3.png"
import buque4 from ".././../img/buque4.png"
import buque5 from ".././../img/buque5.png"
import estrela5 from "../../img/estrela5.png"
import estrela4 from "../../img/estrela4.png"
import estrela3 from "../../img/estrela3.png"

function HomePage(){
    return (
        <main>
            <div className={style.conteiner}>
                <ProdutoComponet img={buque} texto="Buquê de Rosas e Alstroemérias Coloridas" estrela={estrela5} valor="R$91,36" id="/1"/>
                <ProdutoComponet img={buque1} texto="Buquê Colorido de Rosas, Alstroemérias, Gérberas..." estrela={estrela4} valor="R$149,48" id="/2"/>
                <ProdutoComponet img={buque2} texto="Buquê de Flores do Campo Coloridas com Rosas e M..." estrela={estrela3} valor="R$148,90" id="/3"/>
                <ProdutoComponet img={buque3} texto="Buquê de Flores do Campo Coloridas" estrela={estrela4} valor="R$71,20" id="/4"/>
                <ProdutoComponet img={buque4} texto="Buquê de 30 Rosas Coloridas" estrela={estrela4} valor="R$274,86" id="/5"/>
            </div>  
        </main>
    )
}

export default HomePage