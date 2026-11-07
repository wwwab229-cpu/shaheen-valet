// Central content for the Shaheen Valet site. Update venue spellings or add
// `logo` image paths here after client confirmation.
export const CONTACT_EMAIL = "Shaheenvalet@gmail.com";
export const CONTACT_PHONE_DISPLAY = "0302 9793692";
export const CONTACT_PHONE_TEL = "+92302973692";
export const CONTACT_WHATSAPP = "https://wa.me/92302973692";

export type Venue = { name: string; logo?: string };

export const VENUES: Venue[] = [
  { name: "Sync. Coffee" },
  { name: "Tim Hotan" },
  { name: "Mondo Coffee Bar" },
  { name: "Lato Vita" },
  { name: "Kababjees" },
  { name: "LA Chine" },
  { name: "Elve8 Gym" },
  { name: "Build Fitness" },
  { name: "Menal Salon Studio" },
  { name: "Majestic Banquet" },
  { name: "The Vault" },
];

export const SERVICES = [
  { title: "Restaurant & Café Valet", body: "Valet support for dining venues and cafés, helping guests arrive and leave without the search for parking." },
  { title: "Hotel & Guest Arrival Valet", body: "Arrival and departure handling at hotel entrances, aligned with the venue's guest-reception standards." },
  { title: "Wedding & Banquet Valet", body: "Valet arrangements for weddings and banquet functions, planned around guest volume and event timing." },
  { title: "Corporate & Commercial Valet", body: "Valet service for office buildings and commercial spaces receiving clients, visitors and executives." },
  { title: "Gym & Fitness Venue Valet", body: "Convenient drop-off and pick-up for members at gyms, studios and fitness venues." },
  { title: "Events & VIP Valet", body: "Valet planning for exhibitions, launches, private functions and VIP occasions." },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title).concat("Other / Not sure yet");