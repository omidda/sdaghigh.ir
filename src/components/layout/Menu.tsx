import React from 'react'
import './header.scss'

export function Menu() {
    let menuItems = [{
        id: 1,
         title: "Home" , url : "/"
        },{
            id: 2,
         title: "Expriences" , url : "/expriences"
            },{
            id: 3,
         title: "Social" , url : "/social"
            }];
            

    return (
        <div className="Navigation">
            {/* {res} */}
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
