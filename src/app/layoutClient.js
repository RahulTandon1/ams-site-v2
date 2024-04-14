'use client'

import Image from "next/image";

import Menu from './components/menu/menu'

import Logo from '../imgs/favicon.png';
import Facebook from '../imgs/facebook.svg';
import Whatsapp from '../imgs/whatsapp.svg';
const openNav = (e) => {
    let el = document.getElementsByClassName('menu-container')[0]
    el.style.width = "100vw";

    let menu = document.getElementsByClassName('menu')[0];
  
    menu.classList.add('shadow-on');
    menu.classList.remove('shadow-off');
    
    console.log('open nav called');
    console.log(`clicked ${e.target}`)
  }
  
export default function PageLayout(props) {
return(
    <>
    <Menu />
    <div className="main-content">
        
        <header className="header" onClick={e => console.log(e.target)}>
            <div className="menu-button" onClick={ openNav}>
                <svg className="hamburger" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                <span className="menu-indicating-text">MENU</span>                
            </div>
            
            <h1 className="school-name-heading">Amrit Masonic Special School</h1>
            
            {/* <img
                className="logo"
                src={Logo} 
                alt="logo of AMSS; yellow coloured Freemasons logo and text on blue background and red outline"
            /> */}
            <Image 
            className='logo'
            src={Logo}
            alt="logo of AMSS; yellow coloured Freemasons logo and text on blue background and red outline"
            />
        </header>
        <div className="container">
            {props.children}
        </div>
        
        <footer className="footer">
        <div className="footer-wrapper-except-copyright">
        
        <div id="contact-us-info-column">
            <div id="email-container">
                <p>amritmasonicschool@gmail.com</p>
                <button id="copy-email-btn">Copy Mail</button>
            </div>
            <div id="facebook">
                <p>Find us on Facebook</p>
                {/* <img src={Facebook} alt="Facebook logo" /> */}
                <Image 
                src={Facebook}
                alt="Facebook logo"
                />
            </div>
            <div id="whatsapp">
                <p>Find us on Whatsapp</p>
                {/* <img src={Whatsapp} alt="Whatsapp logo" /> */}
                <Image 
                src={Whatsapp}
                alt="Whatsapp logo"
                />
            </div>
            <div>
            <button id="contact-us-button">Contact Us Page</button>
            </div>
        </div>
        
        <hr className="footer-divider" />

        <div id="timings-column">
            <h2>Timings</h2>
            <p>
            Open from 9 AM to 2 PM, Monday to Friday. <br />
            9 AM to 12 PM on Saturday <br />
            Day Boarding from 2 PM to 6 PM, Monday to Friday.
            </p>
        </div>
        <hr className="footer-divider" />

        <div id="map-column">
            <h2>Map</h2>
            <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDdGi2K4nMplDgSO4CI_FCupROV1LAyR-Q
        &q=Sai+Amrit+Masonic+School"
                allowFullScreen
            ></iframe>
        </div>
    </div>
    <div className="copyright">&copy; AMSS</div>
    
        </footer>

    </div>
    </>
)}
  