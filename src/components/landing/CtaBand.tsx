import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
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
              className="bg-white text-primary hover:bg-white/90"
            >
              스터디 신청하기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
