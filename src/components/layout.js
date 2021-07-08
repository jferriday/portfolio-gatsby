import React from 'react';
import {Link} from 'gatsby';
import './layout.css'

const Layout = ({children}) => {
    return(
        <div className="layout-grid">
            <header className="header">
            <nav>
                <ul className="nav-list">
                    <li className="nav-link"><Link to="/">About</Link></li>
                    <li className="nav-link"><Link to="#portfolio">Portfolio</Link></li>
                    <li className="nav-link"><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>

        </header>
        <main>
            {children}
        </main>

        </div>
    )
}

export default Layout