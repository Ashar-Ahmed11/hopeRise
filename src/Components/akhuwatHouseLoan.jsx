import React from 'react';
import CountUp from 'react-countup';
import asaanQarz13 from '../Images/image19.jpg';
import asaanQarz14 from '../Images/image18.jpg';

const akhuwatHouseLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize:'22px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Foundation Can Help You Reach Your Goal of Owning a Home</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          The Akhuwat Foundation is helping tens of thousands of Pakistanis take a big step towards having their own homes. A lot of people can't afford standard mortgages, which makes the idea of owning a home seem impossible. This gap is filled by Akhuwat, which gives interest-free home loans to people who need them the most.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Easy to Understand and Low-Cost Home Loans</h2>
          <p>
            If you want to buy a new house or fix up the one you already have, Akhuwat Foundation can help you in a clear and reasonable way. A lot of people in Pakistan have already used these loans to buy homes with no interest.
          </p>
          <ul>
            <li>
              Akhuwat's housing loans don't need collateral like land or property like most mortgages do. This makes them perfect for people who don't have a lot of assets.
            </li>
            <li>
              Payment plans are made to fit your budget and amount of income, so making monthly payments is easy and doesn't cost a lot of money. This will keep your finances stable while you work towards your living goals.
            </li>
            <li>
              Akhuwat also helps underserved areas and low-income families by making home financing easy to get. This makes people's lives better by giving them better housing, safety, and long-term health.
            </li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={asaanQarz13}
            alt="Home Loan"
            className="img-fluid wm-100 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING FAMILIES</p>
            <h2 className="display-4 text-center fw-bold">
              <CountUp end={14} duration={3} suffix="K+" />
            </h2>
          </div>
        </div>
      </div>

      {/* Who Can Apply Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Which People Can Use These Loans?</h2>
          <p>
            These home loans are for Pakistani people who need safe, reliable housing right away. This program is meant to help you whether you want to build, buy, or improve your home.
          </p>
          <ul>
            <li><strong>Ideal for Low-Income Families:</strong> Designed to meet the needs of people and families who don't have a lot of money.</li>
            <li><strong>Only Simple Paperwork:</strong> You will only need important things like your ID and proof that you live there.</li>
            <li><strong>Community-Based Verification:</strong> Strong local references and support from the community can make your application stronger.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={asaanQarz14}
            alt="Housing Help"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">HOMES BUILT</p>
            <h2 className="display-4 text-center fw-bold">
              <CountUp end={8000} duration={3} suffix="+" />
            </h2>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">How to Get a Home Loan in Akhuwat</h2>
          <ul>
            <li><strong>Check Eligibility:</strong> Make sure you are a Pakistani citizen who really needs help with living.</li>
            <li><strong>Get Your Papers Together:</strong> Get your CNIC, proof of income, and a short statement about what kind of home you need (buying, building, or remodelling).</li>
            <li><strong>Please Send in Your Application:</strong> Fill out and turn in your loan form at the Akhuwat Foundation office that is closest to you.</li>
            <li><strong>Loan Review Process:</strong> Your request will be looked at by the Akhuwat team. If accepted, you'll be told right away.</li>
            <li><strong>Payment of Money:</strong> Once the loan is accepted, the money will be sent to you according to the terms that were agreed upon, so you can start working on your home project right away.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default akhuwatHouseLoan;
