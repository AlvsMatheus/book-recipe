import React from 'react';
import './Navbar.scss';
import {Menu, X} from "lucide-react";
import {useState} from "react";
import {Link} from "react-router-dom";
import useAnimations from '../animations/useAnimations';
import { motion } from 'framer-motion';


export default function Navbar() {

const [menu, setMenu] = useState(false);
const { fadeIn } = useAnimations();



  return (
    <header className='header-navbar d-flex flex-column justify-content-between'>
        <nav className='nav-container d-flex align-items-center justify-content-between '>
        <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="show"
                
                >
            <section className='d-flex pt-lg-4 pt-md-2'>
                <p className='recipe'>Recipe.</p>
            </section>
        </motion.div>
            <section className='hamburguer-container d-flex pe-3'>
                <button className='hamburguer' onClick={() => setMenu(!menu)}>
                   {menu ? <X size={32}/> : <Menu size={32}/>}
                </button>
            </section>
            <section className='navlinks'>
                <ul className='d-flex gap-4 pt-4 pe-4'>
                    <li><Link className='link-nav' to={'/create'}>Create Recipe</Link></li>
                    <li><Link className='link-nav' to={'/myaccount'}>My Account</Link></li>
                    <li><Link className='link-nav' to={'/saved'}>My Saves</Link></li>
                    <li><Link className='link-nav' to={'/about'}>About us</Link></li>
                </ul>
            </section>
        </nav>
        <div className={`menu-overlay ${menu ? "open" : ""}`} onClick={() => setMenu(false)}>
            <aside className={`menu-sidebar ${menu ? "open" : ""}`}>
                        <ul>
                            <li><Link className='link-sidebar' to={'/create'}>Create Recipe</Link></li>
                            <li><Link className='link-sidebar' to={'/myaccount'}>My Account</Link>t</li>
                            <li><Link className='link-sidebar' to={'/saved'}>My Saves</Link></li>
                            <li><Link className='link-sidebar' to={'/about'}>About us</Link></li>
                        </ul>
            </aside>
        </div>
        <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="show"
                
                >
        <article className='sign-container d-flex justify-content-between p-lg-5 p-md-5 mb-lg-4 mb-md-4 '>
            <article className='sign d-flex flex-column justify-content-start gap-5'>
                
                    <section className='d-flex flex-column justify-content-center'>
                        <p className='text-sign'>Are you looking for new recipes?</p>
                        <p className='text-sign-two d-flex justify-content-center text-sign two'> Do you already have an account?</p>
                    </section>

                <section className='d-flex justify-content-evenly'>
                    <div className='d-flex gap-5' >
                    <a className='link-sign' href="">SIGN IN</a>
                    <a className='link-sign up' href="">SIGN UP</a>
                    </div>
                </section>
            </article>
        </article>
        </motion.div>
    </header>
)}
