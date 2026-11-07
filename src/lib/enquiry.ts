import { CONTACT_EMAIL } from "./site-content";

export function createEnquiryMailto(data: FormData) {
  const get = (key: string) => String(data.get(key) ?? "").trim().slice(0, 2000);
  const subject = `Valet service enquiry — ${get("venue")}`;
  const body = [`Name: ${get("name")}`, `Venue / business: ${get("venue")}`, `Reply email: ${get("email")}`, `Service type: ${get("service")}`, `Event date / timing: ${get("date") || "—"}`, "", get("message")].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}