import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
        <p>© 2025 Mi Aremy. Todos los derechos reservados.</p>
        <div className="footer-icons">
            <a href="https://www.instagram.com/miaremy_boutique?igsh=MWtwdzFnbzI4aTRtZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
            </a>
            <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
            </a>
            <a href="https://tiktok.com/@tu_pagina" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
            </a>
        </div>
        </footer>
    );
};

export default Footer;
