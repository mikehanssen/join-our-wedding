import React, { useState } from 'react';
import Link from 'next/link';

export default ({
  menuOpen = false,
}) => (
  <div className={menuOpen ? 'menu-open' : ''}>
    <div className="menu">
      <Link href="/">
        <a className="menu-link">
          <span className="link-text">home</span>
        </a>
      </Link>
      <Link href="/our-story">
        <a className="menu-link">
          <span className="link-text">ons verhaal</span>
        </a>
      </Link>
      <Link href="/location">
        <a className="menu-link">
          <span className="link-text">locatie</span>
        </a>
      </Link>
      <Link href="/star-team">
        <a className="menu-link">
          <span className="link-text">het team</span>
        </a>
      </Link>
      <Link href="/rsvp">
        <a className="menu-link">
          <span className="link-text">rsvp</span>
        </a>
      </Link>
      <Link href="/practical-information">
        <a className="menu-link">
          <span className="link-text">praktische informatie</span>
        </a>
      </Link>
      <Link href="/gift-tips">
        <a className="menu-link">
          <span className="link-text">cadeautips</span>
        </a>
      </Link>
    </div>
  </div>
);
