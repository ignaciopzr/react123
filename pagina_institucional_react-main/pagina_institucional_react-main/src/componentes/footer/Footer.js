import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div id="divgov">
                <footer className="footergov">
                <div id="gov">
                        <a href="https://www.gobiernoenlinea.gov.co" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/CMqXQyT2/gobierno.png" alt="Gobierno en línea" width="57" height="50"></img></a>
                        <a href="http://www.mineducacion.gov.co" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/ZYpsLr6t/mineduca.png" rel="noopener" alt="Secretaría de Educación Colombia" width="154" height="50"></img></a>
                        <a href="http://www.colombiaaprende.edu.co" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/9MvSQbT1/colombiaprende.png"  rel="noopener noreferrer" alt="Colombia aprende" width="56" height="50"></img></a>
                        <a href="http://www.medellin.gov.co" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/g07tgsMd/medellin.png" rel="noopener noreferrer" alt="Secretaría de Educación Medellín" width="70" height="50"></img></a>
                        <a href="http://www.medellin.edu.co" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/QCQ6x3jx/medellinedu.png"  rel="noopener noreferrer" alt="Secretaría de Educación de Medellín" width="77" height="50"></img></a>
                        <a href="http://www.icfes.gov.co" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/mgbnktzx/icfes.png"  rel="noopener noreferrer" alt="ICFES" width="136" height="50"></img></a>
                        <a href="http://www.seduca.gov.co" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/fRTHZppD/seduca.png"  rel="noopener noreferrer" alt="Secretaría de Educación de Antioquia" width="136" height="50"></img></a>
                    </div>
                </footer>
            </div>
            <footer className="footer-total">
                <div id="footer-izq">
                    <h3>Institución<span> Jose Fernando Causado</span></h3>
                    <p id="footer-links">
                        <a href={() => false}> Home </a>
                        <a href={() => false}> Acerca de nosotros </a>
                        <a href={() => false}> Preguntas </a>
                        <a href={() => false}> Contacto </a>
                    </p>
                    <p id="footer-nombre-inst">Institucion educativa Jose Fernando Causado © 2023</p>
                </div>
                <div id="footer-med">
                    <div>
                        <i id="fa fa-map-marker"><img src="https://i.postimg.cc/XqSHbJSz/map.png" width="35"></img></i>
                        <p><span>Calle 50. Parque Berrio </span> Medellin, Colombia</p>
                    </div>
                    <div>
                        <i id="fa fa-phone"><img src="https://i.postimg.cc/8PGKXjbF/phone.png" width="35"></img></i>
                        <p>+57 319-333-33-33</p>
                    </div>
                    <div>
                        <i id="fa fa-envelope"><img src="https://i.postimg.cc/GptSPVxq/mail.png" width="35"></img></i>
                        <p><a href="mailto:correo@company.com">josefc@jfc.edu.co</a></p>
                    </div>
                </div>
                <div id="footer-der">
                    <p id="footer-lema-inst">
                        <span><h3>Lema institucional</h3></span><br></br>
                        "Donde la educación se encuentra con la innovación: preparando a los estudiantes para un futuro brillante"
                    </p>
                    <div id="footer-icons">
                        <a href={() => false}><i id="logo-facebook"></i><img src="https://i.postimg.cc/3Nmq4GFh/facebook.png" width="35"></img></a>
                        <a href={() => false}><i id="fa fa-twitter"></i><img src="https://i.postimg.cc/P53SqKnZ/twitter.png" width="35"></img></a>
                        <a href={() => false}><i id="fa fa-linkedin"></i><img src="https://i.postimg.cc/T3C4DfgK/linkedin.png" width="35"></img></a>
                        <a href={() => false}><i id="logo-github"></i><img src="https://i.postimg.cc/wTYZKW9j/github.png" width="35"></img></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
