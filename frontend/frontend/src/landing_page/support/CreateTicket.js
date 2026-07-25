import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  const links = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  const renderSection = () => (
    <div className="col-4 p-5 mt-2 mb-2">
      <h4>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
        Account Opening
      </h4>

      {links.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              lineHeight: "2.5",
            }}
          >
            {item}
          </Link>
          <br />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">
          To create a ticket, select a relevant topic
        </h1>

        {renderSection()}
        {renderSection()}
        {renderSection()}
        {renderSection()}
        {renderSection()}
        {renderSection()}
      </div>
    </div>
  );
}

export default CreateTicket;