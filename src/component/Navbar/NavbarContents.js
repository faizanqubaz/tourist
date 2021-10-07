import React,{useState} from 'react';




const NavbarContent=()=>{
  const [items,setItem]=useState([
    {
      id:'1',
      name:"Home"
    },
    {
      id:'2',
      name:"About Us"
    },
    {
      id:'3',
      name:"Experience"
    },   
  ])
   
  return(
      <div className='navbar_content_head'>

        {
          items.map((item)=>(
              <h2 className='navbar_content_heading'>{item.name}</h2>
          ))
        }
          
      </div>
  )
}

export default NavbarContent;