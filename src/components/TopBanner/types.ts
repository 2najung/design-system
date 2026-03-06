import React from 'react';

export interface TopBannerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 배너 이미지 URL */
  src: string;
  /** 배너 클릭 시 이동할 링크 URL */
  link?: string;
  /** 노출 시작 날짜 (ISO 8601 형식) */
  startDate?: string;
  /** 노출 종료 날짜 (ISO 8601 형식) */
  endDate?: string;
  /** 배경 색상 */
  backgroundColor?: string;
}

export interface BannerItem {
  /** 배너 이미지 URL */
  src: string;
  /** 배너 클릭 시 이동할 링크 URL */
  link?: string;
  /** 노출 시작 날짜 (ISO 8601 형식) */
  startDate?: string;
  /** 노출 종료 날짜 (ISO 8601 형식) */
  endDate?: string;
  /** 배경 색상 */
  backgroundColor?: string;
}

export interface TopBannerListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 배너 데이터 배열 */
  banners: BannerItem[];
  /** 배너 전환 간격 (밀리초, 기본값: 4000ms) */
  interval?: number;
}
