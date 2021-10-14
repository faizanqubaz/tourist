import React ,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const NavbarFooter =(props)=>{
    const [popup,setPopup]=useState(false)
    const handlingClick=()=>{
    setPopup(!popup)
   
    }
    return(
       <div className='footer_navbar'>
           <NavLink to='/signup'>
           <h2 className='footer_slider'>{props.name}</h2>
           </NavLink>
           <i onClick={handlingClick} className='footer_slider_icon'><FontAwesomeIcon icon={faAlignJustify} /></i>
           <div className={popup ? 'antipopup' : 'popup'}>
               <ul>
                   <li>Home</li>
                   <hr />
                   <li>About Us</li>
                   <hr />
                   <li>Contact Us</li>
                   <hr />
                   <li>Gallery</li>
                   <hr />
               </ul>
           </div>
       </div>
    )
}

export default NavbarFooter;