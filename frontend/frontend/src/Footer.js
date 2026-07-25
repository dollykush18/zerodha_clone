import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "50%" }}
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>

            <Link to="/products">Products</Link>
            <br />

            <Link to="/about">About</Link>
            <br />

            <Link to="/pricing">Pricing</Link>
            <br />

            <Link to="/">Referral programme</Link>
            <br />

            <Link to="/">Careers</Link>
            <br />

            <Link to="/">Zerodha.tech</Link>
            <br />

            <Link to="/">Press & media</Link>
            <br />

            <Link to="/">Zerodha Cares</Link>
            <br />
          </div>

          <div className="col">
            <p>Support</p>

            <Link to="/support">Contact</Link>
            <br />

            <Link to="/">Support portal</Link>
            <br />

            <Link to="/">Z-Connect blog</Link>
            <br />

            <Link to="/">List of charges</Link>
            <br />

            <Link to="/">Downloads & resources</Link>
            <br />
          </div>

          <div className="col">
            <p>Account</p>

            <Link to="/signup">Open an account</Link>
            <br />

            <Link to="/">Fund transfer</Link>
            <br />

            <Link to="/">60 day challenge</Link>
            <br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE &amp; BSE – SEBI Registration
            no.: INZ000031633. CDSL: Depository services through Zerodha
            Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015.
            Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 –
            SEBI Registration no.: INZ000038238. Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P. Nagar 4th Phase, Bengaluru - 560078,
            Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on the
            SCORES portal. Mandatory details include Name, PAN, Address,
            Mobile Number and Email ID.
          </p>

          <p>
            Investments in securities market are subject to market risks.
            Read all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account by updating
            your mobile number and email ID with your stock broker. Receive
            transaction information directly from the Exchange. KYC is a
            one-time process through a SEBI registered intermediary.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;