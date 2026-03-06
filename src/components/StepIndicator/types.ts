export type StepStatus = 'Inactive' | 'Active' | 'Complete';
export type StepOrientation = 'vertical' | 'horizontal';

export interface StepItem {
  label?: string;
  status?: StepStatus;
}

export interface StepIndicatorProps {
  count: number;
  currentStep: number;
  steps?: StepItem[];
  showLabel?: boolean;
  orientation?: StepOrientation;
  className?: string;
}

export interface ProgressTrackerProps {
  status: StepStatus;
  step: number;
  label?: string;
  showLabel?: boolean;
  orientation?: StepOrientation;
}

export interface DividerProps {
  status: StepStatus;
  orientation?: StepOrientation;
}
