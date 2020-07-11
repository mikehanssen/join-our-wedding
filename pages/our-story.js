import Link from 'next/link';
import Layout from '../components/layout';
import homeStyles from '../styles/home.module.sass';

export default function OurStory() {
  return (
    <Layout>
      <h1>Ons Verhaal</h1>
      <div>
        <h2>Once upon a time...</h2>
      </div>
      <div>
        <img alt="Flowers side" src="/flowers-side.svg" />
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
      </div>
    </Layout>
  );
}
