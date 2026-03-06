import React from 'react';

import styled from 'styled-components';

import { spacing } from '../../tokens/spacing';
import typography from '../../tokens/typography';
import { IconButton, TextButton } from '../Button';
import { Icons } from '../icons';
import { PaginationProps } from './types';

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      variant = 'compact',
      maxVisiblePages,
      className,
      ...props
    },
    ref
  ) => {
    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    const handlePageClick = (page: number) => {
      onPageChange(page);
    };

    const getPageNumbers = () => {
      if (!maxVisiblePages || totalPages <= maxVisiblePages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const pages: (number | string)[] = [];

      // maxVisiblePages에서 첫/마지막 페이지를 위한 2개를 빼면 중간에 표시할 수 있는 개수
      const sidePages = maxVisiblePages - 2; // 첫 페이지(1개) + 마지막 페이지(1개)를 제외
      const halfSide = Math.floor(sidePages / 2);

      let showLeftEllipsis = false;
      let showRightEllipsis = false;
      let startPage = 1;
      let endPage = totalPages;

      // 현재 페이지가 앞쪽에 있을 때
      if (currentPage <= halfSide + 2) {
        startPage = 1;
        endPage = maxVisiblePages - 1; // 마지막 페이지를 위한 자리 확보
        showRightEllipsis = endPage < totalPages - 1;
      }
      // 현재 페이지가 뒤쪽에 있을 때
      else if (currentPage >= totalPages - halfSide - 1) {
        startPage = totalPages - maxVisiblePages + 2; // 첫 페이지를 위한 자리 확보
        endPage = totalPages;
        showLeftEllipsis = startPage > 2;
      }
      // 현재 페이지가 중간에 있을 때
      else {
        startPage = currentPage - halfSide;
        endPage = currentPage + halfSide;
        showLeftEllipsis = startPage > 2;
        showRightEllipsis = endPage < totalPages - 1;
      }

      // 첫 페이지
      if (showLeftEllipsis) {
        pages.push(1);
        pages.push('...');
      }

      // 중간 페이지들
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // 마지막 페이지
      if (showRightEllipsis) {
        pages.push('...');
        pages.push(totalPages);
      }

      return pages;
    };

    const renderCompactVariant = () => {
      const pages = getPageNumbers();

      return (
        <>
          <IconButton
            type='solid'
            variant='secondary'
            size='small'
            onClick={handlePrevious}
            disabled={currentPage === 1}
            icon={Icons.IconChevronLeftOutline16}
          />

          <PagesWrapper>
            {pages.map((page, index) => {
              if (page === '...') {
                return (
                  <Ellipsis key={`ellipsis-${index}`}>
                    <Icons.IconMoreOutline16 />
                  </Ellipsis>
                );
              }
              return (
                <TextButton
                  key={page}
                  variant='secondary'
                  size='small'
                  onClick={() => handlePageClick(page as number)}
                >
                  {page}
                </TextButton>
              );
            })}
          </PagesWrapper>

          <IconButton
            type='solid'
            variant='secondary'
            size='small'
            onClick={handleNext}
            disabled={currentPage === totalPages}
            icon={Icons.IconChevronRightOutline16}
          />
        </>
      );
    };

    const renderMinimizeVariant = () => {
      return (
        <>
          <IconButton
            type='solid'
            variant='secondary'
            size='small'
            onClick={handlePrevious}
            disabled={currentPage === 1}
            icon={Icons.IconChevronLeftOutline16}
          />

          <PageContent>
            {currentPage}/{totalPages}
          </PageContent>

          <IconButton
            type='solid'
            variant='secondary'
            size='small'
            onClick={handleNext}
            disabled={currentPage === totalPages}
            icon={Icons.IconChevronRightOutline16}
          />
        </>
      );
    };

    return (
      <PaginationContainer ref={ref} className={className} $variant={variant} {...props}>
        {variant === 'compact' ? renderCompactVariant() : renderMinimizeVariant()}
      </PaginationContainer>
    );
  }
);

Pagination.displayName = 'Pagination';

const PaginationContainer = styled.div<{ $variant: 'compact' | 'minimize' }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $variant }) => ($variant === 'minimize' ? spacing.gap['gap-3'] : spacing.gap['gap-5'])};
`;

const PagesWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.gap['gap-0']};
`;

const PageContent = styled.span`
  display: inline-flex;
  align-items: center;
  ${typography(undefined, 'body2', 'medium')}
`;

const Ellipsis = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  width: 32px;
  height: 32px;
  svg {
    width: 16px;
    height: 16px;
  }
`;
