import Image from "next/image";

export default function CTASection() {
  return (

    <section className="cta-section">

      <div className="container-fluid">

        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-7 animate-left">

            <h2 className="cta-title animate-up">
              Ready to build technology with purpose?
            </h2>

            <p className="cta-subtext animate-up">
              Let's take the first step toward a smarter,
              more human-centered digital future.
            </p>

            <div className="d-grid gap-3 animate-up">

              <a href="#" className="btn-black">
                <span className="hand-icon">👉</span>
                DOWNLOAD OUR PORTFOLIO
              </a>

              <a href="#" className="btn-black">
                <span className="hand-icon">👉</span>
                CONTACT US TODAY
              </a>

            </div>

          </div>

          {/* Right Image */}
          <div className="col-lg-5 animate-right">

            <Image
              src="/images/team.png"
              alt="Team Work"
              width={600}
              height={400}
              className="main-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}