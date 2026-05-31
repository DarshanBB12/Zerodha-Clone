import React from 'react';

function Awards() {
    return (  
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <img src='media/image/largestBroker.svg'/>
            </div>
              <div className='col-6'>
                <h1>Largest stock broker in India</h1>
                <p className='mb-5'> 2+ million Zerodha clients contribute to over  volume in india daily by trading and inversting in: </p>
              <div   className='row'>
                 <div className='col-6'>
                <ul >
                    <li>
                        <p>Futures and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivatives</p>
                    </li>
                    <li>
                        <p>Currency derivatives</p>
                    </li>
                </ul>
                </div>
        
                <div className='col-6'>
                <ul>
                    <li>
                        <p>Stocks & IPOs</p>
                    </li>
                    <li>
                        <p>Direct mutual funds</p>
                    </li>
                    <li>
                        <p>Bonds and Gouvremnt</p>
                    </li>
                </ul>
                </div>
            </div>
            <img src='media\image\pressLogos.png' style={{width:"90%" }} />
            </div>
        </div>
      </div>
    );
}

export default Awards;