import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Phone Bazar is an online e-commerce platform dedicated to mobile phones and related accessories.
           Our goal is to provide customers with a seamless shopping experience, 
           offering a wide range of smartphones from top brands at competitive prices.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
