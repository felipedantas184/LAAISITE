import React, { useState } from 'react';

import { Link as LinkS } from 'react-scroll';

import heroSvg from '../../assets/images/heroSvgTwo.svg';
import sectionOneSvg from '../../assets/images/news.svg';
import contact from '../../assets/images/contactSvg.svg';
import arrowBellow from '../../assets/images/arrowBellow.svg';
import arrowBellowTwo from '../../assets/images/arrowBellowTwo.svg';
import video from '../../assets/images/video.svg';
import book from '../../assets/images/book.svg';
import bookopen from '../../assets/images/book-open.svg';
import Ana from '../../assets/images/Ana.jpg';
import anna from '../../assets/images/anna.jpg';
import Catarina from '../../assets/images/Catarina.jpg';
import Felipe from '../../assets/images/Felipe.jpg';
import Igor from '../../assets/images/Igor.jpg';
import Lari from '../../assets/images/Lari.jpg';
import MariaLuísa from '../../assets/images/Maria Luísa.jpg';
import Simone from '../../assets/images/Simone.jpg';
import Ykaro from '../../assets/images/Ykaro.jpg';
import Carlos from '../../assets/images/Carlos.jpg';
import Leticia from '../../assets/images/Leticia.jpg';
import matheus from '../../assets/images/matheus.jpg';
import luciana from '../../assets/images/luciana.jpg';
import kassia from '../../assets/images/kassia.jpg';
import iury from '../../assets/images/iury.jpg';
import Davi from '../../assets/images/Davi.jpg';
import Fabio from '../../assets/images/Fabio.jpg';



import './styles.css';

