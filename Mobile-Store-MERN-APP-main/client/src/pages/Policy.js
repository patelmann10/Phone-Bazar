import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/bb.jpg" alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p>1. Introduction
          At Phone Bazar, we value your privacy and are committed to protecting your personal information.
           This Privacy Policy explains how we collect, use, 
           and safeguard your data when you visit our website or make a purchase.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
