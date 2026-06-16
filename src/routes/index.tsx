import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { LearnCards } from "@/components/landing/LearnCards";
import { Audience } from "@/components/landing/Audience";
import { CtaBand } from "@/components/landing/CtaBand";
import { Footer } from "@/components/landing/Footer";

const TITLE = "러버블에게 사기 당하지 않는 방법 — 실전 Lovable 스터디";
const DESCRIPTION =
  "Lovable로 앱을 만들 때 Github, Supabase, 워크스페이스, 디자인 관리에서 실수하지 않는 방법을 함께 배우는 실전 스터디.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <LearnCards />
        <Audience />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
