/*eslint-disable*/
import React from "react";

// reactstrap components

// core components

function PresentationHeader() {
  return (
    <>
      <div className="page-header clear-filter">
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-4">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-back-sky.jpg") +
                ")",
            }}
          ></div>
        </div>
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <div
            className="page-header-image page-header-city"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-buildings.png") +
                ")",
            }}
          ></div>
        </div>
        <div className="rellax-text-container">
          <h2 className="h1-seo" data-rellax-speed="1">
            j.d. Air Travels
          </h2>
          <div className="pro">.com</div>
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          A world class premium travels to travell the world.
        </h3>
        <h6
          className="category category-absolute rellax-text"
          data-rellax-speed="-1"
        >
          Designed by{" "}
          <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
            <img
              alt="..."
              className="invision-logo"
              src={require("assets/img/invision-white-slim.png")}
            ></img>
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nuk-pro-react-presentation-header"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            ></img>
          </a>
          .
        </h6>
      </div>
    </>
  );
}

export default PresentationHeader;
