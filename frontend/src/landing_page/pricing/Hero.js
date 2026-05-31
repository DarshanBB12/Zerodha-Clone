import React from "react";

function Hero() {
    return (
        <div className="container">

            {/* Heading */}
            <div
                className="row text-center border-bottom pb-5 pt-5"
                style={{ marginTop: "70px" }}
            >
                <h1
                    style={{
                        fontSize: "48px",
                        fontWeight: "600",
                        color: "#424242",
                    }}
                >
                    Charges
                </h1>

                <p
                    className="text-muted"
                    style={{
                        fontSize: "20px",
                        marginTop: "10px",
                    }}
                >
                    List of all charges and taxes
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="row text-center mt-5 mb-5">

                <div className="col-lg-4 col-md-4 col-12 p-4">
                    <img
                        src="media/image/pricing0.svg"
                        alt="pricing"
                        style={{
                            width: "70%",
                            marginBottom: "25px",
                        }}
                    />

                    <h3
                        style={{
                            fontSize: "28px",
                            color: "#424242",
                            marginBottom: "15px",
                        }}
                    >
                        Free equity delivery
                    </h3>

                    <p
                        className="text-muted"
                        style={{
                            fontSize: "16px",
                            lineHeight: "1.8",
                        }}
                    >
                        All equity delivery investments (NSE, BSE)
                        are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className="col-lg-4 col-md-4 col-12 p-4">
                    <img
                        src="media/image/intradayTrades.svg"
                        alt="pricing"
                        style={{
                            width: "70%",
                            marginBottom: "25px",
                        }}
                    />

                    <h3
                        style={{
                            fontSize: "28px",
                            color: "#424242",
                            marginBottom: "15px",
                        }}
                    >
                        Intraday and F&O trades
                    </h3>

                    <p
                        className="text-muted"
                        style={{
                            fontSize: "16px",
                            lineHeight: "1.8",
                        }}
                    >
                        Flat ₹20 or 0.03% (whichever is lower)
                        per executed order on intraday trades
                        across equity, currency, and commodity trades.
                    </p>
                </div>

                <div className="col-lg-4 col-md-4 col-12 p-4">
                    <img
                        src="media/image/pricing0.svg"
                        alt="pricing"
                        style={{
                            width: "70%",
                            marginBottom: "25px",
                        }}
                    />

                    <h3
                        style={{
                            fontSize: "28px",
                            color: "#424242",
                            marginBottom: "15px",
                        }}
                    >
                        Free direct MF
                    </h3>

                    <p
                        className="text-muted"
                        style={{
                            fontSize: "16px",
                            lineHeight: "1.8",
                        }}
                    >
                        All direct mutual fund investments are
                        absolutely free — ₹0 commissions &
                        DP charges.
                    </p>
                </div>
            </div>

            {/* Brokerage Table */}
            <div className="row mt-5">
                <div className="col-12">

                    <h2
                        style={{
                            color: "#424242",
                            marginBottom: "30px",
                            fontWeight: "600",
                        }}
                    >
                        Brokerage charges
                    </h2>

                    <div className="table-responsive">

                        <table className="table table-bordered align-middle text-center">

                            <thead style={{ backgroundColor: "#f8f8f8" }}>
                                <tr>
                                    <th>Segment</th>
                                    <th>Brokerage</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>Equity Delivery</td>
                                    <td>Zero Brokerage</td>
                                </tr>

                                <tr>
                                    <td>Equity Intraday</td>
                                    <td>0.03% or ₹20/executed order whichever is lower</td>
                                </tr>

                                <tr>
                                    <td>Equity Futures</td>
                                    <td>0.03% or ₹20/executed order whichever is lower</td>
                                </tr>

                                <tr>
                                    <td>Equity Options</td>
                                    <td>Flat ₹20 per executed order</td>
                                </tr>

                                <tr>
                                    <td>Currency Futures</td>
                                    <td>0.03% or ₹20/executed order whichever is lower</td>
                                </tr>

                                <tr>
                                    <td>Currency Options</td>
                                    <td>Flat ₹20 per executed order</td>
                                </tr>

                                <tr>
                                    <td>Commodity Futures</td>
                                    <td>0.03% or ₹20/executed order whichever is lower</td>
                                </tr>

                                <tr>
                                    <td>Commodity Options</td>
                                    <td>Flat ₹20 per executed order</td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

            {/* Charges Explanation */}
            <div className="row mt-5 mb-5">

                <div className="col-lg-6 col-12 p-4">

                    <h3
                        style={{
                            color: "#424242",
                            marginBottom: "20px",
                            fontWeight: "600",
                        }}
                    >
                        Charges explained
                    </h3>

                    <p
                        className="text-muted"
                        style={{
                            lineHeight: "1.9",
                            fontSize: "16px",
                        }}
                    >
                        <strong>Account opening:</strong> ₹0
                    </p>

                    <p
                        className="text-muted"
                        style={{
                            lineHeight: "1.9",
                            fontSize: "16px",
                        }}
                    >
                        <strong>Equity delivery:</strong> ₹0 brokerage on all delivery trades.
                    </p>

                    <p
                        className="text-muted"
                        style={{
                            lineHeight: "1.9",
                            fontSize: "16px",
                        }}
                    >
                        <strong>Intraday trading:</strong> Flat ₹20 or 0.03% per executed order.
                    </p>

                    <p
                        className="text-muted"
                        style={{
                            lineHeight: "1.9",
                            fontSize: "16px",
                        }}
                    >
                        <strong>F&O trading:</strong> Flat ₹20 per executed order for options.
                    </p>

                </div>

                <div className="col-lg-6 col-12 p-4">

                    <h3
                        style={{
                            color: "#424242",
                            marginBottom: "20px",
                            fontWeight: "600",
                        }}
                    >
                        Additional charges
                    </h3>

                    <p
                        className="text-muted"
                        style={{
                            lineHeight: "1.9",
                            fontSize: "16px",
                        }}
                    >
                        <strong>Call & trade:</strong> ₹50 per executed order.
                    </p>

                    <p
                        className="text-muted"
                        style={{
                            lineHeight: "1.9",
                            fontSize: "16px",
                        }}
                    >
                        <strong>DP charges:</strong> ₹13.5 + GST per scrip on sell transactions.
                    </p>

                    <p
                        className="text-muted"
                        style={{
                            lineHeight: "1.9",
                            fontSize: "16px",
                        }}
                    >
                        <strong>GST:</strong> 18% on brokerage and transaction charges.
                    </p>

                    <p
                        className="text-muted"
                        style={{
                            lineHeight: "1.9",
                            fontSize: "16px",
                        }}
                    >
                        <strong>STT/CTT:</strong> Charged by the government on buy/sell transactions.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Hero;