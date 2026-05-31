
import React from "react";

function CreateTicket() {
    return (
        <div className="container py-5">

            {/* Heading */}
            <div className="text-center mb-5">
                <h2
                    style={{
                        fontSize: "36px",
                        fontWeight: "600",
                        color: "#424242",
                    }}
                >
                    To create a ticket, select a relevant topic
                </h2>
            </div>

            <div className="row gy-5">

                {/* Account Opening */}
                <div className="col-lg-4 col-md-6 col-12">

                    <h4
                        style={{
                            color: "#387ed1",
                            marginBottom: "20px",
                            fontWeight: "600",
                        }}
                    >
                        Account Opening
                    </h4>

                    <ul
                        className="list-unstyled"
                        style={{ lineHeight: "2.2" }}
                    >
                        <li><a href="#" className="text-decoration-none text-muted">Resident individual</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Minor account</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">NRI account</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Company, Partnership and HUF</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Glossary</a></li>
                    </ul>
                </div>

                {/* Your Zerodha Account */}
                <div className="col-lg-4 col-md-6 col-12">

                    <h4
                        style={{
                            color: "#387ed1",
                            marginBottom: "20px",
                            fontWeight: "600",
                        }}
                    >
                        Your Zerodha Account
                    </h4>

                    <ul
                        className="list-unstyled"
                        style={{ lineHeight: "2.2" }}
                    >
                        <li><a href="#" className="text-decoration-none text-muted">Your Profile</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Account modification</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Client Master Report</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Nomination</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Transfer and conversion of securities</a></li>
                    </ul>
                </div>

                {/* Kite */}
                <div className="col-lg-4 col-md-6 col-12">

                    <h4
                        style={{
                            color: "#387ed1",
                            marginBottom: "20px",
                            fontWeight: "600",
                        }}
                    >
                        Kite
                    </h4>

                    <ul
                        className="list-unstyled"
                        style={{ lineHeight: "2.2" }}
                    >
                        <li><a href="#" className="text-decoration-none text-muted">IPO</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Trading FAQs</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Margin Trading Facility</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Charts and orders</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Alerts and Nudges</a></li>
                    </ul>
                </div>

                {/* Funds */}
                <div className="col-lg-4 col-md-6 col-12">

                    <h4
                        style={{
                            color: "#387ed1",
                            marginBottom: "20px",
                            fontWeight: "600",
                        }}
                    >
                        Funds
                    </h4>

                    <ul
                        className="list-unstyled"
                        style={{ lineHeight: "2.2" }}
                    >
                        <li><a href="#" className="text-decoration-none text-muted">Add money</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Withdraw money</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Add bank accounts</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">eMandates</a></li>
                    </ul>
                </div>

                {/* Console */}
                <div className="col-lg-4 col-md-6 col-12">

                    <h4
                        style={{
                            color: "#387ed1",
                            marginBottom: "20px",
                            fontWeight: "600",
                        }}
                    >
                        Console
                    </h4>

                    <ul
                        className="list-unstyled"
                        style={{ lineHeight: "2.2" }}
                    >
                        <li><a href="#" className="text-decoration-none text-muted">Portfolio</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Corporate actions</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Funds statement</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Reports</a></li>
                    </ul>
                </div>

                {/* Coin */}
                <div className="col-lg-4 col-md-6 col-12">

                    <h4
                        style={{
                            color: "#387ed1",
                            marginBottom: "20px",
                            fontWeight: "600",
                        }}
                    >
                        Coin
                    </h4>

                    <ul
                        className="list-unstyled"
                        style={{ lineHeight: "2.2" }}
                    >
                        <li><a href="#" className="text-decoration-none text-muted">Mutual funds</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">National Pension Scheme (NPS)</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Fixed Deposit (FD)</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;