function Laai() {
    const [isOpened, setIsOpened] = useState(false);

    const toggle = () => {
        setIsOpened(!isOpened);
    }

    return (
        <>
            <nav className="navBar">
                <ul className="navBarContainer">
                        <li className="navBarItem">
                            <LinkS  to="sectionOne" className="navLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                            >
                            Novidades
                            </LinkS>
                        </li>
                        <li className="navBarItem">
                            <LinkS  to="sectionProj" className="navLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                            >
                            Projetos
                            </LinkS>
                        </li>
                        <li className="navBarItem">
                            <LinkS  to="sectionTwo" className="navLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                            >
                            Integrantes
                            </LinkS>
                        </li>
                        <li className="navBarItem">
                            <LinkS  to="sectionThree" className="navLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                            >
                            Contato
                            </LinkS>
                        </li>                
                </ul>
            </nav>


            <div className="heroSection" id="heroSection">
                <div className="heroSectionContainer">
                    <div className="heroOne">
                        <h1 className="heroTitle">LAAI</h1>
                        <p className="heroTop">LIGA ACADÊMICA DE ALERGOLOGIA E IMUNOLOGIA - UFPI</p>
                        <p className="heroDescription">Imunologia aplicada à clínica em busca da construção e da disseminação de conhecimento!</p>
                    </div>

                    <div className="heroTwo">
                        <img src={heroSvg} className="heroSvg" />
                    </div>

                    <LinkS  to="sectionOne" className="buttonWpr"
                        smooth={true} duration={500} spy={true} offset={-60}
                    >
                        <img className="buttonIcon" src={arrowBellowTwo}/>
                        <p className="buttonText">Novidades LAAI</p>
                        <img className="buttonIcon" src={arrowBellowTwo}/>
                    </LinkS>
                </div>
            </div>


            <div className="sectionOne" id="sectionOne">
                <div className="sectionOneContainer">
                    <div className="heroTwo">
                        <img src={sectionOneSvg} className="heroSvg" />
                    </div>

                    <div className="sectionGroup">
                        <p className="sectionTop">EM BREVE: SEGUNDA EDIÇÃO</p>
                        <h1 className="sectionTitle">CURSO IMUNOLOGIA APLICADA À CLÍNICA</h1>
                        <p className="sectionDescription">A primeira edição do curso Imunologia Aplicada à Clínica foi um sucesso! Por isso, já estamos organizando a segunda edição desse curso incrível!</p>
                        <p className="sectionDescription">Siga-nos no Instagram e seja avisado quando as vagas abrirem!</p>
                        <a href="https://www.instagram.com/laaiufpi/" target="blank" className="buttonWprTwo">
                            <p className="CTAButton">Ver @laaiufpi</p>
                        </a>
                    </div>

                    <LinkS  to="sectionProj" className="buttonWprFive"
                        smooth={true} duration={500} spy={true} offset={-60}
                    >
                        <img className="buttonIcon" src={arrowBellow}/>
                        <p className="buttonText">Projetos LAAI</p>
                        <img className="buttonIcon" src={arrowBellow}/>
                    </LinkS>
                </div>
            </div>


            <div className="sectionProj" id="sectionProj">
                <div className="sectionProjContainer">
                    <div className="sectionGroupProj">
                        <p className="sectionTopProj">NOSSO TRABALHO NÃO PARA</p>
                        <h1 className="sectionTitleProj">ENSINO, PESQUISA & EXTENSÃO</h1>
                        <p className="sectionDescriptionProj">Estamos sempre estudando, pesquisando e organizando eventos relacionados a essa áera incrível que é a imunologia!</p>
                        <p className="sectionDescriptionProj">Conheça um pouco do que já fizemos e do que está por vir!</p>
                    </div>

                    <div className="boxGroup">
                        <div className="boxUnit">
                            <img className="boxIcon" src={book}/>
                            <div>
                            <p className="boxName">Capítulo de Livro</p>
                            <p className="boxStatus">Citomegalovírus e Lúpus Eritematoso Sistêmico Juvenil</p>
                            </div>
                        </div>

                        <div>

                        </div>

                        <div className="boxUnit">
                            <img className="boxIcon" src={bookopen}/>
                            <div>
                            <p className="boxName">Livreto: Febre Reumática</p>
                            <p className="boxStatus">Em fase final. Quase lá...</p>
                            </div>
                        </div>

                        <div className="boxUnit">
                            <img className="boxIcon" src={video}/>
                            <div>
                            <p className="boxName">Curso Imunologia Aplicada à Clínica</p>
                            <p className="boxStatus">Previsão: Junho de 2021</p>
                            </div>
                        </div>
                    </div>

                    <LinkS  to="sectionTwo" className="buttonWpr"
                        smooth={true} duration={500} spy={true} offset={-60}
                    >
                        <img className="buttonIcon" src={arrowBellowTwo}/>
                        <p className="buttonText">Equipe LAAI</p>
                        <img className="buttonIcon" src={arrowBellowTwo}/>
                    </LinkS>
                </div>
            </div>


            <div className="sectionTwo" id="sectionTwo">
                <div className="sectionTwoContainer">
                    <h1 className="sectionTwoTitle">Nosso Time</h1>

                    <p className="squadTitle">Orientadoras</p>

                    <div className="teacherGroup">
                        <div className="teacherUnit">
                            <img src={Catarina} className="teacherPic" />
                            <strong className="teacherName">Dra Catarina F. Pires</strong>
                            <p className="teacherFunction">Orientadora</p>
                        </div>

                        <div className="teacherUnit">
                            <img src={Simone} className="teacherPic" />
                            <strong className="teacherName">Dra Simone S. Lima</strong>
                            <p className="teacherFunction">Orientadora</p>
                        </div>
                    </div>

                    <p className="squadTitle">Diretoria</p>

                    <div className="directorGroup">
                        <div className="directorUnit">
                            <img src={Igor} className="directorPic" />
                            <strong className="directorName">Igor</strong>
                            <p className="directorFunction">Presidente</p>
                        </div>

                        <div className="directorUnit">
                            <img src={Felipe} className="directorPic" />
                            <strong className="directorName">Amâncio</strong>
                            <p className="directorFunction">Vice-Presidente</p>
                        </div>

                        <div className="directorUnit">
                            <img src={Fabio} className="directorPic" />
                            <strong className="directorName">Fábio</strong>
                            <p className="directorFunction">Pesquisa</p>
                        </div>

                        <div className="directorUnit">
                            <img src={Ana} className="directorPic" />
                            <strong className="directorName">Ana Flávia</strong>
                            <p className="directorFunction">Secretaria</p>
                        </div>

                        <div className="directorUnit">
                            <img src={kassia} className="directorPic" />
                            <strong className="directorName">Kássia</strong>
                            <p className="directorFunction">Marketing</p>
                        </div>

                        <div className="directorUnit">
                            <img src={Carlos} className="directorPic" />
                            <strong className="directorName">Carlos</strong>
                            <p className="directorFunction">Ensino</p>
                        </div>

                        <div className="directorUnit">
                            <img src={MariaLuísa} className="directorPic" />
                            <strong className="directorName">Maria Luísa</strong>
                            <p className="directorFunction">Extensão</p>
                        </div>

                        <div className="directorUnit">
                            <img src={Felipe} className="directorPic" />
                            <strong className="directorName">Rayssa</strong>
                            <p className="directorFunction">Administrativo</p>
                        </div>
                    </div>
                    
                    <p className="squadTitle">Ligantes</p>

                    <div className="studentGroup">
                        <div className="studentUnit">
                            <img src={anna} className="studentPic" />
                            <strong className="studentName">Anna Paulla Barbosa</strong>
                        </div>

                        <div className="studentUnit">
                            <img src={Davi} className="studentPic" />
                            <strong className="studentName">Davi Kennedy</strong>
                        </div>

                        <div className="studentUnit">
                            <img src={Felipe} className="studentPic" />
                            <strong className="studentName">Felipe Dantas</strong>
                        </div>

                        <div className="studentUnit">
                            <img src={Felipe} className="studentPic" />
                            <strong className="studentName">Franciele Machado</strong>
                        </div>

                        <div className="studentUnit">
                            <img src={matheus} className="studentPic" />
                            <strong className="studentName">Francisco Matheus</strong>
                        </div>

                        <div className="studentUnit">
                            <img src={iury} className="studentPic" />
                            <strong className="studentName">Iury Lorenzo</strong>
                        </div>

                        <div className="studentUnit">
                            <img src={Lari} className="studentPic" />
                            <strong className="studentName">Larissa Vasconcelos</strong>
                        </div>

                        <div className="studentUnit">
                            <img src={Leticia} className="studentPic" />
                            <strong className="studentName">Letícia Oliveira</strong>
                        </div>

                        <div className="studentUnit">
                            <img src={luciana} className="studentPic" />
                            <strong className="studentName">Luciana Brito</strong>
                        </div>

                        <div className="studentUnit">
                            <img src={Ykaro} className="studentPic" />
                            <strong className="studentName">Ykaro Ysmael</strong>
                        </div>
                    </div>

                    <LinkS  to="sectionThree" className="buttonWprFive"
                        smooth={true} duration={500} spy={true} offset={-60}
                    >
                        <img className="buttonIcon" src={arrowBellow}/>
                        <p className="buttonText">Contato LAAI</p>
                        <img className="buttonIcon" src={arrowBellow}/>
                    </LinkS>
                </div>
            </div>


            <div className="sectionThree" id="sectionThree">
                <div className="sectionThreeContainer">
                    <div className="heroTwo">
                        <img src={contact} className="heroSvg" />
                    </div>

                    <div className="sectionGroup">
                        <h1 className="sectionTitleThree">ENTRE EM CONTATO</h1>
                        <p className="sectionDescriptionTwo">Estamos preparados para tirar todas as suas dúvidas sobre nossa liga! Entre em contato conosco e deixe suas sugestões, dicas e comentários.</p>
                        <div className="buttonsWpr">
                            <a href="https://www.instagram.com/laaiufpi/" target="blank" className="buttonWprThree">
                                <p className="CTAButton">Instagram - @laaiufpi</p>
                            </a>
                            <a href="https://www.instagram.com/laaiufpi/" target="blank" className="buttonWprFour">
                                <p className="CTAButton">E-mail LAAI</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="footer">
                <div className="footerContainer">
                    <div className="footerOne">
                        <div className="logoGroup">
                            <h1 className="footerLogo">LAAI</h1>
                        </div>
                    </div>

                    <div className="footerLinks">
                        <LinkS  to="sectionOne" className="footerLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                        >
                            Novidades
                        </LinkS>
                        <LinkS  to="sectionProj" className="footerLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                        >
                            Projetos
                        </LinkS>
                        <LinkS  to="sectionTwo" className="footerLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                        >
                            Integrantes
                        </LinkS>
                        <LinkS  to="sectionThree" className="footerLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                        >
                            Contato
                        </LinkS>
                    </div>

                    <div className="footerTwo">
                        <p>LAAI UFPI © 2021 - Felipe Dantas.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Laai;