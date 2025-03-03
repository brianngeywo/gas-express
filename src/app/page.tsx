import ContactInfo from "./components/ContactInfor";
import Header from "./components/Header";
import WhatWeOfferSection from "./components/what-we-offer-section";
import WhyUsSection from "./components/why-us-section";
import DownloadAppSection from "./components/download-app-section";
import DashboardFooter from "./components/Footer";

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
