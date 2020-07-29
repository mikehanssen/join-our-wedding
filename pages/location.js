import Layout from '../components/layout';

export default function Location() {
  return (
    <Layout pageTitle="Locatie">
      <div className="content location-content text-left mt-80 mb-100">
        <div className="content content-center">
          <h1 className="title left-title">
            Locatie
          </h1>
          <div className="table-header mb-20 m-hidden">
            Hotel & Chateau Marquette
          </div>
          <table className="m-hidden">
            <tr>
              <td colSpan="2">Marquettelaan 34</td>
            </tr>
            <tr>
              <td className="pb-40" colSpan="2">1968 JT Heemskerk</td>
            </tr>
          </table>
          <table className="mb-100 m-hidden desktop-table">
            <tr>
              <td>Telefoon:</td>
              <td>:</td>
              <td><a href="tel:310251257025">+31(0)251-257025</a></td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>:</td>
              <td><a href="mailto:info@hotel-marquette.com">info@hotel-marquette.com</a></td>
            </tr>
          </table>
        </div>
        <div className="location-container">
          <div className="left">
            <img src="/img/marquette.png" className="marquette" alt="Langoed Marquette" />
          </div>
          <div className="right">
            <div className="mt-50 mb-20 d-hidden">
              Hotel & Chateau Marquette
            </div>
            <table className="mb-100 d-hidden">
              <tr>
                <td colSpan="2">Marquettelaan 34</td>
              </tr>
              <tr>
                <td className="pb-40" colSpan="2">1968 JT Heemskerk</td>
              </tr>
              <tr>
                <td>Telefoon:</td>
                <td><a href="tel:310251257025">+31(0)251-257025</a></td>
              </tr>
              <tr>
                <td>E-mail:</td>
                <td><a href="mailto:info@hotel-marquette.com">info@hotel-marquette.com</a></td>
              </tr>
            </table>
            <h2 className="subtitle">
              Sweet dreams
            </h2>
            <p className="mt-20">
              Op het landgoed bevind zich tevens het hotel Château Marquette. Het hotel is op loopafstand en dus ideaal voor
              iedereen die na het feesten lekker wil ontspannen in een hotelkamer om de volgende dag te beginnen met een
              lekker ontbijtje.
              <br />
              <br />
              Bij interesse geef dan bij het boeken door dat je bij ons hoort en krijg een mooie korting op een kamer.
            </p>
          </div>
        </div>
      </div>
      <div className="flowers-bottom" />
    </Layout>
  );
}
