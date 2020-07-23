import Head from 'next/head';
import { useState } from 'react';
import MobileMenu from './mobile-menu';

const name = 'K & M';
export const siteTitle = 'Join Our Wedding | K & M';

export default function Layout({ children, className = undefined, pageTitle = 'Home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={className !== undefined ? className : ''}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <title>K & M | {pageTitle}</title>
      </Head>
      <header className="header">
        <img src="/img/logo.svg" alt="" className="logo" />
        <button className="toggle-menu" onClick={toggleMenu}>
          <span className="menu-icon-wrapper">
            <span className="top" />
            <span className="middle" />
            <span className="bottom" />
          </span>
        </button>
      </header>
      <MobileMenu menuOpen={menuOpen}/>
      <main>{children}</main>
      <footer className="footer">
        <a href="" className="footer-link">Contact us</a>
        <div className="mt-20">Kayleigh & Mike</div>
        <div className="mt-20">ceremoniemeester | patricia</div>
        <img className="mt-80 footer-logo" src="/img/logo.svg" alt="Footer logo" />
      </footer>
    </div>
  );
}
