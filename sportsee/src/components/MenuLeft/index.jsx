import icon_001 from '../../assets/images/icon_001.svg'
import icon_002 from '../../assets/images/icon_002.svg'
import icon_003 from '../../assets/images/icon_003.svg'
import icon_004 from '../../assets/images/icon_004.svg'

import { Link } from 'react-router-dom'

function MenuLeft(){
    let now = new Date();
    const copyrightText = `Copiryght, SportSee ${now.getFullYear()}`
    let menu = [icon_001, icon_002, icon_003, icon_004]
    

    return(
        <section className='col-2 left-section'>
            <nav  className='menu-left'>
                <ul>
                    {menu.map((item, index) => (
                        <li key={`${index}`}>
                            <Link to={'#'}>
                                <img src={item} alt="Sport" />
                            </Link>
                        </li>
                    )
                    )}
                </ul>
            </nav>
            <div className="copyright">
                {copyrightText}
            </div>
        </section>
    )
}

export default MenuLeft;