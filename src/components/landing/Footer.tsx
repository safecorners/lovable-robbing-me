export function Footer() {
  return (
    <footer className="border-t border-border bg-[linear-gradient(180deg,#f7f4ed_0%,#f4eddf_58%,#efe4d2_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <p className="text-center text-xs text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} 러버블에게 사기 당하지 않는 방법 스터디. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
