import React from 'react'
import './header.scss'

export function Menu() {
    let menuItems = [{
        id: 1,
         title: "Home" , url : "/"
        },{
            id: 2,
         title: "Home" , url : "/"
            }];
            let res = 10 / 0;
            

    return (
        <div className="Navigation">
            {res}
            <ul>
            {
                menuItems.map(m=>{
                    return <li key={m.id}>
                             <a href={m.url}>
                               {m.title}
                             </a>
                           </li>
                })
            }   
            </ul>         
        </div>
    )
}
