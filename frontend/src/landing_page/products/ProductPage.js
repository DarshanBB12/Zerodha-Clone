import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';


function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection imageURL="/media/image/kite.png" productName="Kite" roductDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices. "  tryDemo=" " learnMore=" " googlePlay=" " appStore=" " />
        <RightSection 
        imageURL="media/image/console.png" productName="Console" roductDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."  tryDemo=" " learnMore=" "
        />
         <LeftSection imageURL="media/image/coin.png" productName="Coin" roductDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. "  tryDemo=" " learnMore=" " googlePlay=" " appStore=" " />
        <RightSection 
        imageURL="media/image/kiteconnect.png" productName="Kite Connect API" roductDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."  tryDemo=" " learnMore=" "
        />
          <LeftSection imageURL="media\image\varsity.png" productName="Varsity mobile" roductDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. "  tryDemo=" " learnMore=" " googlePlay=" " appStore=" " />
          <h4 className="align-items-center text-center text-muted">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>
        <Universe/>
        </>
     );
}

export default ProductPage;
