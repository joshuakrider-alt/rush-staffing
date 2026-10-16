import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Employers from "../components/Employers";
import JobSeekers from "../components/JobSeekers";
import Industries from "../components/Industries";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Employers />
        <JobSeekers />
        <Industries />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
