import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TEMADIPLOME.CE | Professional Academic Assistance Services</title>
        <meta
          name="description"
          content="Get expert help with your thesis, research papers, and assignments. Professional academic assistance with on-time delivery and quality guarantee."
        />
        <meta
          name="keywords"
          content="thesis writing, academic assistance, bachelor thesis, master thesis, research paper, coursework help, Albania"
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <HowItWorksSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
