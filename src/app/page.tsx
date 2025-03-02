import ContactInfo from "@/app/components/ContactInfor";
import Header from "@/app/components/Header";
import WhatWeOfferSection from "./components/what-we-offer-section";

export default function Home() {
  return (
    <div>
      <Header />
      <WhatWeOfferSection />
      <ContactInfo />
    </div>
  );
}
