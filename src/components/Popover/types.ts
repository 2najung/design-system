export type PopoverDirection =
  | 'TopCenter'
  | 'TopRight'
  | 'TopLeft'
  | 'BottomCenter'
  | 'BottomRight'
  | 'BottomLeft'
  | 'Right'
  | 'Left';

export interface PopoverProps {
  direction?: PopoverDirection;
  text: string;
  hotkey?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface PopoverStyleProps {
  $direction: PopoverDirection;
}
