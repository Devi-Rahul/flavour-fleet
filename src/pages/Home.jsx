import Header from '../components/Header';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;