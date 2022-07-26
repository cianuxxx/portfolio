import mlogo from './assets/img/logowhite.png'

const Contact = () => {
    return ( 
        <body className="contact" id='contact'>
            <div className="container">
                <img className='contact-logo' src={mlogo} alt="" />
                <div className="contacts">
                    <a className='contacts-h5' href ='https://www.linkedin.com/in/mellojerichomalig/' target="_blank">Linkedin</a>
                    <a className='contacts-h5' href ='https://drive.google.com/file/d/10PPNQtJhdDDn010BtSFUXESlNUuB4A8B/view?usp=sharing' target="_blank">Resume</a>
                </div>
                <div className="contacts">
                    <h5 className='contacts-h5 end'>@2022 Mello Malig - 09087164663 - mellojerichomalig@gmail.com</h5>
                </div>
            </div>
        </body>
     );
}
 
export default Contact;