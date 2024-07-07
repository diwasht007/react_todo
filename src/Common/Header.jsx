import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
        <h1>Header Part</h1>
    <nav>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about-us'}>About</Link></li>
            <li><Link to={'/course'}>Course</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/form'}>Form</Link></li>
            <li><Link to={'/formhandel'}>FoemHAndel</Link></li>
            <li><Link to={'/pasgen'}>PasswordGen</Link></li>

        </ul>
    </nav>
    </div>
  )
}
