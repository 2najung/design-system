import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import BannerImage from '../assets/images/banner_sample.svg';
import { TopBanner, TopBannerList } from '../components/TopBanner';

// S3 JSON 데이터 타입 정의
interface BannerData {
  start: string;
  end: string;
  env: string;
  bg_color: string;
  channels: string[];
  kor: {
    image_url: string;
    landing_url: string;
  };
  eng: {
    image_url: string;
    landing_url: string;
  };
}

const meta = {
  title: 'Components/Data Display/TopBanner',
  component: TopBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'TopBanner는 페이지 상단에 표시되는 띠배너 컴포넌트입니다. API로 받은 이미지를 동적으로 표시하고, 날짜 범위에 따라 자동으로 노출/숨김 처리됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: '배너 이미지 URL',
    },
    link: {
      control: 'text',
      description: '배너 클릭 시 이동할 URL',
    },
    startDate: {
      control: 'text',
      description: '노출 시작 날짜 (ISO 8601 형식)',
    },
    endDate: {
      control: 'text',
      description: '노출 종료 날짜 (ISO 8601 형식)',
    },
  },
} satisfies Meta<typeof TopBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: BannerImage,
    link: 'https://example.com',
  },
};

export const WithDateRange: Story = {
  args: {
    src: BannerImage,
    link: 'https://example.com',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
  },
  parameters: {
    docs: {
      description: {
        story:
          'startDate와 endDate를 설정하여 특정 기간에만 배너를 표시할 수 있습니다. 현재 날짜가 범위를 벗어나면 배너가 렌더링되지 않습니다.',
      },
    },
  },
};

// TopBannerList 예시
export const ListMultiple = {
  render: () => {
    const [bannerList, setBannerList] = useState<BannerData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const language = 'kor';

    useEffect(() => {
      fetch('/api/banner_list.json')
        .then((res) => res.json())
        .then((data: BannerData[]) => {
          if (data && data.length > 0) {
            setBannerList(data);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Failed to fetch banner data:', error);
          setIsLoading(false);
        });
    }, []);

    if (isLoading) {
      return <div style={{ padding: '20px', textAlign: 'center' }}>배너 데이터 로딩 중...</div>;
    }

    if (bannerList.length === 0) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>배너 데이터를 불러올 수 없습니다</div>
      );
    }

    const transformedBanners = bannerList.map((banner) => ({
      src: banner[language].image_url,
      link: banner[language].landing_url,
      startDate: banner.start,
      endDate: banner.end,
      backgroundColor: banner.bg_color,
    }));

    return <TopBannerList banners={transformedBanners} interval={4000} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'S3에서 배너 데이터를 불러와 TopBannerList로 여러 배너를 표시합니다. 자동으로 4초마다 전환됩니다.',
      },
    },
  },
};

export const ListWithDateFilter = {
  render: () => {
    const [bannerList, setBannerList] = useState<BannerData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const language = 'kor';

    useEffect(() => {
      fetch('/api/banner_list.json')
        .then((res) => res.json())
        .then((data: BannerData[]) => {
          if (data && data.length > 0) {
            setBannerList(data);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Failed to fetch banner data:', error);
          setIsLoading(false);
        });
    }, []);

    if (isLoading) {
      return <div style={{ padding: '20px', textAlign: 'center' }}>배너 데이터 로딩 중...</div>;
    }

    if (bannerList.length === 0) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>배너 데이터를 불러올 수 없습니다</div>
      );
    }

    const transformedBanners = bannerList.map((banner) => ({
      src: banner[language].image_url,
      link: banner[language].landing_url,
      startDate: banner.start,
      endDate: banner.end,
      backgroundColor: banner.bg_color,
    }));

    return <TopBannerList banners={transformedBanners} interval={4000} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'S3에서 배너 데이터를 불러와 TopBannerList로 표시합니다. TopBannerList는 내부에서 날짜 필터링을 자동으로 처리하며, 현재 날짜가 범위를 벗어난 배너는 자동으로 제외되어 유효한 배너들만 순환합니다.',
      },
    },
  },
};

export const S3JsonExample = {
  render: () => {
    const [bannerList, setBannerList] = useState<BannerData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const language = 'kor';

    useEffect(() => {
      // S3 JSON 데이터 fetch
      fetch('/api/banner_list.json')
        .then((res) => res.json())
        .then((data: BannerData[]) => {
          if (data && data.length > 0) {
            setBannerList(data);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Failed to fetch banner data:', error);
          setIsLoading(false);
        });
    }, []);

    if (isLoading) {
      return <div style={{ padding: '20px', textAlign: 'center' }}>배너 데이터 로딩 중...</div>;
    }

    if (bannerList.length === 0) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>배너 데이터를 불러올 수 없습니다</div>
      );
    }

    // JSON 데이터를 TopBannerList가 받을 수 있는 형태로 변환
    const transformedBanners = bannerList.map((banner) => ({
      src: banner[language].image_url,
      link: banner[language].landing_url,
      startDate: banner.start,
      endDate: banner.end,
      backgroundColor: banner.bg_color,
    }));

    return <TopBannerList banners={transformedBanners} interval={4000} />;
  },
  parameters: {
    docs: {
      description: {
        story: `
S3 JSON 데이터를 실제로 fetch하여 표시하는 예시입니다.

**JSON 구조:**
- \`start\`, \`end\`: 노출 기간 (ISO 8601 형식)
- \`channels\`: 노출할 채널 목록
- \`env\`: 환경 (prod, dev, staging)
- \`kor\`, \`eng\`: 언어별 이미지 URL과 랜딩 URL

**사용 방법:**
1. S3에서 JSON 데이터 fetch
2. 채널/환경 필터링 (각 프로젝트에서 처리)
3. 언어 선택 후 \`{ src, link, startDate, endDate }\` 형태로 변환
4. TopBannerList에 전달하면 자동으로 날짜 필터링 + 4초마다 전환

**특징:**
- TopBannerList가 날짜 필터링과 자동 전환을 모두 처리
- 프로젝트는 데이터 fetch와 변환만 하면 됨
        `,
      },
    },
  },
};
