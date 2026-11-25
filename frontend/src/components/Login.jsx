import "./cssComponents/login.css"

const Login = () => {
    return (
        <main className="caixa-login">
            <div className='caixa-imagem'>
                <h1>loja digital</h1>
                <div>
                    <p>programação para viver bem!</p>
                    <h1>o essencial transforma o seu código.</h1>
                    <p>peças com propósito. uma gestão mais simples</p>
                </div>
            </div>
            <div className='caixa-formulario'>
                <button>voltar para loja</button>
                <div className="caixa-adm">
                    <p>area administrativa</p>
                    <div>
                        <h1>bem-vinde de volta.</h1>
                        <p>acesse sua conta para cuidar de cada detalhe da loja</p>
                    </div>
                    <div className="caixa-input">
                        <p>e-mail</p>
                        <input type="text" placeholder='digite seu e-mail aq' />
                    </div>
                    <div className="caixa-input">
                        <p>senha</p>
                        <input type="password" placeholder='digte sua senha aq' />
                    </div>
                    <button>Entrar no painel</button>
                </div>
                <p style={{ margin: '0 auto' }}>acesso restrito a administradores autorizados</p>
            </div>
        </ main>
    )
}

export default Login