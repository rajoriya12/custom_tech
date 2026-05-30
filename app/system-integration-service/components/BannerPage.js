'use client';

import Image from "next/image";
import Link from "next/link";

export default function BannerPage() {

    return (
        <>
            <section
                className="container-fluid position-relative overflow-hidden p-0"
                style={{
                    backgroundImage: "url('/system/hero.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    minHeight: '700px',
                }}
            >

                {/* Mobile Image */}
                <div
                    className="d-md-none position-relative w-100"
                    style={{
                        height: '260px'
                    }}
                >

                    <Image
                        src="/system/hero1.png"
                        alt="Hero Banner"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />

                </div>

                {/* Content */}
                <div className="container px-4 px-md-5">

                    <div
                        className="row align-items-center"
                        style={{
                            minHeight: '700px'
                        }}
                    >

                        <div className="col-12 col-md-7 col-lg-6 text-center text-md-start">

                            {/* Heading */}
                            <h1 className="display-5 fw-bold mb-4 lh-tight">

                                Systems That Work Together — So Your

                                <br className="d-none d-md-block" />

                                Business Can Move Faster

                            </h1>

                            {/* Paragraph */}
                            <p className="fs-5 fw-semibold mb-3 lh-base">

                                At Custom Labs, we provide system integration
                                services that connect your tools, remove manual
                                work, and create a single system your team can
                                rely on.

                            </p>

                            <p className="fs-6 mb-5">

                                Because disconnected systems don’t just slow
                                you down, they create problems you shouldn’t
                                have to manage.

                            </p>

                            {/* Buttons */}
                            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">

                                <Link
                                    href="/"
                                    className="btn fw-bold border-0 shadow-sm d-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundColor: '#EEF430',
                                        borderRadius: '4px',
                                        fontSize: '14px',
                                        height: '52px',
                                        width: '240px'
                                    }}
                                >
                                    View our Portfolio
                                </Link>

                                <Link
                                    href="/solutionservice"
                                    className="btn fw-bold border-0 shadow-sm d-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundColor: '#EEF430',
                                        borderRadius: '4px',
                                        fontSize: '14px',
                                        height: '52px',
                                        width: '240px'
                                    }}
                                >
                                    Work With Us
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

                <style jsx>{`

                    @media (max-width: 768px) {

                        section {
                            min-height: auto !important;
                            background-image: none !important;
                            background-color: #f5f5f5;
                        }

                        .row {
                            min-height: auto !important;
                            padding-top: 40px;
                            padding-bottom: 40px;
                        }

                        h1 {
                            font-size: 2rem !important;
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