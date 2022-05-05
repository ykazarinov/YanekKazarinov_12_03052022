import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'

function Header(){

    const menu = [
        {
            title: 'Accueil',
            link: '/'
        }, 
        {
            title: 'Profil',
            link: '#'
        },
        {
            title: 'Réglage',
            link: '#'
        },
        {
            title: 'Communauté',
            link: '#'
        }
    ]

    return(

        <header>
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt='SportSee logo' />
                </Link>
            </div>
            <nav className='menu-top'>
                    <ul>
                        {menu.map((item, index) => (
                            <li key={`${index}`}>
                                <Link to={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                        )}
                    </ul>
                    </nav>
        </header>
    )
}
export  default Header;