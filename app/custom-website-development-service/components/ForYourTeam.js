'use client';

import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const points = [
    "No bottlenecks.",
    "No fragmented systems.",
    "No fragile builds that break under growth.",
];

export default function ForYourTeam() {

    return (
        <>
            <section className="container-fluid mb-5 py-5">

                <div
                    className="container-fluid py-lg-5"
                    style={{ width: '90%' }}
                >

                    {/* Top Heading */}
                    <div className="text-center">

                        <h1
                            style={{
                                backgroundColor: "yellow",
                                textAlign: "center",
                                paddingTop: "2%",
                                paddingBottom: "2%",
                                marginLeft: "15%",
                                marginRight: "15%",
                                fontSize: "200%"
                            }}
                        >
                            Two Sides of the Same System
                        </h1>

                    </div>

                    {/* Section Title */}
                    <div className="text-center mb-5 mt-4">

                        <h2
                            className="fw-bold"
                            style={{
                                color: '#014421',
                                fontSize: '25px'
                            }}
                        >
                            For Your Team
                        </h2>

                    </div>

                    {/* Main Heading */}
                    <h1
                        className="fw-semibold fst-italic lh-tight text-dark"
                        style={{
                            fontSize: '25px',
                            maxWidth: '900px',
                            textAlign: "left",
                            marginBottom: "-3%",
                        }}
                    >
                        Your website shouldn’t create operational dependency
                    </h1>

                    {/* Main Content */}
                    <div className="row g-4 g-lg-5 align-items-start mt-4">

                        {/* Image */}
                        <div className="col-12 col-lg-7">

                            <div className="rounded-3 overflow-hidden shadow-sm">

                                <Image
                                    src="/web/same.jpg"
                                    width={700}
                                    height={700}
                                    alt="Team Image"
                                    className="img-fluid w-100 object-fit-cover"
                                    style={{
                                        height: "600px",
                                        width: "800px"
                                    }}
                                />

                            </div>

                        </div>

                        {/* Right Content */}
                        <div className="col-12 col-lg-5">

                            <p
                                className="fs-4 lh-base mb-4"
                                style={{
                                    color: '#1f1f1f',
                                    fontSize: '15px'
                                }}
                            >
                                If every update requires developer support,
                                momentum slows. If systems don’t connect,
                                your team compensates manually.
                            </p>

                            <h3
                                className="fw-bold lh-snug mb-4"
                                style={{
                                    fontSize: '20px'
                                }}
                            >
                                Well-structured custom website development restores control.
                            </h3>

                            <p
                                className="fst-italic lh-lg mb-4"
                                style={{
                                    color: '#8d8d8d',
                                    fontSize: '20px'
                                }}
                            >
                                We build custom websites that integrate your tools,
                                simplify workflows and give your team structured control.
                            </p>

                            {/* Points */}
                            <div className="d-flex flex-column gap-3 mb-5">

                                {points.map((item, idx) => (

                                    <div
                                        key={idx}
                                        className="d-flex align-items-center gap-3"
                                    >

                                        <RxCross2
                                            className="text-danger flex-shrink-0"
                                            size={28}
                                            style={{
                                                strokeWidth: '1.5',
                                                fontSize: '15px'
                                            }}
                                        />

                                        <h4
                                            className="mb-0 fw-semibold"
                                            style={{
                                                color: '#7a7a7a',
                                                fontSize: '15px'
                                            }}
                                        >
                                            {item}
                                        </h4>

                                    </div>

                                ))}

                            </div>

                            {/* Result Box */}
                            <div className="bg-black p-4 rounded-4 shadow">

                                <h3
                                    className="fw-bold mb-2"
                                    style={{
                                        color: '#EEF430',
                                        fontSize: '15px'
                                    }}
                                >
                                    The result is simple:
                                </h3>

                                <p className="text-white mb-0 fs-5 text-nowrap">

                                    You’ll gain clarity, efficiency and full autonomy.

                                </p>

                            </div>

                            {/* Buttons */}
                            <div
                                className="d-flex gap-3"
                                style={{
                                    marginTop: "20px"
                                }}
                            >

                                <button
                                    className="btn text-dark"
                                    style={{
                                        backgroundColor: "yellow"
                                    }}
                                >
                                    View Our Portfolio →
                                </button>

                                <button
                                    className="btn text-dark"
                                    style={{
                                        backgroundColor: "yellow"
                                    }}
                                >
                                    Work With Us →
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}