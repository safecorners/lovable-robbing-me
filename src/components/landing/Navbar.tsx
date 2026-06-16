import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "소개" },
  { href: "#learn", label: "학습 내용" },
  { href: "#audience", label: "대상자" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <span className="truncate text-sm font-bold sm:text-base">
            러버블에게 사기 당하지 않는 방법
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Link to="/apply" className="ml-2">
            <Button size="sm">신청하기</Button>
          </Link>
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          className="grid h-10 w-10 place-items-center rounded-md md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <Link to="/apply" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full">신청하기</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
