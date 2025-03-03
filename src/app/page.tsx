import ContactInfo from "@/components/ContactInfor";
import DownloadAppSection from "@/components/download-app-section";
import DashboardFooter from "@/components/Footer";
import Header from "@/components/Header";
import WhatWeOfferSection from "@/components/what-we-offer-section";
import WhyUsSection from "@/components/why-us-section";

export default function Home() {
  return (
    <div>
      <Header />
      <WhatWeOfferSection />
      <DownloadAppSection/>
      <ContactInfo />
      <WhyUsSection/>
      <DashboardFooter />
    </div>
  );
}
