import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const TermsAndConditions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: '22px' }}>
      <div className="row g-0">
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Terms and Conditions – Akhuwat Foundation Loan</h1>

              <p className="mb-4">
                These are the rules you agree to follow when you use the Akhuwat Foundation Loan website or services. Please do not use our platform if you do not agree to these rules.
              </p>

              <p className="mb-4">
                We can update or change these terms at any time without telling you first. People should come back to this page often to see any changes.
              </p>

              <h2 className="fw-bold mt-5 mb-4">1. What they mean</h2>
              <p>The banking services we offer through this platform are called "Akhuwat Foundation Loan."</p>
              <p>"Our" or "We" means the Akhuwat Foundation Loan team.</p>
              <p>The words "you" or "your" refer to anyone who uses our website or asks for a loan.</p>

              <h2 className="fw-bold mt-5 mb-4">2. Using a Website</h2>
              <p>
                When you use our site, you agree that you are at least 18 years old and legally able to make deals that are legally binding. You must not do anything bad, like spreading bugs, hacking, or changing the website's content.
              </p>

              <h2 className="fw-bold mt-5 mb-4">3. Services for loans</h2>
              <p>
                People who live in Pakistan and meet our requirements can get cash help from us. When filling out the application, you must give correct and honest information. It's not easy to get approval. Before final approval, the full loan terms will be shared, which will include when the payments are due and any fees that are involved. People who take money must pay it back on time.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Who can apply What It Takes</h2>
              <ul className="fw-light mx-5">
                <li>Be a national or legal resident of Pakistan</li>
                <li>18 or older</li>
                <li>Maintain a current CNIC</li>
                <li>Have a cash source that can be checked</li>
                <li>Send in full and correct financial information</li>
              </ul>
              <p>Requests that aren't full or aren't eligible may be turned down.</p>

              <h2 className="fw-bold mt-5 mb-4">5. Obligations to pay back debts</h2>
              <p>
                Loans need to be paid back in stages, usually once a month. Paying late fees or hurting your credit score may happen if you don't. It is possible to pay off the loan early, which may lower the total cost.
              </p>

              <h2 className="fw-bold mt-5 mb-4">6. Paying fees and interest</h2>
              <p>
                We offer loans with low or no interest, based on the type and length of the loan. All fees, like application, handling, and late payment fees, will be made clear from the start.
              </p>

              <h2 className="fw-bold mt-5 mb-4">7. Security and privacy of information</h2>
              <p>
                We only need your personal information to process your loan, make sure you're eligible, and keep in touch. We won't sell or give your information to other people unless the law says we have to.
              </p>

              <h2 className="fw-bold mt-5 mb-4">8. External Websites</h2>
              <p>
                There may be links on this page to other websites. These outside websites have their own rules and material that we are not in charge of. Please read their rules on your own.
              </p>

              <h2 className="fw-bold mt-5 mb-4">9. Rights to intellectual property</h2>
              <p>
                Intellectual property rules protect all the text, logos, and designs on this platform, which are owned by Akhuwat Foundation Loan. It is strictly forbidden to use, copy, or distribute this material without permission.
              </p>

              <h2 className="fw-bold mt-5 mb-4">10. Activities That Can't Be Done</h2>
              <ul className="fw-light mx-5">
                <li>Give misleading or false information</li>
                <li>Use the site to commit fraud, break the law, or launder money</li>
                <li>Messe with the program or infrastructure of the site</li>
                <li>Get into or abuse another user's info</li>
                <li>You can't use our services for illegal business reasons</li>
              </ul>
              <p>Accounts that are violated may be closed, sued, or suspended.</p>

              <h2 className="fw-bold mt-5 mb-4">11. Notice of No Liability</h2>
              <p>
                We do our best to provide accurate and continuous service, but we can't promise that the platform will never have bugs. When you use our services, Akhuwat Foundation Loan is not responsible for any damage or loss you may experience.
              </p>

              <h2 className="fw-bold mt-5 mb-4">12. Suspending or closing an account</h2>
              <p>
                Your account could be closed or stopped if you break the rules, commit fraud, or don't pay back loans. After the account is closed, any past-due fees must still be paid.
              </p>

              <h2 className="fw-bold mt-5 mb-4">13. Law that governs</h2>
              <p>
                The laws of Pakistan control these terms. Any legal issues will be settled in Pakistani courts.
              </p>

              <h2 className="fw-bold mt-5 mb-4">14. Changes to the rules</h2>
              <p>
                We might change these names every once in a while. By using our website or services after changes have been made, you agree to the new rules.
              </p>

              <h2 className="fw-bold mt-5 mb-4">15. Contact Us</h2>
              <p>If you have any questions or concerns, please contact us:</p>
              <p>Email: <a href="mailto:support@AsaanQarzloanschemepk.com">support@AsaanQarzloanschemepk.com</a></p>
              <p>Phone: +92 340 1003463</p>
              <p>Office Address: F-6, Islamabad, Islamabad Capital Territory, Pakistan</p>

              <p className="mt-4 text-muted">Last Updated: October 2024</p>
              <p className="mt-4">Thank you for choosing Akhuwat Foundation Loan. We remain committed to offering transparent, honest, and reliable financial solutions.</p>
            </article>
          </main>
        </div>

        {!isMobile && (
          <div className="col-lg-3">
            <div className="sticky-top pr-3" style={{ top: "0", paddingRight: "22px" }}>
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditions;
