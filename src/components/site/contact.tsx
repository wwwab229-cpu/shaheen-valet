import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, SERVICE_OPTIONS } from "@/lib/site-content";
import { createEnquiryMailto } from "@/lib/enquiry";

export function Contact() {
  const [handedOff, setHandedOff] = useState(false);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = createEnquiryMailto(new FormData(event.currentTarget));
    setHandedOff(true);
  }
  return <section id="contact" className="contact-section">
    <div className="page-shell">
      <div className="section-label"><span>05 / LET’S TALK</span><span>KARACHI, PAKISTAN</span></div>
      <h2 className="contact-title">Your next arrival.<br /><em>Our first conversation.</em></h2>
      <div className="contact-layout">
        <div className="contact-details"><p>For your venue. For your guests.<br />For a considered first impression.</p><a className="email-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}<ArrowUpRight aria-hidden="true" /></a><p className="contact-location">Karachi, Sindh, Pakistan</p></div>
        <form onSubmit={onSubmit} aria-describedby="form-note" className="enquiry-form">
          <div className="form-grid">
            <label>Your name *<input name="name" required maxLength={100} autoComplete="name" /></label>
            <label>Venue / business *<input name="venue" required maxLength={150} autoComplete="organization" /></label>
            <label>Your email *<input name="email" type="email" required maxLength={255} autoComplete="email" /></label>
            <label>Service type *<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{SERVICE_OPTIONS.map(option => <option key={option}>{option}</option>)}</select></label>
            <label className="form-wide">Event date or regular timing<input name="date" maxLength={120} /></label>
            <label className="form-wide">Tell us about your venue or event *<textarea name="message" required maxLength={2000} rows={3} /></label>
          </div>
          <Button type="submit" variant="editorial" className="enquiry-submit">Open email to send enquiry <ArrowUpRight /></Button>
          <p id="form-note" role="status" className="form-note">{handedOff ? `Your email app should now be open. Press send there to send your enquiry. If nothing opened, email ${CONTACT_EMAIL} directly.` : "This opens your email app with your details. Nothing is sent until you press send there."}</p>
        </form>
      </div>
    </div>
  </section>;
}