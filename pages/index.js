import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className="flowers" />
      <div className="content">
        <div className="clip-text">
          Save the
          <br />
          date
        </div>
        <div className="names">Kayleigh & Mike</div>
        <div className="clip-text clip-text_one">02.10.20</div>
        <Link href="/rsvp">
          <a className="btn-primary mt-80">
            <span className="letter">R</span>
            <span className="letter">S</span>
            <span className="letter">V</span>
            <span className="letter">P</span>
          </a>
        </Link>
      </div>
      <div className="mike-kayleigh-wrapper mt-100">
        <img src="/img/mike-kayleigh.jpg" className="mike-kayleigh-img" alt="" />
      </div>
    </Layout>
  );
}
