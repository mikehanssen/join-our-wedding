import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.sass';
import utilStyles from '../styles/utils.module.sass';
import MobileMenu from "./mobile-menu";

const name = 'K & M';
export const siteTitle = 'Join Our Wedding | K & M';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <p>Hamburger</p>
        <h2 className={utilStyles.headingLg}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2>
      </header>
      <MobileMenu/>
      <main>{children}</main>
      <footer className={styles.footer}>
        <span>contact us</span>
        <ul>
          <li>Kayleigh & Mike</li>
          <li>ceremoniemeester | Patricia</li>
        </ul>
        <h2>K & M</h2>
      </footer>
    </>
  );
}
