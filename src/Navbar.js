import logo from './assets/img/Logo.png';
import linkedin from './assets/img/linkedinsmall.svg'

const Navbar = () => {
    return ( 
        <body className='navbar'>
        <header className='shadow'>
            <img className='img logo' src={logo} alt="" />
            <nav>
                <ul className='navLinks'>
                    <li><a className='navbar-a' href ='#experience'>EXPERIENCE</a></li>
                    <li><a className='navbar-a' href ='#involvement'>INVOLVEMENT</a></li>
                    <li><a className='navbar-a' href ='#contact'>CONTACT</a></li>
                </ul>
            </nav>
            <a href ='https://www.linkedin.com/in/mellojerichomalig/' target="_blank"><img className='linkedin' src={linkedin} alt="" /></a>
        </header>
        </body>
    );
}
 
export default Navbar;