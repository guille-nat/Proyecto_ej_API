import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar(){
    return(
        <>
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/' >Inicio</Link>
                </li>
                <li>
                    <Link to='/form'>Manipulación Datos</Link>
                </li>
                <li>
                    <Link to='/users-list'>Lista de Usuarios</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}