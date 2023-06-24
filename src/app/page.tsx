import Spinner from '@components/spinner/spinner';
import Header from '@components/layout/header';
import Home from './main/home'
import About from './main/about';
import Career from './main/career';
import Footer from '@components/layout/Footer';
import Skills from './main/skill';
import Contact from './main/contact';
import Project from './main/project';
export default function Page() {

  return (
    <>
      <Spinner />
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Career />
        <Project />
        <Contact />
      </main>
      <Footer />
      <a href="#" className="toTop">
        <i className="bx bxs-up-arrow" />
      </a>
    </>
  )
}
