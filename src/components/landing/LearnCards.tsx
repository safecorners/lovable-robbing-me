import { Github, Database, FolderKanban, Palette, type LucideIcon } from "lucide-react";

type Card = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    icon: Github,
    title: "Github 연동",
    description:
      "Lovable 프로젝트를 Github와 연결하고, 코드 변경 사항을 안전하게 관리하는 방법을 배웁니다.",
  },
  {
    icon: Database,
    title: "Supabase 연동",
    description:
      "데이터베이스, 인증, API 연동을 Supabase로 구성하는 기본 흐름을 익힙니다.",
  },
  {
    icon: FolderKanban,
    title: "워크스페이스 관리법",
    description:
      "프로젝트가 많아져도 헷갈리지 않도록 워크스페이스, 프로젝트, 권한을 관리하는 방법을 배웁니다.",
  },
  {
    icon: Palette,
    title: "디자인 일관성 유지",
    description:
      "Lovable이 생성한 화면이 뒤죽박죽되지 않도록 컬러, 폰트, 버튼, 레이아웃 규칙을 유지하는 방법을 배웁니다.",
  },
];

export function LearnCards() {
  return (
    <section id="learn" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            학습 내용
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            이런 것들을 배웁니다
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
