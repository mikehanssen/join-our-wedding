import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { useSwipeable, Swipeable } from 'react-swipeable';
import MobileMenu from './mobile-menu';
import HeaderMenu from './header-menu';

export default function Layout({ children, className = undefined, pageTitle = 'Home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      setMenuOpen(false);
    },
    onSwipedRight: (eventData) => {
      setMenuOpen(true);
    },
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={className !== undefined ? className : ''}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <title>
          {`K & M | ${pageTitle}`}
        </title>
      </Head>
      <header className="header">
        <Link href="/">
          <div className="logo-container">
            <img src="/img/logo.svg" alt="" className="logo" />
          </div>
        </Link>
        <button className="toggle-menu" onClick={toggleMenu}>
          <span className="menu-icon-wrapper">
            <span className="top" />
            <span className="middle" />
            <span className="bottom" />
          </span>
        </button>
        <HeaderMenu menuOpen={menuOpen} />
      </header>
      <MobileMenu menuOpen={menuOpen} />
      <main {...handlers}>{children}</main>
      <footer className="footer">
        <a href="" className="footer-link">Contact us</a>
        <div className="mt-20">Kayleigh & Mike</div>
        <div className="footer-contact"><a target="_blank" rel="noreferrer" href="https://wa.me/31611157532">+316 111 57 532</a></div>
        <div className="footer-contact"><a target="_blank" rel="noreferrer" href="mailto:happycouple@join-our.wedding">happycouple@join-our.wedding</a></div>
        <div className="mt-20">ceremoniemeester | patricia</div>
        <div className="footer-contact"><a target="_blank" rel="noreferrer" href="https://wa.me/31612759512">+316 127 59 512</a></div>
        <div className="footer-contact"><a target="_blank" rel="noreferrer" href="mailto:happycouple@join-our.wedding">ceremoniemeester@join-our.wedding</a></div>
        <img className="mt-80 footer-logo" src="/img/logo.svg" alt="Footer logo" />
      </footer>
    </div>
  );
}
