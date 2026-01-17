import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn: clsx와 tailwind-merge를 사용한 클래스 병합 유틸리티 함수
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
