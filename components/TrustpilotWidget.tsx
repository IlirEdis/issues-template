"use client";

import React, { useEffect, useRef } from "react";

interface ITrustpilot {
  templateId: string;
  theme?: string;
}

declare global {
  interface Window {
    Trustpilot?: any;
  }
}

export default function TrustpilotWidget({ templateId, theme }: ITrustpilot) {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = useRef(null);
  useEffect(() => {
    // console.log("WINDOWWW", window);
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (!window?.Trustpilot) {
      <p>Loading trustpilot...</p>;
    } else {
      window?.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);
  return (
    <div
      ref={ref} // We need a reference to this element to load the TrustBox in the effect.
      className='trustpilot-widget flex justify-center pb-[30px]' // Renamed this to className.
      // [ long list of data attributes...]
      data-locale='en-US'
      data-template-id={templateId}
      data-businessunit-id='5464bb2900006400057b8414'
      data-style-height='60px'
      data-style-width='100%'
      data-theme={theme ? theme : "light"}
      // style={{ paddingBottom: "30px" }}
    >
      <a
        href='https://www.trustpilot.com/review/edis.at'
        target='_blank'
        rel='noreferrer'
      >
        Trustpilot
      </a>
    </div>
  );
}
