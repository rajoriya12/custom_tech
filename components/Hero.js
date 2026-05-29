export default function Hero() {
  return (
    <section className="hero">
      <div className="container-fluid px-5 py-5">

        <div className="hero-box">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <h1
                data-aos="fade-up"
                className="floating-title"
              >
                Technology Built for the <br />
                Way People Actually Work
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="100"
              >
                We bridge the gap between complex engineering and human
                intuition to build tech that users actually enjoy using.
              </p>

              <button
                className="custom-btn me-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                View Our Portfolio
              </button>

              <button
                className="custom-btn"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Work With Us
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}