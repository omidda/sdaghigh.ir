import React from 'react'
import { Menu } from "./Menu"
import './header.scss'
type HeaderType = {
    title: string
}



function Header({title} : HeaderType) {
    return (
            
                <div>
                <h1>{ title }</h1>
                 <span style={{color : "yellow"}}>
                     <Menu />
                 </span>
             </div>
    )
}
export default Header

