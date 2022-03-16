import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

const ClientLayout = (props: Props) => {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <NavLink to="/">Home page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin">Admin</NavLink>
                    </li>

                </ul>
            </header>
            <main>{<Outlet />}</main>
            <footer>Footer</footer>
        </div>
    )
}

export default ClientLayout