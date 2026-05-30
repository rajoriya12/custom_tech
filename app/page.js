import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryStrip from "../components/CategoryStrip";
import BlueprintSection from "../components/BlueprintSection";
import ProcessSection from "../components/ProcessSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container-fluid p-0 container-outer overflow-hidden">

      <div className="container-fluid bg-white p-0">

        <Header />

        <main className="snap-container">

          <section className="p-0 snap-section">
            <Hero />
          </section>

          <section className="snap-section">
            <CategoryStrip />
          </section>

          <section className="snap-section">
            <BlueprintSection />
          </section>

          <section className="snap-section">
            <ProcessSection />
          </section>

          <section className="snap-section">
            <Services />
          </section>

          <section className="snap-section">
            <Testimonials />
          </section>

          <section className="snap-section">
            <CTASection />
          </section>

        </main>

        <Footer />

      </div>
    </div>
  );
}