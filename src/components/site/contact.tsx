import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_WHATSAPP, SERVICE_OPTIONS } from "@/lib/site-content";
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
        <div className="contact-details">
          <p>For your venue. For your guests.<br />For a considered first impression.</p>
          <div className="contact-options" aria-label="Contact Shaheen Valet">
            <a className="contact-option whatsapp-option" href={CONTACT_WHATSAPP} target="_blank" rel="noreferrer"><span className="contact-option-icon whatsapp-brand-icon" aria-hidden="true"><svg viewBox="0 0 32 32" role="img"><circle cx="16" cy="16" r="16" fill="currentColor" /><path d="M23.2 19.1c-.3-.15-1.8-.9-2.1-1s-.5-.15-.72.15-.83 1.02-1.02 1.23-.38.23-.7.08a8.6 8.6 0 0 1-2.54-1.57 9.5 9.5 0 0 1-1.76-2.2c-.18-.32-.02-.5.13-.66.14-.13.32-.37.48-.55.15-.18.2-.3.3-.5.1-.2.05-.4-.02-.56-.08-.16-.7-1.7-.96-2.33-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.55.08-.83.4-.28.3-1.08 1.05-1.08 2.57s1.1 2.98 1.25 3.18c.15.2 2.16 3.3 5.24 4.62.73.32 1.3.5 1.75.64.74.23 1.4.2 1.92.12.59-.1 1.8-.74 2.05-1.46.25-.72.25-1.34.17-1.47-.07-.13-.27-.2-.56-.34Z" fill="#fff"/><path d="M16 4.2A11.7 11.7 0 0 0 6 22l-1.2 5 5.1-1.34A11.8 11.8 0 1 0 16 4.2Zm0 21.35c-1.7 0-3.35-.45-4.8-1.3l-.35-.2-3.02.8.8-2.94-.23-.37A9.6 9.6 0 1 1 16 25.55Z" fill="#fff"/></svg></span><span><strong>WhatsApp</strong><small>{CONTACT_PHONE_DISPLAY}</small></span></a>
            <a className="contact-option" href={`tel:${CONTACT_PHONE_TEL}`}><span className="contact-option-icon"><Phone /></span><span><strong>Call us</strong><small>{CONTACT_PHONE_DISPLAY}</small></span></a>
            <a className="contact-option" href={`mailto:${CONTACT_EMAIL}`}><span className="contact-option-icon"><Mail /></span><span><strong>Email</strong><small>{CONTACT_EMAIL}</small></span></a>
          </div>
          <p className="contact-location">Karachi, Sindh, Pakistan</p>
        </div>
        <form onSubmit={onSubmit} aria-describedby="form-note" className="enquiry-form">
          <div className="form-grid">
            <label>Your name *<input name="name" required maxLength={100} autoComplete="name" /></label>
            <label>Venue / business *<input name="venue" required maxLength={150} autoComplete="organization" /></label>
            <label>Your email *<input name="email" type="email" required maxLength={255} autoComplete="email" /></label>
            <label>Service type *<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{SERVICE_OPTIONS.map(option => <option key={option}>{option}</option>)}</select></label>
            <label className="form-wide">Event date or regular timing<input name="date" maxLength={120} /></label>
            <label className="form-wide">Tell us about your venue or event *<textarea name="message" required maxLength={2000} rows={3} /></label>
          </div>
          <Button type="submit" variant="editorial" className="enquiry-submit">Open email to send enquiry</Button>
          <p id="form-note" role="status" className="form-note">{handedOff ? `Your email app should now be open. Press send there to send your enquiry. If nothing opened, email ${CONTACT_EMAIL} directly.` : "This opens your email app with your details. Nothing is sent until you press send there."}</p>
        </form>
      </div>
    </div>
  </section>;
}