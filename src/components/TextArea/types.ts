export interface TextAreaProps {
  /**
   * Label 텍스트
   */
  label?: string;

  /**
   * Label 타입
   */
  labelType?: 'default' | 'required' | 'optional';

  /**
   * Description 텍스트
   */
  description?: string;

  /**
   * Description 앞 아이콘 표시 여부
   */
  descriptionLeadingIcon?: boolean;

  /**
   * 상태
   */
  status?: 'default' | 'error' | 'success';

  /**
   * 비활성화 여부
   */
  disabled?: boolean;

  /**
   * 활성화 상태
   */
  active?: boolean;

  /**
   * 포커스 상태
   */
  focused?: boolean;

  /**
   * placeholder
   */
  placeholder?: string;

  /**
   * 값
   */
  value?: string;

  /**
   * 글자수 카운터 표시 여부
   */
  showCharacterCounter?: boolean;

  /**
   * 최대 글자수
   */
  maxCount?: number;

  /**
   * 최대 높이 (px)
   */
  maxHeight?: number;

  /**
   * 변경 이벤트
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /**
   * 포커스 이벤트
   */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

  /**
   * 블러 이벤트
   */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

  /**
   * 추가 className
   */
  className?: string;

  /**
   * 언어 설정
   */
  lang?: 'ko' | 'en';
}
