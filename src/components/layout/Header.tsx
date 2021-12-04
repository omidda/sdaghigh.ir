import React from 'react'

type HeaderType = {
    title: string
}

function Header({title} : HeaderType) {
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}
export default Header

