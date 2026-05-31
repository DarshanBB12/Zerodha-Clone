
import React from "react";

function Hero() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#387ed1" }}>
            <div className="container text-center text-white py-5">

                <h1
                    style={{
                        fontSize: "42px",
                        fontWeight: "600",
                        marginBottom: "20px",
                    }}
                >
                    Support Portal
                </h1>

                <p
                    style={{
                        fontSize: "20px",
                        marginBottom: "35px",
                    }}
                >
                    Search for an answer or browse help topics to create a ticket
                </p>

                {/* Search Box */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-12">

                        <input
                            type="text"
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                            className="form-control p-4"
                            style={{
                                borderRadius: "8px",
                                border: "none",
                                fontSize: "17px",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                            }}
                        />
                    </div>
                </div>

                {/* Quick Links */}
                <div className="row justify-content-center mt-4">

                    <div className="col-auto">
                        <a
                            href="#"
                            className="text-white text-decoration-none"
                            style={{ marginRight: "20px" }}
                        >
                            Track account opening
                        </a>
                    </div>

                    <div className="col-auto">
                        <a
                            href="#"
                            className="text-white text-decoration-none"
                            style={{ marginRight: "20px" }}
                        >
                            Track segment activation
                        </a>
                    </div>

                    <div className="col-auto">
                        <a
                            href="#"
                            className="text-white text-decoration-none"
                        >
                            Intraday margins
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;


