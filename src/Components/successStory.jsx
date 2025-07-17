import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import asaanQarz6 from '../Images/image11.jpg';
import asaanQarz7 from '../Images/image12.jpg';
import asaanQarz8 from '../Images/image13.jpg';

const SuccessStory = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: '22px' }}>
      <div className="row g-0">
        <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">How Akhuwat Foundation Loans Changed Lives is a Success Story</h1>

              <p className="mb-4">
                In the fast-paced world we live in now, being financially stable is important for reaching your goals and dreams. In addition to loans, the Akhuwat Foundation gives people the tools they need to improve their quality of life.
              </p>

              <p className="mb-4">
                This touching story shows how Akhuwat Foundation Loans have made a difference in people's lives all over Pakistan. Students, business owners, and families can all make their dreams come true with Akhuwat's easy, reasonable, and clear loan options.
              </p>

              <div className="my-5 text-center">
                <img
                  src={asaanQarz6}
                  alt="Akhuwat Foundation Loan Logo"
                  className="img-fluid rounded shadow-sm"
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">1. Getting started on the road to financial freedom</h2>

              <p className="mb-4">
                When it started in 2024, the Akhuwat Foundation Loan Program was meant to help regular Pakistanis who were having trouble with money. Its founder, Dr. Amjad Shah, saw problems with traditional banking systems like how they had high interest rates, complicated rules, and long wait times that kept many people from applying.
              </p>

              <p className="mb-4">
                To solve these problems, he created an open and inclusive loan system that emphasised simplicity, fairness, and ease of access. With simple steps, little or no interest, and quick choices, Akhuwat gained trust quickly and helped thousands take control of their money and make their lives better.
              </p>

              <h2 className="fw-bold mt-5 mb-4">2. Haseeb's dream of going to school comes true.</h2>

              <p className="mb-4">
                An intelligent kid from Lahore named Haseeb Ahmed wanted to become an engineer. He did very well in school, but he didn't have the money to keep studying until he found Akhuwat Foundation.
              </p>

              <p className="mb-4">
                Within 24 hours, Haseeb got financial help thanks to an easy application process, a low-cost student loan, and clear terms for paying it back. Because of this help, he was able to start school right away.
              </p>

              <p className="mb-4">
                After graduating from one of Pakistan's best engineering schools, Haseeb is now a well-known and respected construction engineer. This man's story shows how Akhuwat can help turn money problems into chances to change your life.
              </p>

              <div className="my-5 text-center">
                <img
                  src={asaanQarz7}
                  alt="Akhuwat Foundation Core Values"
                  className="img-fluid rounded shadow-sm"
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">3. The Story of Sarah's Small Business Success</h2>

              <p className="mb-4">
                When Sarah, the owner of a shop, learnt about Akhuwat Foundation Loans, it changed everything. She felt hopeful after visiting a nearby centre and seeing how easy it was to qualify and learn about the business loan choices.
              </p>

              <p className="mb-4">
                She got the loan quickly and with little paperwork. There were also no complicated security requirements.
              </p>

              <p className="mb-4">
                The money helped her fix up her store and buy more things to sell. Akhuwat's quick and helpful help turned Sarah's struggling business around, doubling her income and bringing more people to her area.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Emergency Help: Ali's Medical Crisis</h2>

              <p className="mb-4">
                Life is unexpected, and for many people, Akhuwat Foundation Loans are a lifeline in times of trouble.
              </p>

              <p className="mb-4">
                Others have stories like Ali's. He asked Akhuwat for help because he had no savings and had to pay for hospital bills right away. His request for an emergency loan was quickly accepted, and the money was sent right away.
              </p>

              <p className="mb-4">
                Ali was able to pay for his medical bills without going into more debt because the organisation had flexible terms. The help he got from Akhuwat at the right time helped him get better physically and financially.
              </p>

              <h2 className="fw-bold mt-5 mb-4">5. Farhan's Path to Owning a Home</h2>

              <p className="mb-4">
                Many Pakistanis have dreamed of owning a home their whole lives, but rising housing costs make it seem impossible. That dream can come true with Akhuwat's home loan program, which makes financing easy and cheap.
              </p>

              <p className="mb-4">
                A middle-class worker from Rawalpindi named Farhan Sheikh had been saving for years but still couldn't make the down payment. Which is when he looked at Akhuwat.
              </p>

              <p className="mb-4">
                We got the loan quickly and easily. Within a week, he had the money he needed to buy a house. In today's world, Farhan and his family have their own home, which was once an unattainable dream.
              </p>

              <div className="my-5 text-center">
                <img
                  src={asaanQarz8}
                  alt="Akhuwat Foundation Loan Values Diagram"
                  className="img-fluid rounded shadow-sm"
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">6. The Ghulam's Agricultural Transformation</h2>

              <p className="mb-4">
                Akhuwat Foundation also helps rural areas by giving farmers money. A lot of farmers in Pakistan have trouble paying for good seeds, fertiliser, and modern tools, which makes them less productive.
              </p>

              <p className="mb-4">
                A hard-working farmer from Multan named Ghulam Abbas also had to deal with similar problems. His income stayed low even though he worked hard because he used old methods. Normal banks wouldn't give money to farmers because they thought it was too risky.
              </p>

              <p className="mb-4">
                At that point, Ghulam went up to Akhuwat. He got the money he needed within a week to buy good plants, an irrigation system, and new tools. He tripled the amount of food he grew and made a lot more money. This shows that the right tools can change people's lives in rural areas.
              </p>

              <h2 className="fw-bold mt-5 mb-4">The Akhuwat Foundation is working to make Pakistan a better place.</h2>

              <p className="mb-4">
                All over the country, Akhuwat Foundation Loans have made a big difference for everyone from students and small business owners to families and farmers. Haseeb, Sarah, Ali, Farhan, and Ghulam's real-life stories show how easy access to fair financial aid can open doors to opportunities and ensure a better future.
              </p>

              <p className="mb-4">
                The 2025 Loan Scheme from the Akhuwat Foundation shows that the organisation is still dedicated to offering clear and inexpensive loan options that break down boundaries and give people power. Its goal remains the same: to give every Pakistani the tools they need to make tomorrow safer and stronger.
              </p>
            </article>
          </main>
        </div>

        {!isMobile && (
          <div className="col-lg-3">
            <div className="sticky-top pr-3" style={{ top: '0', paddingRight: '22px' }}>
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessStory;
