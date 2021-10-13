import {Link,NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'
import {useDispatch,useSelector} from 'react-redux'
import {loginRequested} from '../../state/actions/loginAction';

const NavbarFooter =(props)=>{
    const dispatch=useDispatch();
    const loginInfo=useSelector((state)=>state.login);
    console.log('llogin',loginInfo)
    return(
       <div className='footer_navbar'>
           {/* {JSON.stringify(loginInfo)} */}
           <NavLink to='signin'>
           <h2 onClick={()=>dispatch(loginRequested({
               email:"eve.holt@reqres.in",
               password:"cityslicka"
           }))} className='footer_slider'>{props.name}</h2>
           </NavLink>
           
           <i className='footer_slider_icon'><FontAwesomeIcon icon={faAlignJustify} /></i>
       </div>
    )
}

export default NavbarFooter;