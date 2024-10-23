import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Project from "@/components/Projects";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <ContactUs/>
    </>
  );
}
