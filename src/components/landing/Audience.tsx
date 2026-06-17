import { Check } from "lucide-react";

const items = [
  "Lovable을 처음 써보는 학생",
  "AI 앱 개발 수업을 준비하는 강사",
  "직접 랜딩 페이지나 예약 앱을 만들고 싶은 자영업자",
  "Github와 Supabase 연동이 어려운 사용자",
  "Lovable 결과물이 자주 흐트러지는 사용자",
];

export function Audience() {
  return (
    <section id="audience" className="border-b border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="text-center">
          <p className="text-sm font-normal text-muted-foreground">대상자</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.9px] text-foreground sm:text-4xl lg:text-5xl lg:tracking-[-1.2px]">
            이런 분에게 추천합니다
          </h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-2xl gap-3">
          {items.map((text) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-[color:var(--lovable-interactive-border)]"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-background text-foreground shadow-[var(--lovable-button-inset)]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm leading-relaxed text-foreground sm:text-base">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
