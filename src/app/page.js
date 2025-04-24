import { PageWrapper } from "@/utils";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <PageWrapper
      mb={0}
      minH="100vh"
      bgImage="/background/Hero3.jpg"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      color="white"
    >
      <HeroSection />
    </PageWrapper>
  );
}
