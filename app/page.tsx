"use client"
import TopNavbar from "@/components/top-navbar"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StudentOpportunitiesSection from "@/components/StudentOpportunitiesSection"
import SuccessStoriesSection from "@/components/SuccessStoriesSection"
import KnowledgeCenter from "@/components/KnowledgeCenter"
import NewsletterSubscribe from "@/components/NewsletterSubscribe"
import MembershipBenefits from "@/components/MembershipBenefits"
import LatestUpdates from "@/components/latest-updates"
import AudioVideo from "@/components/audio-video"
import UnionMembership from "@/components/union-membership"
import WorldMap from "@/components/world-map"
import Newsletter from "@/components/newsletter"
import CustomFooter from "@/components/CustomFooter"
import DefinitionSection from "@/components/definition-section"
import MemberUniversitiesSection from "@/components/member-universities-section"
import NewsEventsSection from "@/components/news-events-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <Header />
      <main>
        <HeroSection />
        <DefinitionSection />
        <MembershipBenefits />
        <MemberUniversitiesSection />
        <NewsEventsSection />
        <StudentOpportunitiesSection />
        <SuccessStoriesSection />
       
       
       
        <NewsletterSubscribe />
       
      </main>
      <CustomFooter />
    </div>
  )
}
