export type PaginationVariant = 'compact' | 'minimize';

export interface PaginationProps {
  /**
   * 현재 페이지 (1부터 시작)
   */
  currentPage: number;

  /**
   * 전체 페이지 수
   */
  totalPages: number;

  /**
   * 페이지 변경 시 호출되는 함수
   */
  onPageChange: (page: number) => void;

  /**
   * Pagination 변형
   * - compact: 전체 페이지 번호를 표시
   * - minimize: 현재 페이지/전체 페이지 형태로 표시
   */
  variant?: PaginationVariant;

  /**
   * 한 번에 표시할 최대 페이지 수 (compact variant에서만 사용)
   * 예: maxVisiblePages={5}이고 현재 페이지가 50이면 "1 ... 48 49 50 51 52 ... 100"
   */
  maxVisiblePages?: number;

  /**
   * 추가 className
   */
  className?: string;
}
