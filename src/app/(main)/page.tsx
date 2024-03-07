import Spinner from '@components/spinner/spinner';
import Header from '@components/layout/header';
import Home from './home'
import About from './about';
import Career from './career';
import Footer from '@components/layout/Footer';
import Skills from './skill';
import Contact from './contact';
import Project from './project';
export default function Page() {

  return (
    <div >
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
    </div>
  )
}
