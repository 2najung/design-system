import React from 'react';

import styled from 'styled-components';

import { ProgressTracker } from './ProgressTracker';
import { StepDivider } from './StepDivider';
import { StepIndicatorProps, StepStatus } from './types';

export const StepIndicator = ({
  count,
  currentStep,
  steps,
  showLabel = false,
  orientation = 'vertical',
  className,
}: StepIndicatorProps) => {
  const getStepStatus = (stepIndex: number): StepStatus => {
    if (stepIndex < currentStep) return 'Complete';
    if (stepIndex === currentStep) return 'Active';
    return 'Inactive';
  };

  const renderSteps = () => {
    const stepElements = [];

    for (let i = 1; i <= count; i++) {
      const status = getStepStatus(i);
      const stepData = steps?.[i - 1];
      const label = stepData?.label || `단계`;

      stepElements.push(
        <StyledStepWrapper key={i} $orientation={orientation}>
          <ProgressTracker
            status={status}
            step={i}
            label={label}
            showLabel={showLabel}
            orientation={orientation}
          />
          {i < count && <StepDivider status={status} orientation={orientation} />}
        </StyledStepWrapper>
      );
    }

    return stepElements;
  };

  return (
    <StyledStepIndicator className={className} $orientation={orientation}>
      <StyledStepContainer showLabel={showLabel}>{renderSteps()}</StyledStepContainer>
    </StyledStepIndicator>
  );
};

const StyledStepIndicator = styled.div<{ $orientation: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: ${({ $orientation }) => ($orientation === 'horizontal' ? '400px' : 'auto')};
`;

const StyledStepContainer = styled.div<{ showLabel: boolean }>`
  display: flex;
  align-items: ${({ showLabel }) => (showLabel ? 'flex-start' : 'center')};
  gap: 0; // 트래커-디바이더 간격을 0으로 고정
  width: 100%;
`;

const StyledStepWrapper = styled.div<{ $orientation: string }>`
  display: flex;
  align-items: flex-start;
  gap: 0;
  flex: 1;

  &:last-child {
    flex: 0;
  }
`;
