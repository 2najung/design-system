export type CalloutVariant =
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'cautionary'
  | 'info';

export type CalloutSize = 'small' | 'medium';

export interface CalloutProps {
  /**
   * Callout 변형
   */
  variant?: CalloutVariant;

  /**
   * Callout 크기
   */
  size?: CalloutSize;

  /**
   * 제목 텍스트
   */
  title: string;

  /**
   * 설명 텍스트
   */
  description?: string;

  /**
   * Leading Icon 표시 여부
   */
  leadingIcon?: boolean;

  /**
   * Trailing Icon 표시 여부
   */
  trailingIcon?: boolean;

  /**
   * Trailing Icon 클릭 이벤트
   */
  onTrailingIconClick?: () => void;

  /**
   * 추가 className
   */
  className?: string;
}
