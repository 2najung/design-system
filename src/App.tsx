import React from 'react';

import styled from 'styled-components';

import {
  Badge,
  Chip,
  OutlineButton,
  SolidButton,
  TextButton,
  TopBannerList,
  color,
  typography,
} from '.';

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

function App() {
  const [lang, setLang] = React.useState<'ko' | 'en'>('ko');
  const [showToast, setShowToast] = React.useState(false);
  const [bannerList, setBannerList] = React.useState<BannerData[]>([]);
  const [isBannerLoading, setIsBannerLoading] = React.useState(true);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  React.useEffect(() => {
    fetch('/api/banner_list.json')
      .then((res) => res.json())
      .then((data: BannerData[]) => {
        if (data && data.length > 0) {
          setBannerList(data);
        }
        setIsBannerLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch banner data:', error);
        setIsBannerLoading(false);
      });
  }, []);

  const transformedBanners = React.useMemo(() => {
    return bannerList.map((banner) => ({
      src: banner.kor.image_url,
      link: banner.kor.landing_url,
      startDate: banner.start,
      endDate: banner.end,
      backgroundColor: banner.bg_color,
    }));
  }, [bannerList]);

  // 배너 이미지 프리로드
  React.useEffect(() => {
    if (transformedBanners.length === 0) return;

    transformedBanners.forEach((banner) => {
      const img = new Image();
      img.src = banner.src;
    });
  }, [transformedBanners]);

  return (
    <Page>
      {!isBannerLoading && transformedBanners.length > 0 && (
        <TopBannerList banners={transformedBanners} interval={4000} />
      )}
      <div className='App' style={{ padding: 24 }}>
        <header style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontSize: 28,
              color: '#1a1a1a',
              marginBottom: 16,
            }}
          >
            🎨 Design System 테스트
          </h1>
          <p
            style={{
              fontSize: 16,
              color: '#666666',
            }}
          >
            npm 패키지로 설치된 디자인 시스템 컴포넌트들을 테스트해보세요!
          </p>
          {/* Lang Toggle */}
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setLang('ko')}>Set lang = ko</button>
            <button onClick={() => setLang('en')}>Set lang = en</button>
          </div>
        </header>

        <main>
          {/* Button 섹션 */}
          <section style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontSize: 20,
                marginBottom: 16,
                color: '#333333',
              }}
            >
              Button 컴포넌트
            </h2>
            <div
              style={{
                display: 'flex',
                gap: 16,
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <SolidButton variant='primary' size='small'>
                Small Primary
              </SolidButton>
              <SolidButton variant='primary' size='medium'>
                Medium Primary
              </SolidButton>
              <SolidButton variant='primary' size='large'>
                Large Primary
              </SolidButton>
              <OutlineButton variant='secondary' size='medium'>
                Outline Button
              </OutlineButton>
              <TextButton size='medium'>Text Button</TextButton>
              {/* lang 테스트 (Provider 상속 vs 개별 오버라이드) */}
              <OutlineButton>Inherit ({lang})</OutlineButton>
              <OutlineButton lang='ko'>Override ko</OutlineButton>
              <OutlineButton lang='en'>Override en</OutlineButton>
            </div>
          </section>

          {/* Typography 섹션 (html lang 및 Provider 반응 확인) */}
          <section style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontSize: 20,
                marginBottom: 16,
                color: '#333333',
              }}
            >
              Typography (Display/Title/Heading/Body)
            </h2>
            <div style={{ display: 'grid', gap: 8 }}>
              <TypoDisplay $lang={lang}>Display Sample ({lang})</TypoDisplay>
              <TypoTitle $lang={lang}>Title Sample</TypoTitle>
              <TypoHeading $lang={lang}>Heading Sample</TypoHeading>
              <TypoBody $lang={lang}>Body sample text with current language font.</TypoBody>
              <div style={{ display: 'flex', gap: 8 }}>
                <TypoBody $lang='ko'>Override KO</TypoBody>
                <TypoBody $lang='en'>Override EN</TypoBody>
              </div>
            </div>
          </section>

          {/* Badge 섹션 */}
          <section style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontSize: 20,
                marginBottom: 16,
                color: '#333333',
              }}
            >
              Badge 컴포넌트
            </h2>
            <div
              style={{
                display: 'flex',
                gap: 16,
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Badge variant='positive' type='solid' size='small'>
                성공
              </Badge>
              <Badge variant='negative' type='solid' size='medium'>
                오류
              </Badge>
              <Badge variant='cautionary' type='solid' size='large'>
                경고
              </Badge>
              <Badge variant='info' type='solid' size='medium'>
                정보
              </Badge>
            </div>
          </section>

          {/* Chip 섹션 */}
          <section style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontSize: 20,
                marginBottom: 16,
                color: '#333333',
              }}
            >
              Chip 컴포넌트
            </h2>
            <div
              style={{
                display: 'flex',
                gap: 16,
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              {/* 기존 샘플 유지 + 언어 테스트 샘플 추가 */}
              <Chip type='outline' size='small' state='default'>
                기본 칩(상속 {lang})
              </Chip>
              <Chip type='solid' size='medium' state='focused' lang='ko'>
                칩 ko override
              </Chip>
              <Chip type='outline' size='large' state='hovered' lang='en'>
                Chip en override
              </Chip>
            </div>
          </section>

          {/* 조합 예제 */}
          <section>
            <h2
              style={{
                fontSize: 20,
                marginBottom: 16,
                color: '#333333',
              }}
            >
              컴포넌트 조합 예제
            </h2>
            <div
              style={{
                padding: 24,
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                border: `1px solid #e9ecef`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    color: '#333333',
                    margin: 0,
                  }}
                >
                  상품 카드 예제
                </h3>
                <Badge variant='positive' type='solid' size='small'>
                  재고 있음
                </Badge>
              </div>

              <div style={{ marginBottom: 16 }}>
                <Chip type='outline' size='small' state='default'>
                  카테고리
                </Chip>
                <span style={{ marginLeft: 8 }}>
                  <Chip type='solid' size='small' active>
                    선택됨
                  </Chip>
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  justifyContent: 'flex-end',
                }}
              >
                <OutlineButton variant='secondary' size='medium'>
                  위시리스트
                </OutlineButton>
                <SolidButton variant='primary' size='medium'>
                  구매하기
                </SolidButton>
              </div>
            </div>
          </section>

          {/* Toast 간단 테스트 */}
          <section style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <SolidButton onClick={() => setShowToast(true)}>토스트 보기</SolidButton>
            </div>
            {showToast && (
              <div style={{ marginTop: 12 }}>
                <div
                  style={{
                    padding: 12,
                    background: '#111',
                    color: '#fff',
                    borderRadius: 8,
                    width: 320,
                  }}
                >
                  <div style={{ fontSize: 16, marginBottom: 4 }}>토스트 샘플 ({lang})</div>
                  <div style={{ fontSize: 12, opacity: 0.8 }}>언어 토글로 폰트 비교</div>
                  <div style={{ marginTop: 8 }}>
                    <OutlineButton size='small' onClick={() => setShowToast(false)}>
                      닫기
                    </OutlineButton>
                  </div>
                </div>
              </div>
            )}
          </section>
        </main>
        {/* 스크롤 테스트용 filler */}
        <div style={{ height: 1200 }} />
      </div>
    </Page>
  );
}

const TypoDisplay = styled.div<{ $lang: 'ko' | 'en' }>`
  ${({ $lang }) => typography($lang, 'display3', 'bold')}
`;

const TypoTitle = styled.div<{ $lang: 'ko' | 'en' }>`
  ${({ $lang }) => typography($lang, 'title2', 'semibold')}
`;

const TypoHeading = styled.div<{ $lang: 'ko' | 'en' }>`
  ${({ $lang }) => typography($lang, 'heading2', 'medium')}
`;

const TypoBody = styled.div<{ $lang: 'ko' | 'en' }>`
  ${({ $lang }) => typography($lang, 'body2', 'regular')}
`;

const Page = styled.div`
  background-color: ${color.blue['50']};
  min-height: 100vh;
  padding-top: 64px; /* TopBanner fixed 공간 확보 */
`;

export default App;
