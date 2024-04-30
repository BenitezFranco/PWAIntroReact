import React from 'react';
import Logo from './Imagenes/LogoRecetas.png';
import LogoGit from './Imagenes/logoGit.png';


function Header() {
    return (
        <header className="bg-color1 py-2 px-1 " >
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <a href="/">
                        <img src={Logo} alt="Logo" className="h-auto w-24" />
                    </a>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://github.com/BenitezFranco/PWAIntroReact" className="flex flex-col items-center text-lg text-color2 font-bold text-center leading-6 tracking-wide">
                                <img src={LogoGit} alt="Logo" className="h-auto w-12 mb-1" /> {/* mb-1 añade un margen inferior de 0.25rem */}
                                Repositorio
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
