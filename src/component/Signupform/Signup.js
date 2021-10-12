import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'
import { faChromecast } from '@fortawesome/free-brands-svg-icons';

const Signupform=()=>{
    return(
        <div className="heading">
            <h1>Working Signin</h1>
        <div className="mainform">
            <div>
                <input placeholder='UserName' className='username'/>
                
            </div>
            <br/>
            <div>
            <input placeholder='Email'  className='email'/>
            </div>
            
            
        </div>
         <i className='footer_slider_icon'><FontAwesomeIcon icon={faChromecast} /></i>
        </div>
    )
}

export default Signupform;