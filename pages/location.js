import Layout from '../components/layout';

export default function Location() {
  return (
    <Layout>
      <div className="content location-content text-left mt-80 mb-100">
        <div className="location-container">
          <h1 className="title mobile-title left-title">
            Locatie
          </h1>
          <div className="left">
            <img src="/img/marquette.png" className="marquette" alt="Langoed Marquette" />
          </div>
          <div className="right">
            <h1 className="title desktop-title left-title">
              Locatie
            </h1>
            <div className="mt-50 mb-20">
              Hotel & Chateau Marquette
            </div>
            <table className="mb-100">
              <tr>
                <td colSpan="2">Marquettelaan 34</td>
              </tr>
              <tr>
                <td className="pb-40" colSpan="2">1968 JT Heemskerk</td>
              </tr>
              <tr>
                <td>Telefoon:</td>
                <td>+31(0)251-257025</td>
              </tr>
              <tr>
                <td>E-mail:</td>
                <td>info@hotel-marquette.com</td>
              </tr>
            </table>
            <div className="subtitle">
              Sweet dreams
            </div>
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
      <div className="flowers-bottom"></div>
    </Layout>
  );
}
