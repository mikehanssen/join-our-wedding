import { useState, useEffect } from 'react';
import Layout from '../components/layout';

export default function RSVP() {
  const [rsvpCode, setRsvpCode] = useState(undefined);

  const handleChange = (event) => {
    setRsvpCode(event.target.value);
  };

  const submitRsvpForm = async () => {
    console.log(rsvpCode);
  };

  return (
    <Layout className="rsvp">
      <div className="content mb-100">
        <div className="clip-text mt-80">
          RSVP
        </div>
        <p className="mt-50 mb-20">Vul hier jouw persoonlijke code in:</p>
        <div className="rsvp-input-wrapper">
          <input type="text" className="rsvp-code" onChange={handleChange} value={rsvpCode} />
        </div>
        <button onClick={submitRsvpForm} className="btn-primary m--yellow mt-80">
          <span className="letter">E</span>
          <span className="letter">N</span>
          <span className="letter">T</span>
          <span className="letter">E</span>
          <span className="letter">R</span>
        </button>
      </div>
    </Layout>
  );
}
