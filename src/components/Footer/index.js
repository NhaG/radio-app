import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import './styles.scss';

export function Footer() {
    return (


        <footer>
            <div className='email'>
                info@radiol.com
            </div>
            <ul className="social">
                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FiFacebook /></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FiInstagram /></a></li>
            </ul>
        </footer>
    )
}