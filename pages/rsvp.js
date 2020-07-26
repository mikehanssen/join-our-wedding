import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/layout';

import useGuest from '../data/use-guest';
import { updateGuest } from '../libs/api-guest';

export default function RSVP() {
  const [inputRsvpCode, setInputRsvpCode] = useState('');
  const [guestRsvpCode, setGuestRsvpCode] = useState('');
  const {
    guest, isLoading, isError,
  } = useGuest(guestRsvpCode);

  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const onSubmit = (data) => {
    updateGuest(guestRsvpCode, data)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        return {};
      });
  };

  const submitRsvpForm = () => {
    setGuestRsvpCode(inputRsvpCode);
  };

  useEffect(() => {
    if (guest) {
      console.log(guest.attends);
    }
  }, [guest]);

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
              <input type="text" name="rsvpCode" className="rsvp-code" value={inputRsvpCode} onChange={(e) => setInputRsvpCode(e.target.value)} />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="fts-24 rsvp-header mt-50 mb-40">
              {`Welkom ${guest.name}`}
            </p>
            <div className="inputContainer">
              <input type="checkbox" id="attends" name="attends" defaultChecked={guest.attends} ref={register} />
              <label htmlFor="attends">Kom je naar de bruiloft?</label>
            </div>
            <div className="inputContainer">
              <label htmlFor="phone_number">
                Omdat wij vanwege COVID-19 nog niet zeker weten of alles door kan vragen wij om
                je telefoonnummer zodat wij altijd contact met je weten op te nemen!
              </label>
              <input type="phone" name="phone_number" id="phone_number" defaultValue={guest.phone_number} ref={register} />
            </div>
            {guest.plus_one_allowed
              && (
              <>
                <div className="inputContainer">
                  <input type="checkbox" id="plus_one" name="plus_one" defaultChecked={guest.plus_one} ref={register} />
                  <label htmlFor="plus_one">Neem je een plus one mee?</label>
                </div>
                <div className="inputContainer">
                  <label htmlFor="plus_one_name">Naam van je plus one?</label>
                  <input type="phone" name="plus_one_name" id="plus_one_name" defaultValue={guest.plus_one_name} ref={register} />
                </div>
              </>
              )}
            <button className="btn-primary m--yellow mt-80">
              <span className="letter">S</span>
              <span className="letter">A</span>
              <span className="letter">V</span>
              <span className="letter">E</span>
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}
