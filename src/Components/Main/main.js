import React from "react";
import "./main.css";
import Carousel from "./carousel/carousel.js";
import StickyNavbar from "../Header/Sticky nav/stickynav";
import Tabs from "./tabs/tabs";

function Main() {
  return (
    <div style={{ position: "relative", marginTop: "-3px" }}>
      <StickyNavbar />
      <section
        id="hystory"
        style={{ position: "relative" }}
        className="hystory-container"
      >
        <div
          className=" text-container"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="heading-container">
            <div className="heading-number">01</div>

            <div
              className="history-heading"
              style={{
                color: "#414f6b",
                fontWeight: "700",
                fontFamily: "Oswald",
              }}
            >
              History <br /> <span className="heading-dot" />
            </div>
            {/* <div className="heading-number">.</div> */}
          </div>
          <div
            style={{
              marginInline: "auto",
              maxWidth: "70%",
              fontSize: "12px",
              lineHeight: "19px",
              color: "#000000",
              fontWeight: "300",
              fontFamily: "Lato",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </div>
        </div>
        <div
          style={{
            width: "100%",
            paddingBlock: "24px",
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(57,69,94,0.8)",
          }}
        >
          <Carousel />
        </div>
      </section>
      <div
        id="team"
        className=" text-container"
        style={{ width: "70%", marginInline: "auto" }}
      >
        <div className="heading-container">
          <div className="heading-number">02</div>

          <div
            className="history-heading"
            style={{
              color: "#414f6b",
              fontWeight: "700",
              fontFamily: "Oswald",
            }}
          >
            Climb <br /> <span className="heading-dot" />
          </div>
          <div
            style={{
              alignSelf: "center",
              marginInline: "auto",
              maxWidth: "70%",
              fontSize: "12px",
              lineHeight: "19px",
              color: "#000000",
              fontWeight: "300",
              fontFamily: "Lato",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default Main;
