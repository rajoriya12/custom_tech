'use client';

import Link from "next/link";

export default function BannerPage() {

    return (
        <>
            <section
                className="hero d-flex align-items-center"
                style={{
                    backgroundImage: "url('/web/main.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: "750px",
                    width: "100%",
                }}
            >

                <div className="container-fluid px-4 px-md-5">

                    <div
                        className="hero-box"
                        style={{
                            maxWidth: '90%'
                        }}
                    >

                        <div className="row align-items-center">

                            <div className="col-lg-6">

                                <h1
                                    className="fw-bold lh-tight mb-4"
                                    style={{
                                        fontSize: "clamp(1.5rem, 5vw, 2.5rem)"
                                    }}
                                >
                                    Custom Website That Build Authority
                                    and Drive Action.
                                </h1>

                                <p
                                    className="mb-4"
                                    style={{
                                        fontSize: "18px",
                                        maxWidth: "600px",
                                        lineHeight: "1.7"
                                    }}
                                >
                                    High performance website or Strategic
                                    digital platforms engineered for clarity,
                                    usability and measurable growth.
                                </p>

                                <div className="d-flex flex-column flex-sm-row gap-3">

                                    <button className="btn-warning-custom">
                                        View Our Portfolio
                                    </button>

                                    <button className="btn-warning-custom">
                                        Work With Us
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <style jsx>{`

                    .btn-warning-custom {
                        background: #EEF430;
                        border: none;
                        padding: 14px 28px;
                        font-weight: 700;
                        border-radius: 4px;
                        transition: 0.3s ease;
                    }

                    .btn-warning-custom:hover {
                        transform: translateY(-2px);
                    }

                    @media (max-width: 768px) {

                        .hero {
                            min-height: 600px !important;
                            background-position: center right;
                        }

                        h1 {
                            font-size: 2.4rem !important;
                        }

                        p {
                            font-size: 16px !important;
                        }

                    }

                `}</style>

            </section>

            {/* Bottom Border */}
            <div
                style={{
                    width: "100%",
                    height: "40px",
                    background: "#eff430",
                    borderBottom: "20px solid #000",
                }}
            ></div>
        </>
    );
}