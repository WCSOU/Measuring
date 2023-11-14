import style from './cadastro.module.css'

function CadastroComponente(){
    return(
    <div className={style.container}>
        
        <div className={style.box}>
            <h1>Cadastro</h1>
            <label>Nome:</label>
            <input type="text" id={style.nome} placeholder="Digite seu nome completo"/>
            
            <label>CPF:</label>
            <input type="number" id={style.cpf}  placeholder="Digite seu CPF"/>

            <label>E-mail</label>
            <input type="text" id={style.email}  placeholder="Digite seu e-mail"/>
            <label>Senha:</label>
            <input type="password" id={style.senha} n placeholder="Digite sua senha"/>
                
            <button type="submit">Cadastrar</button>
            <p>já tem um login? clique aqui!</p>
        </div>
    </div>)
}

export default CadastroComponente