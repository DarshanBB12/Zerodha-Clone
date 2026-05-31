import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function Universe() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row text-center">

              <h3 
                style={{
                    fontSize: "2.2rem",
                    fontWeight: "600",
                    marginBottom: "15px",
                    marginTop: "25px"
                }}
              >
                The Zerodha Universe
              </h3>

              <p 
                className="fs-5 text-muted"
                style={{
                    lineHeight: "1.8",
                    marginBottom: "60px"
                }}
              >
                Extend your trading and investment experience even further with our partner platforms
              </p>

              <div className="col-4 p-4 mt-3">
                <img 
                    src="media/image/smallcaseLogo.png"
                    style={{
                        width: "60%",
                        marginBottom: "25px"
                    }}
                />

                <p  
                    className="text-muted"
                    style={{
                        fontSize: "15px",
                        lineHeight: "1.8"
                    }}
                >
                    Our asset management <br/>
                    venture that is creating simple and transparent index<br/>
                    funds to help you save for your goals.<br/>
                </p>
              </div>

              <div className="col-4 p-4 mt-3">
                <img 
                    src="media/image/streakLogo.png"
                    style={{
                        width: "60%",
                        marginBottom: "25px"
                    }}
                />

                <p 
                    className="text-muted"
                    style={{
                        fontSize: "15px",
                        lineHeight: "1.8"
                    }}
                >
                    Options trading platform that lets you<br/>
                    create strategies, analyze positions, and examine<br/>
                    data points like open interest, FII/DII, and more.
                </p>
              </div>

              <div className="col-4 p-4 mt-3"> 
                <img 
                    src="media/image/sensibullLogo.svg"
                    style={{
                        width: "60%",
                        marginBottom: "25px"
                    }}
                />

                <p 
                    className="text-muted"
                    style={{
                        fontSize: "15px",
                        lineHeight: "1.8"
                    }}
                >
                    Systematic trading platform<br/>
                    that allows you to create and backtest<br/>
                    strategies without coding.
                </p>
              </div>

              <div className="col-4 p-4 mt-4"> 
                <img 
                    src="media/image/zerodhaFundhouse.png"
                    style={{
                        width: "60%",
                        marginBottom: "25px"
                    }}
                />

                <p 
                    className="text-muted"
                    style={{
                        fontSize: "15px",
                        lineHeight: "1.8"
                    }}
                >
                    Thematic investing platform<br/>
                    that helps you invest in diversified<br/>
                    baskets of stocks on ETFs.
                </p>
              </div>

              <div className="col-4 p-4 mt-4"> 
                <img 
                    src="media/image/goldenpiLogo.png"
                    style={{
                        width: "60%",
                        marginBottom: "25px"
                    }}
                />

                <p 
                    className="text-muted"
                    style={{
                        fontSize: "15px",
                        lineHeight: "1.8"
                    }}
                >
                    Personalized advice on life<br/>
                    and health insurance. No spam<br/>
                    and no mis-selling.<br/>
                    Sign up for free
                </p>
              </div>

              <div className="col-4 p-4 mt-4"> 
                <img 
                    src="media/image/dittoLogo.png"
                    style={{
                        width: "60%",
                        marginBottom: "25px"
                    }}
                />

                <p 
                    className="text-muted"
                    style={{
                        fontSize: "15px",
                        lineHeight: "1.8"
                    }}
                >
                    Personalized advice on life<br/>
                    and health insurance. No spam<br/>
                    and no mis-selling.<br/>
                    Sign up for free
                </p>
              </div>
               <button className="p-2 btn btn-primary fs-5 mb-5"  style={{width:"25%",margin:"0 auto"}}>Signup Now</button>

            </div>
        </div>
     );
}

export default Universe;