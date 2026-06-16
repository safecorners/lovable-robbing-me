import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 to-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            실전 Lovable 스터디
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            러버블에게
            <br className="sm:hidden" />
            <span className="text-primary"> 사기 당하지 않는 방법</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Lovable로 앱을 만들 때 Github, Supabase, 워크스페이스, 디자인 관리에서
            실수하지 않는 방법을 함께 배우는 실전 스터디
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/apply">
              <Button size="lg" className="group w-full sm:w-auto">
                스터디 신청하기
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
            학생, 강사, 자영업자, Lovable 입문자 모두 참여 가능
          </p>
        </div>
      </div>
    </section>
  );
}
