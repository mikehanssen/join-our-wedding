import Layout from '../components/layout';

export default function GiftTips() {
  return (
    <Layout pageTitle="Cadeautips">
      <div className="content content-center mb-100">
        <h1 className="title mt-60">
          Cadeautips
        </h1>
        <div className="gifts-container">
          <div className="gift-wrapper">
            <div className="gift-tip">
              <img className="gift-tip-img" src="/img/bali.jpg" alt="" />
              <div className="gift-tip-content">
                <div className="gift-tip-title">Honeymoon funds</div>
                <div className="gift-tip-description">Bali, Bali, Bali. Yes, please!</div>
              </div>
              <div className="hearts">
                <img src="/img/heart.svg" alt="" />
                <img src="/img/heart.svg" alt="" />
                <img src="/img/heart.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="gift-wrapper">
            <div className="gift-tip">
              <img className="gift-tip-img" src="/img/dyson.jpg" alt="" />
              <div className="gift-tip-content">
                <div className="gift-tip-title">Dyson V8 Absolute</div>
                <div className="gift-tip-description">Om alles netjes te houden</div>
              </div>
              <div className="hearts">
                <img src="/img/heart.svg" alt="" />
                <img src="/img/heart.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="gift-wrapper">
            <div className="gift-tip">
              <img className="gift-tip-img" src="/img/green-egg.jpg" alt="" />
              <div className="gift-tip-content">
                <div className="gift-tip-title">Big green egg - Medium</div>
                <div className="gift-tip-description">Voor de warme zomerdagen (en de koude)</div>
              </div>
              <div className="hearts">
                <img src="/img/heart.svg" alt="" />
                <img src="/img/heart.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="gift-wrapper">
            <div className="gift-tip">
              <img className="gift-tip-img" src="/img/service-set.jpg" alt="" />
              <div className="gift-tip-content">
                <div className="gift-tip-title">Serviesset 20-delig Mossa</div>
                <div className="gift-tip-description">Om het BBQ vlees op te leggen</div>
              </div>
              <div className="hearts">
                <img src="/img/heart.svg" alt="" />
                <img src="/img/heart.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="gift-wrapper">
            <div className="gift-tip">
              <img className="gift-tip-img" src="/img/crystal.jpg" alt="" />
              <div className="gift-tip-content">
                <div className="gift-tip-title">Tuning Fork & Clear Quartz Crystal</div>
                <div className="gift-tip-description">Hier maak je Kayleigh blij mee</div>
              </div>
              <div className="hearts">
                <img src="/img/heart.svg" alt="" />
                <img src="/img/heart.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="gift-wrapper">
            <div className="gift-tip">
              <img className="gift-tip-img" src="/img/distillery.jpg" alt="" />
              <div className="gift-tip-content">
                <div className="gift-tip-title">LAPHROAIG 1815 LEGACY EDITION</div>
                <div className="gift-tip-description">Hier maak je Mike blij mee</div>
              </div>
              <div className="hearts">
                <img src="/img/heart.svg" alt="" />
                <img src="/img/heart.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="gift-wrapper">
            <div className="gift-tip">
              <img className="gift-tip-img" src="/img/present.jpg" alt="" />
              <div className="gift-tip-content">
                <div className="gift-tip-title">Eigen ideeen?</div>
                <div className="gift-tip-description">Neem contact op met de ceremoniemeester of verras ons.</div>
              </div>
              <div className="hearts">
                <img src="/img/heart.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flowers-bottom"></div>
    </Layout>
  );
}
