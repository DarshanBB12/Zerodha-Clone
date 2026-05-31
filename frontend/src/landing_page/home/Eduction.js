import React from 'react';

function Education() {
    return (  
            <div className='container mt-5'>
            <div className='row'>
                  <div className='col-6 '>
                       <img src='media\image\education.svg'/>
                   </div>
                <div className='col-6 mt-5'>
                    <h2 className='mb-3'>Free and open market eduction</h2>
                    <p className=''>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <div>
                    <a href=''  style={{textDecoration:"none", marginRight:"20px"}}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <div>
                    <a href=''  style={{textDecoration:"none", marginRight:"20px"}}>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;