export interface MultiSelectOption {
  value: string;
  label: string;
  description?: string;
  leadingContent?: React.ComponentType<{ width?: number; height?: number; color?: string }>;
}

export interface MultiSelectProps {
  /**
   * 컴포넌트 크기
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;

  /**
   * 플레이스홀더 텍스트
   * @default "입력하거나 선택해주세요."
   */
  placeholder?: string;

  /**
   * 선택된 값들
   */
  value?: string[];

  /**
   * 선택 가능한 옵션 목록
   */
  options?: MultiSelectOption[];

  /**
   * 값 변경 시 호출되는 콜백
   */
  onChange?: (value: string[]) => void;

  /**
   * 포커스 시 호출되는 콜백
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 블러 시 호출되는 콜백
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 추가 CSS 클래스명
   */
  className?: string;

  /**
   * 인라인 스타일
   */
  style?: React.CSSProperties;

  /**
   * 언어 설정
   * @default "ko"
   */
  lang?: 'ko' | 'en';

  /**
   * 라인 표시 모드
   * - "single": 한 줄 고정, 가로 스크롤
   * - "multi": 최대 3줄까지 확장, 이후 세로 스크롤
   * @default "multi"
   */
  lineMode?: 'single' | 'multi';
}
