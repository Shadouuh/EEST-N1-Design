import './styles.css';
import { LuArrowBigRight, LuArrowDown } from 'react-icons/lu';
import { LuArrowBigDownDash } from 'react-icons/lu';
import { LuUsers, LuGraduationCap, LuCalendar, LuBuilding } from 'react-icons/lu';
import Informatica from '../../assets/images/Informatica.gif';
const Home = () => {
    return(
        <div className="home-container">
            <section className="hero-header">
                <h1>EEST N°1 Monte Grande</h1>
                <p>Formando Tecnicos desde 1968</p>
                <div className="hero-buttons">
                    <button className='hero-btn red'>
                        Ver Mas
                        <LuArrowBigDownDash stroke="snow" size={14}/>
                    </button>
                    <button className='hero-btn white'>
                        Inscribirse
                    </button>
                </div>
            </section>
            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon">
                        <LuCalendar stroke="#8a0000" size={24}/>
                    </div>
                    <h3>Desde 1985</h3>
                    <p>Más de 35 años formando profesionales técnicos de excelencia para el mundo laboral</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <LuUsers stroke="#8a0000" size={24}/>
                    </div>
                    <h3>1200+ Estudiantes</h3>
                    <p>Alumnos, con grandes ideas y aspiraciones, convirtiendose cada dia en un mejor futuro tecnico</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <LuGraduationCap stroke="#8a0000" size={24}/>
                    </div>
                    <h3>400+ Egresados</h3>
                    <p>Profesionales destacados en empresas nacionales e internacionales</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                    <LuBuilding  stroke="#8a0000" size={24}/>
                    </div>
                    <h3>2+ Empresas</h3>
                    <p>Alianzas estratégicas con las principales compañías del sector tecnológico</p>
                </div>
                
            </section>
            <section className="orientaciones-inicio gray">
                <div className="orientaciones-header">
                    <h2>Nuestras <span>Orientaciones</span></h2>
                    <p>Formamos profesionales técnicos con las habilidades necesarias para destacar en el mundo tecnológico actual</p>
                </div>
                <section className="orientaciones-container">
                    <div className="orientacion-detail-card">
                        <div className="orientacion-image">
                            <h2>Informática</h2>
                            <p>Especialista en Sistemas y Redes</p>
                        </div>
                        <div className="orientacion-info">
                            <h3>¿Por qué elegir Informática?</h3>
                            <p>Si te apasiona el hardware, las redes y la administración de sistemas, esta orientación es para ti. Te convertirás en un experto capaz de:</p>
                            <ul className="orientacion-features">
                                <li>Diseñar, implementar y administrar redes informáticas</li>
                                <li>Instalar y configurar sistemas operativos y servidores</li>
                                <li>Mantener y reparar equipos informáticos</li>
                                <li>Implementar medidas de seguridad informática</li>
                            </ul>
                            
                            <div className="salida-laboral">
                                <h4>Salida Laboral</h4>
                                <p>Los graduados de esta orientación pueden trabajar como:</p>
                                <div className="job-tags">
                                    <span className="job-tag">Administrador de sistemas</span>
                                    <span className="job-tag">Técnico en soporte IT</span>
                                    <span className="job-tag">Especialista en seguridad</span>
                                    <span className="job-tag">Consultor tecnológico</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="orientacion-detail-card">
                        <div className="orientacion-image programacion">
                            <h2>Programación</h2>
                            <p>Desarrollador de Software</p>
                        </div>
                        <div className="orientacion-info">
                            <h3>¿Por qué elegir Programación?</h3>
                            <p>Si te fascina crear aplicaciones, resolver problemas con código y dar vida a ideas innovadoras, esta orientación te convertirá en un desarrollador capaz de:</p>
                            <ul className="orientacion-features">
                                <li>Desarrollar aplicaciones web y móviles</li>
                                <li>Crear y gestionar bases de datos</li>
                                <li>Implementar algoritmos y estructuras de datos</li>
                                <li>Diseñar interfaces de usuario atractivas</li>
                            </ul>
                            
                            <div className="salida-laboral">
                                <h4>Salida Laboral</h4>
                                <p>Los graduados de esta orientación pueden trabajar como:</p>
                                <div className="job-tags">
                                    <span className="job-tag">Desarrollador web</span>
                                    <span className="job-tag">Desarrollador móvil</span>
                                    <span className="job-tag">Analista de sistemas</span>
                                    <span className="job-tag">Emprendedor tech</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </section>
            <section className="cursos-inicio">
                <div className="cursos-header">
                    <h2>Nuestros <span>Cursos</span></h2>
                    <p>Explora nuestros cursos organizados por orientación y año</p>
                </div>
                <div className="cursos-cards">
                    <div className="curso-card">
                        <div className="curso-image ciclo-basico">
                            <h3>Ciclo Básico</h3>
                        </div>
                        <div className="curso-content">
                            <p>Formación general y técnica inicial para los primeros años de educación secundaria.</p>
                        </div>
                    </div>
                    
                    <div className="curso-card">
                        <div className="curso-image informatica">
                            <h3>Informática</h3>
                        </div>
                        <div className="curso-content">
                            <p>Especialización en sistemas, redes, hardware y administración de sistemas.</p>
                        </div>
                    </div>
                    
                    <div className="curso-card">
                        <div className="curso-image programacion">
                            <h3>Programación</h3>
                        </div>
                        <div className="curso-content">
                            <p>Especialización en desarrollo de software, aplicaciones web y móviles.</p>
                        </div>
                    </div>
                </div>
                <div className="cursos-footer">
                    <a href="/cursos" className="explorar-cursos">Explorar todos los cursos</a>
                </div>
            </section>
        </div>
    );
};
export default Home;