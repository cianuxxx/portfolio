import guidon from './assets/img/guidon.png'
import uxsoc from './assets/img/uxsoc.png'
import sanggu from './assets/img/sanggu.png'
import tindajuan from './assets/img/tindajuan.png'
import slc from './assets/img/slc.png'
import gabay from './assets/img/gabay.png'

const Involvement = () => {
    return ( 
        <body className="involvement" id='involvement'>
            <div className="container">
                <h1 className="involvement-h1">Involvement {`()`}</h1>
                <div className="involvement-container">
                    
                    <div className='img-involvement'>
                        <img className='img-pointer' src={guidon} alt="" />
                        <div className="h-container">
                            <h4 className='involvement-h'>Information Technology Intern</h4>
                            <h5 className='involvement-h'>Accenture Philippines</h5>
                        </div>
                    </div>
                    
                    <div className='img-involvement'>
                        <img className='img-pointer' src={uxsoc} alt="" />
                        <div className="h-container">
                            <h4 className='involvement-h'>HR Member Growth Officer</h4>
                            <h5 className='involvement-h'>User Experience Society</h5>
                        </div>
                    </div>

                    <div className='img-involvement'>
                        <img className='img-pointer' src={sanggu} alt="" />
                        <div className="h-container">
                            <h4 className='involvement-h'>Communications Deputy</h4>
                            <h5 className='involvement-h'>Ateneo Sanggunian</h5>
                        </div>
                    </div>

                    <div className='img-involvement'>
                        <img className='img-pointer' src={tindajuan} alt="" />
                        <div className="h-container">
                            <h4 className='involvement-h'>UI Designer</h4>
                            <h5 className='involvement-h'>Tindajuan for Hackfest 2020</h5>
                        </div>
                    </div>

                    <div className='img-involvement'>
                        <img className='img-pointer' src={slc} alt="" />
                        <div className="h-container">
                            <h4 className='involvement-h'>Student Leadership Participant</h4>
                            <h5 className='involvement-h'>Accenture Philippines</h5>
                        </div>
                    </div>

                    <div className='img-involvement'>
                        <img className='img-pointer' src={gabay} alt="" />
                        <div className="h-container">
                            <h4 className='involvement-h'>Illustrator</h4>
                            <h5 className='involvement-h'>Ateneo Gabay</h5>
                        </div>
                    </div>
                </div>
                <p className="bottom-text2">Contact</p>
                <p className="line2">|</p>
            </div>
        </body>
    );
}
 
export default Involvement;