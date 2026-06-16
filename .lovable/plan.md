## 구현 범위 (1차: UI만)

딥 그린 메인 컬러의 신뢰감 있는 교육형 랜딩 페이지와 스터디 신청 페이지를 모바일 우선 반응형으로 구축합니다. Supabase 연동은 2차에서 진행합니다.

## 페이지 구성

### 1. 랜딩 페이지 (`/`)
- **상단 네비게이션** (sticky)
  - 로고: "러버블에게 사기 당하지 않는 방법"
  - 메뉴: 소개 / 학습 내용 / 대상자 / 신청하기
  - 데스크톱: 가로 메뉴 / 모바일: 햄버거 → Sheet 드로어
  - 앵커 링크는 같은 페이지 섹션으로 스무스 스크롤, "신청하기"는 `/apply`로 이동
- **Hero 섹션**
  - 제목: "러버블에게 사기 당하지 않는 방법"
  - 부제, 보조 문구, CTA 버튼 ("스터디 신청하기" → `/apply`)
- **소개 섹션** (`#about`)
  - "Lovable은 쉽지만, 제대로 쓰기는 어렵습니다" + 본문
- **학습 내용 섹션** (`#learn`)
  - 4개 카드 그리드 (모바일 1열 / 태블릿 2열 / 데스크톱 4열)
  - 둥근 모서리, soft shadow, 아이콘 (lucide: Github, Database, FolderKanban, Palette)
- **대상자 섹션** (`#audience`)
  - "이런 분에게 추천합니다" + 체크 아이콘 리스트 5개
- **CTA 섹션**
  - 딥 그린 배경 밴드 + 제목/설명/버튼
- **푸터**
  - 간단한 카피라이트

### 2. 신청 페이지 (`/apply`)
- 제목 + 설명
- 폼 (react-hook-form + zod)
  - 이름 (필수, 1자 이상)
  - 전화번호 (필수, 숫자/하이픈 허용 형식 검증)
- "신청하기" 버튼
- 제출 시 (1차에선 로컬 처리):
  - 검증 실패 → 필드별 에러 메시지
  - 검증 통과 → "스터디 신청이 완료되었습니다." 완료 화면 표시
  - 완료 화면에 "랜딩 페이지로 돌아가기" 버튼

## 디자인 시스템

`src/styles.css`의 oklch 토큰을 다음으로 교체:
- `--primary`: 딥 그린 (oklch ≈ 0.38 0.09 155)
- `--primary-foreground`: 화이트
- `--background`: 화이트
- `--secondary` / `--muted`: 라이트 그레이
- `--foreground`: 다크 네이비 (oklch ≈ 0.20 0.04 250)
- 카드: 둥근 모서리(`rounded-2xl`), `shadow-sm` hover시 `shadow-md`
- 버튼 hover: 딥 그린 약간 어둡게 + 미세 lift

## 기술 구현

- **라우팅**: `src/routes/index.tsx` (랜딩), `src/routes/apply.tsx` (신청) — 각 route에 고유 `head()` 메타 (title/description/og)
- **컴포넌트 분리**: `src/components/landing/` 아래 `Navbar`, `Hero`, `About`, `LearnCards`, `Audience`, `CtaBand`, `Footer`
- **폼**: shadcn `Form` + `Input` + `Button` + `react-hook-form` + `zod`
- **반응형**: Tailwind `sm:` / `md:` / `lg:` 브레이크포인트, 모바일 우선
- **접근성**: semantic HTML (단일 H1, section/nav/main), 폼 label, alt text

## 2차 준비 (이번엔 구현 안 함)
- Lovable Cloud 활성화 + `study_applications` 테이블 (id uuid pk, name text, phone text, created_at timestamptz) + RLS + insert 정책
- 폼 제출 시 server function으로 insert
