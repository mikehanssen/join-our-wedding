import Link from 'next/link';
import Layout from '../components/layout';

export default function PracticalInformation() {
  return (
    <Layout pageTitle="Praktische informatie">
      <div className="content content-center mb-100">
        <h1 className="title mt-60">
          Praktische informatie
        </h1>
        <div className="practical-info-container">
          <div className="practical-info-wrapper">
            <div className="practical-info mt-60">
              <div className="practical-info-img-wrapper">
                <img className="practical-info-img" src="/img/couple.svg" alt="" />
              </div>
              <div className="practical-info-title">Mag ik iemand meenemen?</div>
              <p className="practical-info-description">
                Neem even contact met ons op als je graag iemand mee wilt nemen, dan kunnen wij kijken of er nog ruimte is voor iemand extra.
              </p>
              <div className="practical-info-title mt-30">Zijn kinderen welkom tijdens de bruiloft?</div>
              <p className="practical-info-description">
                Ook al vinden wij kinderen heel gezellig! Wij hebben ervoor gekozen om deze dag zonder hen te beleven.
              </p>
            </div>
          </div>
          <div className="practical-info-wrapper">
            <div className="practical-info mt-60">
              <div className="practical-info-img-wrapper">
                <img className="practical-info-img" src="/img/parking.svg" alt="" />
              </div>
              <div className="practical-info-title">Waar kan ik parkeren?</div>
              <p className="practical-info-description">
                Er zijn zowel bij het hotel als bij het landgoed parkeergelegenheden waar kosteloos gebruik van gemaakt kan worden.
              </p>
              <div className="practical-info-title mt-30">Hoe kom ik er met het openbaar vervoer?</div>
              <p className="practical-info-description">
                Vanaf treinstation Castricum, Beverwijk of Uitgeest kan je bus 73 of 167 nemen.
              </p>
            </div>
          </div>
          <div className="practical-info-wrapper">
            <div className="practical-info mt-60">
              <div className="practical-info-img-wrapper">
                <img className="practical-info-img" src="/img/bed.svg" alt="" />
              </div>
              <div className="practical-info-title">Kan ik er overnachten</div>
              <p className="practical-info-description">
                Ja! Er zijn meerdere kamers beschikbaar bij het hotel Chateau Marquette op loopafstand van het Chateau. Laat bij het boeken weten dat je bij onze bruiloft hoort om een korting te ontvangen.
              </p>
            </div>
          </div>
          <div className="practical-info-wrapper">
            <div className="practical-info mt-60">
              <div className="practical-info-img-wrapper">
                <img className="practical-info-img" src="/img/present.svg" alt="" />
              </div>
              <div className="practical-info-title">Hebben jullie nog speciale cadeau wensen?</div>
              <p className="practical-info-description">
                We vinden het al fijn als jullie deze mooie dag met ons willen delen. Als je daarnaast ook een cadeau of geld wil geven kijk dan even bij onze <Link href="/gift-tips"><a className="color-red">cadeautips</a></Link>. Je kan altijd contact opnemen met de ceremoniemeester als je een cadeau samen met andere gasten wilt geven.
              </p>
            </div>
          </div>
          <div className="practical-info-wrapper">
            <div className="practical-info mt-60">
              <div className="practical-info-img-wrapper">
                <img className="practical-info-img" src="/img/dresscode.svg" alt="" />
              </div>
              <div className="practical-info-title">Dresscode Dames (Tenue de ville)</div>
              <p className="practical-info-description">
                Voor de vrouwen denk aan een (lange) avondjurk of een nette cocktailjurk, of zoek even wat voorbeelden op van Tenue de ville outfits.
              </p>
              <p className="practical-info-description mt-20">
                Als je dinergast bent, zouden wij het fijn vinden als je in een lange jurk komt (of een mooie powersuit natuurlijk). Kies voor een bescheiden decolleté en maak je outfit - als je dat wilt - af met een chique clutch.
              </p>
            </div>
          </div>
          <div className="practical-info-wrapper">
            <div className="practical-info mt-60">
              <div className="practical-info-img-wrapper">
                <img className="practical-info-img" src="/img/dresscode.svg" alt="" />
              </div>
              <div className="practical-info-title">Dresscode Heren (Tenue de ville)</div>
              <p className="practical-info-description">
                Als je daggast bent, wordt een pak zeer gewaardeerd en nemen wij hier het advies van Brigitte over (Mike zijn tailor). Kies voor een keurig (donkerblauw) pak, met de perfecte pasvorm, hierdoor kun je een net overhemd dragen met een bijpassende das, tot slot
                is een pochet zeker op zijn plaats en natuurlijk net gepoetste herenschoenen. Let op dat je geen drie-deling pak aantrekt op deze dag.
              </p>
              <p className="practical-info-description mt-20">
                Mocht je jezelf niet fijn voelen in een pak of enkel als avondgast deze mooie dag met ons delen denk aan een net overhemd in combinatie met een nette broek en mooie herenschoenen.
              </p>
            </div>
          </div>
          <div className="practical-info-wrapper" />
          <div className="practical-info-wrapper">
            <div className="practical-info mt-60">
              <div className="practical-info-img-wrapper">
                <img className="practical-info-img" src="/img/washhands.svg" alt="" />
              </div>
              <div className="practical-info-title">Hoe worden de regels van covid-19 toegepast?</div>
              <p className="practical-info-description">
                Er zijn meerder ruimtes waar je je even kan terugtrekken, ook zijn er meerdere plekken op de locatie waar je je handen kan desinfecteren. Daarnaast vragen we jullie zelf een beetje de 1,5 meter in acht te houden.
              </p>
            </div>
          </div>
          <div className="practical-info-wrapper" />
        </div>
      </div>
      <div className="boquete-flowers-bottom"></div>
    </Layout>
  );
}
