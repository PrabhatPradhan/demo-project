 
import Navbar from "./Componets/Navbar/Navbar"
import Hero from "./Componets/Hero/Hero"
import Card from "./Componets/Cards/Cards"
import Footer from "./Componets/Footer/Footer"
import EnquiryForm from "./Componets/EnquiryForm/EnquiryForm"
import ServiceCenterCard from "./Componets/ServiceCenterCard/ServiceCenterCard"
import WhyWeAreBest from "./Componets/WhyWeAreBest/WhyWeAreBest"
export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <EnquiryForm/>
   <ServiceCenterCard/>
   <Card/>
   <WhyWeAreBest/>
   <Footer/>
   </>
  );
}
