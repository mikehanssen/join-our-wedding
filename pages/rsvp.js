import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/layout';

import useGuest from '../data/use-guest';
import { updateGuest } from '../libs/api-guest';

export default function RSVP() {
  const [inputRsvpCode, setInputRsvpCode] = useState('');
  const [guestRsvpCode, setGuestRsvpCode] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState(undefined);
  const {
    guest, isLoading, mutate, isError,
  } = useGuest(guestRsvpCode);
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const { plus_one: plusOne, attends } = watch();
  console.log(attends)

  const onFormSubmit = (data) => {
    if (data.rsvpCode !== undefined && data.rsvpCode !== null) {
      setGuestRsvpCode(data.rsvpCode);
    } else {
      setIsSaving(true);
      data.attends = data.attends === 'attends';
      data.does_not_attends = !data.attends;
      updateGuest(guestRsvpCode, data)
        .then((res) => res.json())
        .then((json) => {
          mutate(json);
          setIsSaving(false);
          setNotification('Bedankt! Alle info is opgeslagen!');
        })
        .catch((err) => {
          console.log(err);
          setNotification('Er is wat fout gegaan! Stuur Mike even een berichtje.');
        });
    }
  };

  return (
    <Layout className="rsvp" pageTitle="RSVP">
      <div className="content flowers-corner-bottom pb-100">
        <div className="clip-text mt-80">
          RSVP
        </div>
        {isLoading ? (
          <div className="loader">
            <p className="fts-24 rsvp-header mt-50 mb-40">Wij zijn even de gegevens aan het opzoeken in het archief!</p>
            <img src="/img/spinner-white.svg" />
          </div>
        ) : (
          <>
            {isSaving &&
              <div className="loader">
                <p className="fts-24 rsvp-header mt-50 mb-40">Wij zijn even de gegevens aan het opslaan!</p>
                <img src="/img/spinner-white.svg" />
              </div>
            }
            {!isSaving &&
              <form onSubmit={handleSubmit(onFormSubmit)}>
                {!guest || !('name' in guest) ? (
                  <>
                    <p className="fts-24 rsvp-header mt-50 mb-40">Vul hier jouw persoonlijke code in:</p>
                    <div className="rsvp-input-wrapper">
                      <input type="text" name="rsvpCode" className="rsvp-code" defaultValue={inputRsvpCode} ref={register} />
                    </div>
                    {isError
                    && <p className="error mt-20">Het lijkt erop dat wij je niet kunnen vinden! Controleer even of de code klopt of neem contact met ons op!</p>}
                    <button type="submit" className="btn-primary m--yellow mt-80">
                      <span className="letter">E</span>
                      <span className="letter">N</span>
                      <span className="letter">T</span>
                      <span className="letter">E</span>
                      <span className="letter">R</span>
                    </button>
                    <p className="fts-18 rsvp-header mt-50 mb-40">* Je persoonlijke code vind je achterop de kaart</p>
                  </>
                ) : (
                  <>
                    <p className="fts-24 rsvp-header mt-50 mb-10">
                      {`Welkom ${guest.name}`}
                    </p>
                    <p className="fts-18 rsvp-header mt-10 mb-40">
                      { guest.invited_to }
                    </p>
                    {notification && (
                      <div className="rsvp-notification">
                        {notification}
                      </div>
                    )}
                    <div className="form-container">
                      <div className="form">
                        <input type="hidden" name="fake" ref={register} />
                        <div className="input-container checkbox-container">
                          <input type="radio" id="attends" value="attends" name="attends" defaultChecked={guest.attends} ref={register} />
                          <label htmlFor="attends">Wij/Ik kom(en) naar de bruiloft!</label>
                        </div>
                        <div className="input-container checkbox-container">
                          <input type="radio" id="does_not_attends" value="does_not_attends" name="attends" defaultChecked={guest.does_not_attends} ref={register} />
                          <label htmlFor="does_not_attends">Wij/Ik kom(en) helaas niet naar de bruiloft!</label>
                        </div>
                        {((attends !== undefined && attends === 'attends') || (attends === undefined && guest.attends)) &&
                          <>
                            <div className="input-container">
                              <label htmlFor="phone_number">
                                Telefoonnummer
                              </label>
                              <input type="text" name="phone_number" id="phone_number" defaultValue={guest.phone_number} ref={register} />
                              <i>In verband met COVID-19 en de onzekerheid die het met zich meebrengt vragen wij om je telefoonnummer zodat wij contact met je op kunnen nemen!</i>
                            </div>
                            {guest.plus_one_allowed
                            && (
                            <>
                              <div className="input-container checkbox-container baseline">
                                <input type="checkbox" id="plus_one" name="plus_one" defaultChecked={guest.plus_one} ref={register} />
                                <label htmlFor="plus_one">Neem je een plus one mee?</label>
                              </div>
                              {((plusOne !== undefined && plusOne) || (plusOne === undefined && guest.plus_one))
                              && (
                                <div className="input-container">
                                  <label htmlFor="plus_one_name">Naam van je plus one?</label>
                                  <input type="phone" name="plus_one_name" id="plus_one_name" defaultValue={guest.plus_one_name} ref={register} />
                                </div>
                              )}
                            </>
                            )}
                            <div className="input-container">
                              <label htmlFor="notes">
                                Laat een boodschap/opmerking achter voor het bruidspaar.
                              </label>
                              <textarea name="notes" id="notes" defaultValue={guest.notes} ref={register} />
                            </div>

                            {guest.dinner_preferences.length > 0 &&
                              <h2>Dinner wensen</h2>
                            }
                            {guest.dinner_preferences.map(({ name, dinner, special }, index) => {
                              return (
                                <div key={`guest-${index}`} className="dinner-guest-container">
                                  <div className="input-container">
                                    <p className="guest-name">{name}</p>
                                    <div className="options-container">
                                      <input type="radio" id={`vlees-${index}`} value="vlees" defaultChecked={dinner === 'vlees'} name={`dinner-preference-${index}`} ref={register} />
                                      <label htmlFor={`vlees-${index}`}>
                                        Vlees
                                      </label>
                                      <input type="radio" id={`vis-${index}`} value="vis" defaultChecked={dinner === 'vis'} name={`dinner-preference-${index}`} ref={register} />
                                      <label htmlFor={`vis-${index}`}>
                                        Vis
                                      </label>
                                      <input type="radio" id={`vega-${index}`} value="vega" defaultChecked={dinner === 'vega'} name={`dinner-preference-${index}`} ref={register} />
                                      <label htmlFor={`vega-${index}`}>
                                        Vega
                                      </label>
                                    </div>
                                  </div>
                                  <div className="input-container">
                                    <input type="text" id="special" name={`special-${index}`} defaultValue={special} placeholder="Allergieen en Dieetwensen" ref={register} />
                                  </div>
                                </div>
                              )
                            })}
                          </>
                        }

                        <button type="submit" className="btn-primary m--yellow mt-80">
                          <span className="letter">S</span>
                          <span className="letter">A</span>
                          <span className="letter">V</span>
                          <span className="letter">E</span>
                        </button>
                      </div>
                      <div className="form-images">
                        <img src="/img/square1-min.jpg" alt="" />
                        <img src="/img/square2-min.jpg" alt="" />
                        <img src="/img/square3-min.jpg" alt="" />
                      </div>
                    </div>
                  </>
                )}
              </form>
            }
          </>
        )}
      </div>
    </Layout>
  );
}
