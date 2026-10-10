import HeroSection from "../components/HeroSection";
import LeadershipExperience from "../components/LeadershipExperience";
import Playground from "../components/Playground";
import ProjectsBentoGrid from "../components/ProjectsBentoGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsBentoGrid />
      <LeadershipExperience />
      <Playground />
    </>
  );
}
