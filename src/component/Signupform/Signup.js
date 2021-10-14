import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'
import { faChromecast } from '@fortawesome/free-brands-svg-icons';
import img5 from '../../images/1.jpg'
import Userfront from "@userfront/react";

Userfront.init("demo1234");

const SignupForm = Userfront.build({
    toolId: "nkmbbm"
  });
  
  function App() {
    return <SignupForm />;
  }
  
  export default App;
        // <div className="heading">
        //     <h1>Working Signin</h1>
        // <div className="mainform">
        //     <div>
                
        //         <input placeholder='UserName' className='username'/>
                
        //     </div>
        //     <br/>
        //     <div>
        //     <input placeholder='Email'  className='email'/>
        //     </div>
        //     {/* <img className="imgdone" src={img5}/> */}
            
        // </div>
        // <div></div>
        //  <i className='footer_slider_icon'><FontAwesomeIcon icon={faChromecast} /></i>
        // </div>
// export default SignupForm;