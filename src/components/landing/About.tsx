export function About() {
  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="text-center">
          <p className="text-sm font-normal text-muted-foreground">소개</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.9px] text-foreground sm:text-4xl lg:text-5xl lg:tracking-[-1.2px]">
            Lovable은 쉽지만, 제대로 쓰기는 어렵습니다
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Lovable은 빠르게 앱을 만들 수 있는 강력한 도구입니다. 하지만 Github 연동, Supabase 설정,
            워크스페이스 관리, 디자인 일관성 유지 방법을 모르면 프로젝트가 쉽게 꼬일 수 있습니다. 이
            스터디는 Lovable을 더 안전하고 체계적으로 사용하는 방법을 다룹니다.
          </p>
        </div>
      </div>
    </section>
  );
}
