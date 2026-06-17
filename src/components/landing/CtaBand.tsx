import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.9px] text-primary-foreground sm:text-4xl lg:text-5xl lg:tracking-[-1.2px]">
          Lovable을 더 안전하게 배우고 싶다면
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
          실수하기 쉬운 부분을 함께 점검하며, 실제 앱 개발 흐름에 맞춰 스터디를 진행합니다.
        </p>
        <div className="mt-8">
          <Link to="/apply">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              스터디 신청하기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
