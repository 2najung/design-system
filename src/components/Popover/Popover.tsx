import React from 'react';

import styled, { css } from 'styled-components';

import color from '../../tokens/color';
import fontFamily from '../../tokens/fontFamily';
import fontSize from '../../tokens/fontSize';
import fontWeight from '../../tokens/fontWeight';
import letterSpacing from '../../tokens/letterSpacing';
import lineHeight from '../../tokens/lineHeight';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { PopoverProps, PopoverStyleProps } from './types';

const POINTER_WIDTH = 12;
const POINTER_HEIGHT = 6;

const StyledPopover = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${spacing.gap['gap-1.5']};
  padding: ${spacing.gap['gap-1']} ${spacing.gap['gap-2']};
  background-color: ${color.gray['990']};
  border-radius: ${radius['rounded-1.5']};
  white-space: nowrap;
  width: fit-content;
  font-family: inherit;
`;

const StyledText = styled.span`
  color: ${color.common['100']};
  font-size: ${fontSize.t4[0]};
  font-weight: ${fontWeight['500']};
  line-height: ${lineHeight.t4[0]};
  letter-spacing: ${letterSpacing.md};
`;

const StyledHotkey = styled.span`
  color: ${textColor.light['fg-neutral-assistive']};
  font-size: ${fontSize.t4[0]};
  font-weight: ${fontWeight['500']};
  line-height: ${lineHeight.t4[0]};
  letter-spacing: ${letterSpacing.md};
`;

const StyledPointer = styled.div<PopoverStyleProps>`
  position: absolute;
  width: 0;
  height: 0;

  ${({ $direction }) => {
    switch ($direction) {
      case 'TopCenter':
        return css`
          top: -${POINTER_HEIGHT}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${POINTER_WIDTH / 2}px solid transparent;
          border-right: ${POINTER_WIDTH / 2}px solid transparent;
          border-bottom: ${POINTER_HEIGHT}px solid ${color.gray['990']};
        `;
      case 'TopRight':
        return css`
          top: -${POINTER_HEIGHT}px;
          right: ${spacing.gap['gap-2']};
          border-left: ${POINTER_WIDTH / 2}px solid transparent;
          border-right: ${POINTER_WIDTH / 2}px solid transparent;
          border-bottom: ${POINTER_HEIGHT}px solid ${color.gray['990']};
        `;
      case 'TopLeft':
        return css`
          top: -${POINTER_HEIGHT}px;
          left: ${spacing.gap['gap-2']};
          border-left: ${POINTER_WIDTH / 2}px solid transparent;
          border-right: ${POINTER_WIDTH / 2}px solid transparent;
          border-bottom: ${POINTER_HEIGHT}px solid ${color.gray['990']};
        `;
      case 'BottomCenter':
        return css`
          bottom: -${POINTER_HEIGHT}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${POINTER_WIDTH / 2}px solid transparent;
          border-right: ${POINTER_WIDTH / 2}px solid transparent;
          border-top: ${POINTER_HEIGHT}px solid ${color.gray['990']};
        `;
      case 'BottomRight':
        return css`
          bottom: -${POINTER_HEIGHT}px;
          right: ${spacing.gap['gap-2']};
          border-left: ${POINTER_WIDTH / 2}px solid transparent;
          border-right: ${POINTER_WIDTH / 2}px solid transparent;
          border-top: ${POINTER_HEIGHT}px solid ${color.gray['990']};
        `;
      case 'BottomLeft':
        return css`
          bottom: -${POINTER_HEIGHT}px;
          left: ${spacing.gap['gap-2']};
          border-left: ${POINTER_WIDTH / 2}px solid transparent;
          border-right: ${POINTER_WIDTH / 2}px solid transparent;
          border-top: ${POINTER_HEIGHT}px solid ${color.gray['990']};
        `;
      case 'Right':
        return css`
          right: -${POINTER_HEIGHT}px;
          top: 50%;
          transform: translateY(-50%);
          border-top: ${POINTER_WIDTH / 2}px solid transparent;
          border-bottom: ${POINTER_WIDTH / 2}px solid transparent;
          border-left: ${POINTER_HEIGHT}px solid ${color.gray['990']};
        `;
      case 'Left':
        return css`
          left: -${POINTER_HEIGHT}px;
          top: 50%;
          transform: translateY(-50%);
          border-top: ${POINTER_WIDTH / 2}px solid transparent;
          border-bottom: ${POINTER_WIDTH / 2}px solid transparent;
          border-right: ${POINTER_HEIGHT}px solid ${color.gray['990']};
        `;
      default:
        return css`
          bottom: -${POINTER_HEIGHT}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${POINTER_WIDTH / 2}px solid transparent;
          border-right: ${POINTER_WIDTH / 2}px solid transparent;
          border-top: ${POINTER_HEIGHT}px solid ${color.gray['990']};
        `;
    }
  }}
`;

export const Popover = ({
  direction = 'BottomCenter',
  text,
  hotkey,
  children,
  className,
}: PopoverProps) => {
  return (
    <StyledPopover className={className}>
      <StyledText>{children || text}</StyledText>
      {hotkey && <StyledHotkey>{hotkey}</StyledHotkey>}
      <StyledPointer $direction={direction} />
    </StyledPopover>
  );
};
