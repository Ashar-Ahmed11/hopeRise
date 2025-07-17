import React from 'react';
import asaanQarz3 from '../../Images/image10.jpg'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Credit Plan for the Akhuwat Foundation</h1>
            
            <p className="mb-4 fw-bold mt-1">
            Akhuwat Foundation gives all loan borrowers an easy way to pay back their loans. Getting financial help is easy; there isn't much paperwork to fill out and it's simple to pay back the loan. People all over Pakistan believe the foundation because it gives loans with no or very low interest rates.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              The staff at Akhuwat Foundation's main office is always ready to help you if you need advice or support. Their dedicated and helpful staff will make sure that your loan experience goes smoothly and without any worry.
              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src={asaanQarz3 }
              alt="Akhuwat Foundation Loan Scheme Details in Urdu" 
              className="card-img-top "
              // style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;