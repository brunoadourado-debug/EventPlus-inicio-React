import "./Home.css"
import bannerEvento1 from "../../assets/banner-1.png"
import bannerEvento2 from "../../assets/banner-2.png"
import bannerEvento3 from "../../assets/banner-3.png"
import visao from "../../assets/visao-img.png"
import logoEvent from "../../assets/logo-event.svg"

function Home() {
    return (
        <>

            <header className="home-header">
                <div className="div-header">
                    <img src={logoEvent} alt="logoEvent+"></img>
                    <nav className="nav-header">
                        <a href="#inicio">Home</a>
                        <a href="#evento">Eventos</a>
                        <a href="#usuario">Usuarios</a>
                        <a href="#contato">Contatos</a>
                    </nav>
                    <button>Entrar</button>
                </div>
            </header>

            <main>
                <section id="section1" className="home-banner">
                    <img src={bannerEvento1} alt="banner-evento-1"></img>
                </section>

                <section className="home-visao">
                    <div className="home-visao-container">

                        <img src={visao} alt="pessoas confraternizando"></img>
                        <div className="home-visao-texto">

                            <h1>Visão</h1>
                            <p>A EventPlus organiza eventos e informações em uma interface direta,
                                facilitando a consulta da agenda e a participação dos usuários.</p>
                        </div>
                    </div>
                </section>

                <section id="eventos" className="home-eventos">
                    <div className="home-titulo">
                        <h2>Próximos eventos</h2>
                        <hr></hr>
                    </div>
                    <div className="home-eventos-lista">
                        <article className="home-eventos-card">
                            <img src={bannerEvento1} alt="evento de tecnologia"></img>
                            <span>Tecnologia</span>
                            <div className="home-eventos-info">
                                <h3>Evento de Tecnologia</h3>
                                <p>Conheça novidades e têndencias do setor</p>
                                <button type="button">Ver evento</button>
                            </div>
                        </article>

                        <article className="home-eventos-card">
                            <img src={bannerEvento2} alt="Workshop de desenvolvimento"></img>
                            <span>Workshop</span>
                            <div className="home-eventos-info">
                                <h3>Workshop de Desenvolvimento</h3>
                                <p>Pratique desenvolvimento com atividades guiadas</p>
                                <button type="button">Ver evento</button>
                            </div>
                        </article>

                        <article className="home-eventos-card">
                            <img src={bannerEvento3} alt="Meetup de inteligencia artificial"></img>
                            <span>Meetup</span>
                            <div className="home-eventos-info">
                                <h3>Meetup de IA</h3>
                                <p>Discussões sobre aplicações de inteligência artificial</p>
                                <button type="button">Ver evento</button>
                            </div>
                        </article>
                    </div>
                </section>

                <section id="contato" className="home-contato">
                    <div className="home-contato-titulo">
                        <h2>CONTATO</h2>
                        <hr />
                    </div>

                    <div className="home-contato-container">
                        <div className="home-contato-texto">
                            <p>Rua Niterói, 180 – Centro</p>
                            <p>São Caetano do Sul – SP</p>
                            <p>(11) 4225-2000</p>
                            <hr></hr>
                        </div>

                        <div className="home-contato-mapa">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.6990374600955!2d-46.57329922363039!3d-23.615124263571488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d11c031c57f%3A0x8f79f71018065a16!2sSENAI%20S%C3%A3o%20Caetano%20do%20Sul%20-%20Cyber%20e%20IA!5e0!3m2!1spt-BR!2sbr!4v1791222473568!5m2!1spt-BR!2sbr"
                                width="400"
                                height="350"></iframe>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="home-footer">
                <p>Escola Senai de informatica - 2026</p>
            </footer>


        </>
    )
}

export default Home