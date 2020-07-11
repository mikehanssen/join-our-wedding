import Link from 'next/link';
import Layout from '../components/layout';
import homeStyles from '../styles/home.module.sass';

export default function Home() {
  return (
    <Layout>
      <div className={homeStyles.flowers}>
        <img alt="Flowers header" className={homeStyles.flowersImage} src="/flowers-header.svg" />
      </div>
      <div>
        <div className={homeStyles.headerNames}>
          <h1>Kayleigh & Mike</h1>
        </div>
        <Link href="/rsvp"><a>RSVP</a></Link>
      </div>
      <div>
        <img alt="Kayleigh & mike" src="/images/footer-image.jpg" />
      </div>
    </Layout>
  );
}
