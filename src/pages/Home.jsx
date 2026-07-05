import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Program from "../components/Program";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <Hero />

      {/* Why Choose */}
      <WhyChoose />

      {/* Programs */}
      <Program />

      {/* Portfolio */}
      <Portfolio />

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Home;
