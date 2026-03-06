import React, { useEffect, useMemo, useState } from 'react';

import styled from 'styled-components';

import color from '../../tokens/color';
import { IconCloseOutline24 } from '../icons';
import { TopBannerListProps } from './types';

const textColorByHex = (hexColor: string): string => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#FFFFFF';
};

const TopBannerList: React.FC<TopBannerListProps> = ({ banners, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClosed, setIsClosed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClosed(true);
  };

  // 날짜 범위에 맞는 배너들만 필터링
  const validBanners = useMemo(() => {
    const now = new Date();
    return banners.filter((banner) => {
      if (banner.startDate) {
        const start = new Date(banner.startDate);
        if (now < start) return false;
      }
      if (banner.endDate) {
        const end = new Date(banner.endDate);
        if (now > end) return false;
      }
      return true;
    });
  }, [banners]);

  // validBanners가 변경되면 currentIndex 리셋
  useEffect(() => {
    setCurrentIndex(0);
  }, [validBanners]);

  // 배너 자동 전환
  useEffect(() => {
    if (validBanners.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % validBanners.length);
        setIsTransitioning(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [validBanners.length, interval]);

  // 유효한 배너가 없거나 닫혔으면 렌더링하지 않음
  if (validBanners.length === 0 || isClosed) {
    return null;
  }

  const currentBanner = validBanners[currentIndex];

  const handleClick = () => {
    if (currentBanner.link) {
      window.open(currentBanner.link, '_blank', 'noopener,noreferrer');
    }
  };

  const backgroundColor = currentBanner.backgroundColor || color.gray['950'];
  const closeButtonColor = textColorByHex(backgroundColor);

  return (
    <BannerContainer
      $hasLink={!!currentBanner.link}
      $backgroundColor={backgroundColor}
      $isTransitioning={isTransitioning}
      onClick={currentBanner.link ? handleClick : undefined}
    >
      <BannerImage src={currentBanner.src} alt='배너' />
      <CloseButton $color={closeButtonColor} onClick={handleClose} aria-label='배너 닫기'>
        <IconCloseOutline24 />
      </CloseButton>
    </BannerContainer>
  );
};

const BannerContainer = styled.div<{
  $hasLink: boolean;
  $backgroundColor: string;
  $isTransitioning: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  cursor: ${({ $hasLink }) => ($hasLink ? 'pointer' : 'default')};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const BannerImage = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;

const CloseButton = styled.button<{ $color: string }>`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
  transition: opacity 0.2s;
  z-index: 10;

  &:hover {
    opacity: 0.7;
  }
`;

TopBannerList.displayName = 'TopBannerList';

export { TopBannerList };
