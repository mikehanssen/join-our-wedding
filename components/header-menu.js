import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

export default function HeaderMenu() {
  const [activeUrl, setActiveUrl] = useState('/');

  useEffect(() => {
    setActiveUrl(Router.route);
  }, []);

  return (
    <div className="header-menu">
      <Link href="/our-story">
        <a className={activeUrl === '/our-story' ? 'menu-link m--active' : 'menu-link'}>
          <span className="link-text">ons verhaal</span>
        </a>
      </Link>
      <Link href="/location">
        <a className={activeUrl === '/location' ? 'menu-link m--active' : 'menu-link'}>
          <span className="link-text">locatie</span>
        </a>
      </Link>
      <Link href="/star-team">
        <a className={activeUrl === '/star-team' ? 'menu-link m--active' : 'menu-link'}>
          <span className="link-text">het team</span>
        </a>
      </Link>
      <Link href="/rsvp">
        <a className={activeUrl === '/rsvp' ? 'menu-link m--active' : 'menu-link'}>
          <span className="link-text">rsvp</span>
        </a>
      </Link>
      <Link href="/practical-information">
        <a className={activeUrl === '/practical-information' ? 'menu-link m--active' : 'menu-link'}>
          <span className="link-text">praktische informatie</span>
        </a>
      </Link>
      <Link href="/gift-tips">
        <a className={activeUrl === '/gift-tips' ? 'menu-link m--active' : 'menu-link'}>
          <span className="link-text">cadeautips</span>
        </a>
      </Link>
      <Link href="/agenda">
        <a className={activeUrl === '/agenda' ? 'menu-link m--active' : 'menu-link'}>
          <span className="link-text">agenda</span>
        </a>
      </Link>
    </div>
  );
}
