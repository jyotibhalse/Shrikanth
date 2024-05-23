import React from "react";
import Dashboard  from "./Dashboard";

export default function Medicine(){
    return(
        <>
        <Dashboard/>
        <div>
      <h1>Medicines</h1>
      <p>We offer a comprehensive range of medicines to meet your healthcare needs. Browse through categories such as:</p>
      <ul>
        <li>Prescription Medicines</li>
        <li>Over-the-Counter (OTC) Medicines</li>
        <li>Vitamins and Supplements</li>
        <li>Herbal Remedies</li>
      </ul>
      <p>Contact our pharmacists for expert advice and recommendations.</p>
    </div>

        </>
    );
};