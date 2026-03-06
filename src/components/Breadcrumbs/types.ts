export type BreadcrumbState = 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled';

export interface BreadcrumbItemProps {
  /**
   * 브레드크럼 아이템의 텍스트
   */
  children: React.ReactNode;

  /**
   * 클릭 시 실행될 함수
   */
  onClick?: () => void;

  /**
   * 활성화 상태 (현재 페이지)
   */
  active?: boolean;

  /**
   * 비활성화 상태
   */
  disabled?: boolean;

  /**
   * 앞쪽 아이콘
   */
  leadingIcon?: React.ReactNode;

  /**
   * 뒤쪽 아이콘
   */
  trailingIcon?: React.ReactNode;

  /**
   * 추가 className
   */
  className?: string;
}

export interface BreadcrumbsProps {
  /**
   * BreadcrumbItem 컴포넌트들
   */
  children: React.ReactNode;

  /**
   * 추가 className
   */
  className?: string;

  /**
   * 추가 스타일
   */
  style?: React.CSSProperties;
}
