import Layout from '../components/layout';

export default function Team() {
  return (
    <Layout pageTitle="Het Team">
      <h1 className="title mt-60">
        Agenda
      </h1>
      <div className="subtitle-fl-right">
        <div className="filler" />
        <h2 className="subtitle team-subtitle mb-30">
          When, What, Where?
        </h2>
      </div>
      <div className="content agenda-content content-center mb-100">
        <h2 className="subtitle mb-30">
          De ceremonie
        </h2>
        <p className="text-center">
          Aanvang 14:00, start ceremonie om 14:30. <br/>
          De ceremonie duurt ongeveer 1 uur vervolgens zullen wij de taart aansnijden en proosten op de newlyweds.
        </p>
        <h2 className="subtitle mb-30">
          De receptie
        </h2>
        <p className="text-center">
          Aanvang 16:00 <br/>
          Na de ceremonie en de taart is er tijd om Mike & Kayleigh te feliciteren.
        </p>
        <h2 className="subtitle mb-30">
          Het diner
        </h2>
        <p className="text-center">
          Start om 18:00 en eindigt om 20:00.
        </p>
        <h2 className="subtitle mb-30">
          Het feest
        </h2>
        <p className="text-center">
          Aanvang 20:15, start feest om 20:30.<br/>
          Het feest eindigt stipt om 00:00, op dat moment dient iedereen de locatie te verlaten.
        </p>
      </div>
      <div className="boquete-flowers-bottom"></div>
    </Layout>
  );
}
