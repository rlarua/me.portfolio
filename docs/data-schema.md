# 📊 데이터 스키마 가이드 (Data Schema Guide)

이 프로젝트는 JSON 데이터를 기반으로 포트폴리오 내용을 렌더링합니다. 데이터 구조를 변경하거나 새로운 항목을 추가할 때 아래 가이드를 참고하세요.

---

## 1. 프로젝트 데이터 (`src/data/projects.json`)

`Featured Projects` 섹션에 표시되는 주요 프로젝트 목록입니다.

| 필드명 | 타입 | 설명 | 비고 |
| :--- | :--- | :--- | :--- |
| `id` | `number` | 고유 식별자 | |
| `title` | `string` | 프로젝트 제목 | |
| `client` | `string` | 고객사 또는 소속 | |
| `period` | `string` | 수행 기간 | 예: "2024.10 - 2025.03" |
| `tags` | `string[]` | 기술 스택 태그 | 카드 상단에 표시됨 |
| `description` | `string` | 프로젝트 요약 설명 | |
| `category` | `string` | 필터링 카테고리 | `enterprise`, `mobile`, `ai` 중 하나 |
| `keyResults` | `string[]` | 주요 성과/특징 | 리스트 형태로 표시됨 |

---

## 2. 프로젝트 이력 (`src/data/projectHistory.json`)

`Complete Project History` 타임라인 섹션에 표시되는 전체 이력 데이터입니다.

### Phase 객체 (연대별 그룹)
| 필드명 | 타입 | 설명 | 비고 |
| :--- | :--- | :--- | :--- |
| `period` | `string` | 해당 단계의 전체 기간 | 예: "2022 ~ 2025" |
| `milestone` | `string` | 단계의 핵심 명칭 | 예: "Enterprise AI & Platform" |
| `projects` | `object[]` | 해당 단계의 프로젝트 목록 | 아래 Project 객체 참고 |

### Project 객체 (세부 항목)
| 필드명 | 타입 | 설명 | 비고 |
| :--- | :--- | :--- | :--- |
| `title` | `string` | 프로젝트 제목 | |
| `client` | `string` | 고객사/회사명 | |
| `period` | `string` | 세부 수행 기간 | |
| `desc` | `string` | 상세 설명 | 카드 앞면에 표시 |
| `tech` | `string` | 사용 기술 스택 | 카드 뒷면에 표시 |
| `iconType` | `string` | 아이콘 타입 | `Layout`, `Server`, `Database`, `Smartphone`, `Cpu`, `Zap`, `Globe` 중 선택 |

---

## 3. 기술 스택 (`src/data/techStacks.json`)

`Technology Stack` 섹션에 표시되는 기술 분류 데이터입니다.

### Category 객체
| 필드명 | 타입 | 설명 | 비고 |
| :--- | :--- | :--- | :--- |
| `category` | `string` | 기술 카테고리명 | 예: "Native & App" |
| `icon` | `string` | 카테고리 아이콘 | `getIcon` 함수에서 매핑됨 |
| `stack` | `object[]` | 세부 기술 스택 목록 | 아래 Stack 객체 참고 |

### Stack 객체
| 필드명 | 타입 | 설명 | 비고 |
| :--- | :--- | :--- | :--- |
| `name` | `string` | 기술명 | 예: "Mobile", "Frontend" |
| `skills` | `string[]` | 상세 스킬 목록 | 모달에서 배지로 표시됨 |
| `projects` | `string[]` | 관련 프로젝트명 | 모달 하단에 표시됨 |

---

## 💡 팁: 아이콘 추가하기
새로운 아이콘을 사용하려면 `src/App.jsx`의 `getIcon` 함수에 `lucide-react` 아이콘을 추가로 등록해야 합니다.
