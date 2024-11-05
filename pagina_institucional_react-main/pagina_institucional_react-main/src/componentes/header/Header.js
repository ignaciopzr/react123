import './Header.css';

function Header() {
    return (
        <div className="Header">
            <nav id="nav-header">
                <img src="https://i.postimg.cc/JnB6vXgX/logo.png" id="logo" alt="logo" ></img>
                <div id="linea"></div>
                <ul id="menu">
                    <li>
                        <a id="header-line" href="/index.html">Inicio</a></li>
                    <li>
                        <a id="header-line" href={() => false}>Matrículas</a>
                        <ul id="submenu">
                            <li><a id="header-line" href={() => false}>Preescolar</a></li>
                            <li><a id="header-line" href={() => false}>Primaria</a></li>
                            <li><a id="header-line" href={() => false}>Secundaria</a></li>
                        </ul>
                    </li>
                
                <li><a id="header-line" href={() => false}>Notas</a></li>
                <li><a id="header-line" href={() => false}>Docentes</a></li>
                <li><a id="header-line" href={() => false}>Misión y Visión</a></li>
                <li><a id="header-line" href={() => false}>PQRS</a></li>
                <li>
                    <a id="header-line" href={() => false}>functions</a>
                    <ul id="submenu">
                        <li><a id="header-line" href="../../../public/imc.html">IMC</a></li>
                    </ul>
                </li>
                </ul>
                <div id="reloj"></div>
            </nav>
        </div >
    );
}

export default Header;
