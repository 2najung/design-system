export interface SegmentItemProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface SegmentedControlProps {
  children: React.ReactNode;
  className?: string;
  defaultValue?: number;
  value?: number;
  onChange?: (index: number) => void;
}
