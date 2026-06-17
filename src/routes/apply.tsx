import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const TITLE = "스터디 신청 — 러버블에게 사기 당하지 않는 방법";
const DESCRIPTION = "이름과 전화번호만 입력하면 스터디 신청이 완료됩니다.";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ApplyPage,
});

const formSchema = z.object({
  name: z.string().trim().min(1, "이름을 입력하세요").max(50, "이름이 너무 깁니다"),
  phone: z
    .string()
    .trim()
    .min(1, "전화번호를 입력하세요")
    .regex(/^[0-9-+\s()]{9,20}$/, "올바른 전화번호 형식이 아닙니다"),
});

type FormValues = z.infer<typeof formSchema>;

function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "" },
  });

  const onSubmit = (_values: FormValues) => {
    // 2차 구현에서 Supabase로 저장
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20">
          {submitted ? (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-background text-foreground shadow-[var(--lovable-button-inset)]">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h1 className="mt-5 text-2xl font-semibold tracking-[-0.4px] text-foreground">
                스터디 신청이 완료되었습니다.
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                담당자가 확인 후 안내 메시지를 보내드릴 예정입니다.
              </p>
              <div className="mt-7">
                <Link to="/">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    랜딩 페이지로 돌아가기
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h1 className="text-3xl font-semibold tracking-[-0.9px] text-foreground sm:text-4xl">
                스터디 신청
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                아래 정보를 입력하면 스터디 신청이 완료됩니다.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름</FormLabel>
                        <FormControl>
                          <Input placeholder="이름을 입력하세요" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>전화번호</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            inputMode="tel"
                            placeholder="전화번호를 입력하세요"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    신청하기
                  </Button>
                </form>
              </Form>

              <div className="mt-6 text-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  랜딩 페이지로 돌아가기
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
