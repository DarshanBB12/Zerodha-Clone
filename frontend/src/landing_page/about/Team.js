import React from 'react';

function Team() {
    return (
        <div className="container">

            {/* Heading Section */}
            <div className="row p-5 border-top ">
                <h1 className="fs-2 text-center">
                    People
                </h1>
            </div>

            {/* Content Section */}
            <div
                className="row p-3  align-items-center"
                style={{ lineHeight: "1.8" }}
            >

                {/* Left Side */}
                <div className="col-lg-6 p-5 text-center">

                    <img
                        src="media/image/nithinKamath.jpg"
                        alt="Nithin Kamath"
                        style={{
                            borderRadius: "50%",
                            width: "60%"
                        }}
                        className="img-fluid"
                    />

                    <h4 className="mt-3 text-muted">
                        Nithin Kamath
                    </h4>

                    <h5 className="mt-2 text-muted">
                        Founder, CEO
                    </h5>

                </div>

                {/* Right Side */}
                <div className="col-lg-6 p-5">

                    <p className="fs-6 text-muted">
                        Nithin bootstrapped and founded Zerodha in 2010
                        to overcome the hurdles he faced during his
                        decade-long stint as a trader. Today, Zerodha
                        has changed the landscape of the Indian broking industry.
                    </p>

                    <p className="fs-6 text-muted">
                        He is a member of the SEBI Secondary Market
                        Advisory Committee (SMAC) and the Market Data
                        Advisory Committee (MDAC).
                    </p>

                    <p className="fs-6 text-muted">
                        Playing basketball is his zen.
                    </p>

                    <p className="fs-6 text-muted">
                        Connect on

                        <a href="/" className="mx-1 text-decoration-none">
                            TradingQnA
                        </a>

                        /

                        <a href="/" className="mx-1 text-decoration-none">
                            Telegram
                        </a>

                        /

                        <a href="/" className="mx-1 text-decoration-none">
                            Twitter
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Team;