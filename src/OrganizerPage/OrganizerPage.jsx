// eslint-disable-next-line no-unused-vars
import React from "react";
import OrganizerForms from "./OrganizerForms.jsx";
import OrganizerHero from "./OrganizerHero.jsx";
import OrganizerServices from "./OrganizerServices.jsx";

export default function OrganizerPage() {
  return (
    <div id="organizer-page" className="organizer-page">
      <OrganizerHero/>
      <OrganizerServices/>
      <OrganizerForms/>
    </div>
  )
}