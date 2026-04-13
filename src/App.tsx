import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Assessment from "./pages/Assessment";
import ROICalculator from "./pages/ROICalculator";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import FinancialServicesIndustry from "./pages/FinancialServicesIndustry";
import LegalIndustry from "./pages/LegalIndustry";
import ManufacturingIndustry from "./pages/ManufacturingIndustry";
import RetailIndustry from "./pages/RetailIndustry";
import Technology from "./pages/Technology";
import TechnologyDetail from "./pages/TechnologyDetail";
import ContactCentreTechnology from "./pages/ContactCentreTechnology";
import AIVirtualAgentsTechnology from "./pages/AIVirtualAgentsTechnology";
import UnifiedCommunicationsTechnology from "./pages/UnifiedCommunicationsTechnology";
import SalesAgentsTechnology from "./pages/SalesAgentsTechnology";
import AIAutomationTechnology from "./pages/AIAutomationTechnology";
import Glossary from "./pages/Glossary";
import Careers from "./pages/Careers";
import PartnerDetail from "./pages/PartnerDetail";
import Partners from "./pages/Partners";
import ZoomPartner from "./pages/ZoomPartner";
import RingCentralPartner from "./pages/RingCentralPartner";
import NotFound from "./pages/NotFound";
import CaseStudyDetail from "./pages/CaseStudyDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/contact-centre" element={<ContactCentreTechnology />} />
          <Route path="/technology/ai-virtual-agents" element={<AIVirtualAgentsTechnology />} />
          <Route path="/technology/unified-communications" element={<UnifiedCommunicationsTechnology />} />
          <Route path="/technology/sales-agents" element={<SalesAgentsTechnology />} />
          <Route path="/technology/ai-automation" element={<AIAutomationTechnology />} />
          <Route path="/technology/:slug" element={<TechnologyDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/financial-services" element={<FinancialServicesIndustry />} />
          <Route path="/industries/legal" element={<LegalIndustry />} />
          <Route path="/industries/manufacturing" element={<ManufacturingIndustry />} />
          <Route path="/industries/retail" element={<RetailIndustry />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/zoom" element={<ZoomPartner />} />
          <Route path="/partners/ringcentral" element={<RingCentralPartner />} />
          <Route path="/partners/:slug" element={<PartnerDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
