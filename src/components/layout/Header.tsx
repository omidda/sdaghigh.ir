import React from 'react'
import { Menu } from "./Menu"
import './header.scss'
import SwitchButton, { ThemeConsumer } from "../../ContextPC"
type HeaderType = {
    title: string
}



function Header({title} : HeaderType) {
    return (
        <ThemeConsumer>
            { value => 
                <div>
                <h1>{ title }</h1>
                <span>
                    <Menu />
                    { value.mode } | { value.lang}
                </span>

                <SwitchButton />
            </div>
            }
        </ThemeConsumer>
    )
}
export default Header

