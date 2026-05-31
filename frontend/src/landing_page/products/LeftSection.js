import React from 'react';

function LeftSection(props) {

    const {
        imageURL,
        productName,
        productDesription,
        roductDesription,
        tryDemo,
        learnMore,
        googlePlay,
        appStore
    } = props || {};

    const description =
        productDesription || roductDesription || '';

    return (

        <div className="container py-5">

            <div className="row align-items-center">

                {/* Image Section */}
                <div className="col-lg-6 col-md-12 text-center mb-4">

                    <img
                        src={imageURL}
                        alt={productName || 'product image'}
                        className="img-fluid"
                        style={{
                            maxWidth: "90%",
                            transition: "0.3s ease"
                        }}
                    />

                </div>

                {/* Content Section */}
                <div className="col-lg-6 col-md-12">

                    <h2
                        className="fw-bold mb-4"
                        style={{
                            fontSize: "2.5rem",
                            color: "#424242"
                        }}
                    >
                        {productName}
                    </h2>

                    <p
                        className="text-muted"
                        style={{
                            lineHeight: "1.9",
                            fontSize: "1.05rem"
                        }}
                    >
                        {description}
                    </p>

                    {/* Links */}
                    <div className="mt-4 mb-4">

                        <a
                            href={tryDemo}
                            className="text-decoration-none fw-semibold"
                            style={{
                                color: "#387ed1"
                            }}
                        >
                            Try Demo →
                        </a>

                        <a
                            href={learnMore}
                            className="text-decoration-none fw-semibold ms-4"
                            style={{
                                color: "#387ed1"
                            }}
                        >
                            Learn More →
                        </a>

                    </div>

                    {/* Store Buttons */}
                    <div className="d-flex flex-wrap gap-3">

                        <a href={googlePlay}>
                            <img
                                src="media/image/googlePlayBadge.svg"
                                alt="Google Play"
                                style={{
                                    width: "160px"
                                }}
                            />
                        </a>

                        <a href={appStore}>
                            <img
                                src="media/image/appstoreBadge.svg"
                                alt="App Store"
                                style={{
                                    width: "160px"
                                }}
                            />
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default LeftSection;