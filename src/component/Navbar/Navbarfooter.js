
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'


const NavbarFooter =(props)=>{
    return(
       <div className='footer_navbar'>
           <h2 className='footer_slider'>{props.name}</h2>
           <i className='footer_slider_icon'><FontAwesomeIcon icon={faAlignJustify} /></i>
       </div>
    )
}

export default NavbarFooter;