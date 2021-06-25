import React from 'react'
import { Link } from 'gatsby'
import * as styles from './header.module.css'
import '../normalize.css'

const Header = () => {
    return(
        <header className={styles.header}>
           <span className={styles.logo}>&lt;JF/&gt;</span>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navLink}><Link to="/">About</Link></li>
                    <li className={styles.navLink}><Link to="#portfolio">Portfolio</Link></li>
                    <li className={styles.navLink}><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header