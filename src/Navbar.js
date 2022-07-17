import logo from './assets/img/Logo.png';
import linkedin from './assets/img/linkedinsmall.svg'

const Navbar = () => {
    return ( 
        <header>
            <img className='img logo' src={logo} alt="" />
            <nav>
                <ul className='navLinks'>
                    <li><a href ='#'>EXPERIENCE</a></li>
                    <li><a href ='#'>INVOLVEMENT</a></li>
                    <li><a href ='#'>CONTACT</a></li>
                </ul>
            </nav>
            <a href ='#'><img className='linkedin' src={linkedin} alt="" /></a>
        </header>
    );
}
 
export default Navbar;