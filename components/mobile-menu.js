import Link from 'next/link';
import styles from './mobile-menu.module.sass';
import utilStyles from '../styles/utils.module.sass';

export default function MobileMenu() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/"><a>home</a></Link>
        </li>
        <li>
          <Link href="/our-story"><a>ons verhaal</a></Link>
        </li>
        <li>
          <Link href="/location"><a>locatie</a></Link>
        </li>
        <li>
          <Link href="/star-team"><a>het team</a></Link>
        </li>
        <li>
          <Link href="/rsvp"><a>rsvp</a></Link>
        </li>
        <li>
          <Link href="/practical-information"><a>praktische informatie</a></Link>
        </li>
        <li>
          <Link href="/gift-tips"><a>cadeautips</a></Link>
        </li>
      </ul>
    </div>
  );
}
