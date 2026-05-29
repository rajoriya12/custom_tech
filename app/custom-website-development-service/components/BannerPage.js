'use client';

import Link from "next/link";

export default function BannerPage() {

    return (
        <>
            <section
                className="hero"
                style={{
                    backgroundImage: "url('/web/main.png')"
                }}
            >

                <div className="container-fluid px-5 py-5">

                    <div
                        className="hero-box"
                        style={{
                            maxWidth: '90%'
                        }}
                    >

                        <div className="row align-items-center">

                            {/* SAME OLD HERO ANIMATION */}
                            <div className="col-lg-6 animate-left">

                                <h1 className="fs-1 floating-title">
                                    Custom Website That Build Authority
                                    and Drive Action.
                                </h1>

                                <p className="animate-up delay-1">
                                    High performance website or Strategic
                                    digital platforms engineered for clarity,
                                    usability and measurable growth.
                                </p>

                                <div className="d-flex gap-3 animate-up delay-2">

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

            </section>

            {/* KEEP BORDER SAME */}
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