import accenture from './assets/img/Accenture.png'
import exora from './assets/img/Exora.png'

const Experience = () => {
    return ( 
        <body className="experience" id="experience">
            <div className="container">
            <h1 className="home">Experience {`{`}</h1>
            <div className="container-2">
                <div className='img-experience'>
                    <img className='img-pointer' src={accenture} alt="" />
                    <div className="image-text">
                        <h2>Information Technology Intern</h2>
                        <h4>Accenture Philippines</h4>
                        <h5><em>{`(`}June 2020 - August 2021{`)`}</em></h5>
                    </div>
                </div>
                <div className='img-experience'>
                    <img className='img-pointer' src={exora} alt="" />
                    <div className="image-text">
                        <h2>Software Engineer Intern</h2>
                        <h4>Exora Technologies</h4>
                        <h5><em>{`(`}December 2021 - June 2022{`)`}</em></h5>
                    </div>
                </div>
            </div>
            <h1 className="home-2">{`}`}</h1>
            <p className="bottom-text2">Involvement</p>
            <p className="line2">|</p>
            </div>
        </body>
    );
}
 
export default Experience;