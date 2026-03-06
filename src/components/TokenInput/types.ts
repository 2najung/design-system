export interface TokenInputProps {
  /**
   * 컴포넌트 크기
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * 비활성화 상태
   */
  disabled?: boolean;

  /**
   * placeholder 텍스트
   */
  placeholder?: string;

  /**
   * 토큰(칩) 값 배열
   */
  value?: string[];

  /**
   * 값 변경 시 호출되는 콜백
   */
  onChange?: (value: string[]) => void;

  /**
   * 포커스 이벤트 핸들러
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 블러 이벤트 핸들러
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 추가 className
   */
  className?: string;

  /**
   * 추가 inline 스타일
   */
  style?: React.CSSProperties;

  /**
   * 언어 설정 (타이포그래피 적용)
   */
  lang?: 'ko' | 'en';

  /**
   * 칩 표시 모드
   * - single: 한 줄로 표시, 넘치면 가로 스크롤
   * - multi: 여러 줄로 표시 (최대 3줄), 넘치면 세로 스크롤
   */
  lineMode?: 'single' | 'multi';
}
