import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { motion,animate } from "framer-motion"
import './Styles/Navbar.css'

function Navbar (props){
    return ( 
        <div className='nav'>
            <motion.div className='Navbar-container'
            initial={{y:-250}}
            animate={{y:-10}}
            transition={{delay:0.2, type:'spring', stiffness:55}}
            >
                <div className='logo-container'><h1 className='Navbar-h1'><span>GREGORY</span></h1></div>
                <div className='lists-container'>
                  <Link className={props.page==='home'?'nav-link-selected1':'nav-link1'} to={'/to'}>Home</Link>
                 <Link className={props.page==='explore'?'nav-link-selected1': 'nav-link1'} to={'/about'}>About</Link>
                 <Link className={props.page==='about'?'nav-link-selected1': 'nav-link1'} to={'/resume'}>Resume</Link>  
                 <Link className={props.page==='about'?'nav-link-selected1': 'nav-link1'} to={'/service'}>Services</Link> 
                 <Link className={props.page==='about'?'nav-link-selected1': 'nav-link1'} to={'/skills'}>Skills</Link>   
                 <Link className={props.page==='about'?'nav-link-selected1': 'nav-link1'} to={'/projects'}>Projects</Link>  
                 <Link className={props.page==='about'?'nav-link-selected1': 'nav-link1'} to={'/blog'}>My Blog</Link>
                 <Link className={props.page==='about'?'nav-link-selected1': 'nav-link1'} to={'/contact'}>Contact</Link>    
                </div>
            </motion.div>
        </div>

     );
}
 
export default Navbar;
