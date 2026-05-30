'use client';

import Image from "next/image";

const sectors = [
    { name: "Healthcare", img: "/web/d1.png" },
    { name: "Retail", img: "/web/d2.png" },
    { name: "Education", img: "/web/d3.png" },
    { name: "Construction", img: "/web/d4.png" },
    { name: "Manufacturing", img: "/web/d5.png" },
];

export default function SectorsWeBuild() {

    return (
        <>
            <section className="container-fluid py-5 d-flex flex-column align-items-center gap-4">

                {/* Subheading */}
                <div className="text-center px-3">

                    <h3
                        className="fw-normal mb-0"
                        style={{
                            fontSize: '22px',
                            fontStyle: "italic"
                        }}
                    >

                        <span className="fw-bold">
                            Different industries. Same friction. Same fix.
                        </span>

                        <br className="d-none d-md-block" />

                        We connect what should never have been separate
                        in the first place.

                    </h3>

                </div>

                {/* Cards */}
                <div
                    className="container"
                    style={{
                        maxWidth: '900px'
                    }}
                >

                    <div className="row row-cols-1 row-cols-md-3 g-5 justify-content-center">

                        {sectors.map((sector, index) => (

                            <div
                                key={index}
                                className="col d-flex justify-content-center"
                            >

                                <div
                                    className="d-flex flex-column justify-content-center align-items-center p-3 shadow-sm"
                                    style={{
                                        backgroundColor: '#f5f5f5',
                                        width: '500px',
                                        minHeight: '210px',
                                        border: "3px solid yellow"
                                    }}
                                >

                                    <div
                                        className="mb-2"
                                        style={{
                                            width: '100%',
                                            height: '60px',
                                            position: 'relative'
                                        }}
                                    >

                                        <Image
                                            src={sector.img}
                                            fill
                                            style={{
                                                objectFit: 'contain'
                                            }}
                                            alt={sector.name}
                                        />

                                    </div>

                                    <h4
                                        className="fw-semibold m-0"
                                        style={{
                                            fontSize: '15px'
                                        }}
                                    >
                                        {sector.name}
                                    </h4>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Bottom Text */}
                <div className="col-12 col-md-8 col-lg-6 text-center mt-0 px-3">

                    <p
                        className="fw-normal mb-0"
                        style={{
                            fontSize: '18px',
                            fontStyle: "italic",
                            marginTop: "-6%"
                        }}
                    >

                        The industries may differ, but the goal stays the same:

                        <br className="d-none d-md-block" />

                        Replace fragmented technology with connected digital ecosystems.

                    </p>

                </div>

            </section>

            {/* Bottom Border */}
            <div
                style={{
                    width: '100%',
                    borderTop: '20px solid #eff430',
                    borderBottom: '20px solid #000'
                }}
            ></div>
        </>
    );
}