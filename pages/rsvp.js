import { useState, useEffect } from 'react';
import Layout from '../components/layout';

import useGuest from '../data/use-guest';

export default function RSVP() {
  const [form, setFormChange] = useState(undefined);
  const [rsvpCode, setRsvpCode] = useState('temp');
  const { guest, isLoading, isError } = useGuest(rsvpCode);

  const handleInputChange = (e) => setFormChange({
    ...form,
    [e.currentTarget.name]: e.currentTarget.value,
  });

  const submitRsvpForm = () => {
    setRsvpCode(form.rsvpCode);
  };

  useEffect(() => {
    console.log(isLoading, isError, guest);
  }, [isLoading, guest]);

  return (
    <Layout className="rsvp" pageTitle="RSVP">
      {isLoading
        && <div>LOADING....</div>}
      <div className="content flowers-corner-bottom pb-100">
        <div className="clip-text mt-80">
          RSVP
        </div>
        {!guest || !('name' in guest) ? (
          <div>
            <p className="fts-24 rsvp-header mt-50 mb-40">Vul hier jouw persoonlijke code in:</p>
            <div className="rsvp-input-wrapper">
              <input type="text" name="rsvpCode" className="rsvp-code" onChange={handleInputChange} />
            </div>
            <button onClick={submitRsvpForm} className="btn-primary m--yellow mt-80">
              <span className="letter">E</span>
              <span className="letter">N</span>
              <span className="letter">T</span>
              <span className="letter">E</span>
              <span className="letter">R</span>
            </button>
          </div>
        ) : (
          <div>
            <h1>
              {`Welkom ${guest.name}`}
            </h1>
          </div>
        )}
      </div>
    </Layout>
  );
}
