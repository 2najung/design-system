import type { Meta, StoryObj } from '@storybook/react';

const Introduction = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Design System</h1>
        <p style={styles.subtitle}>
          일관된 사용자 경험을 위한 React 컴포넌트 라이브러리.
          <br />
          디자인 토큰 기반의 체계적인 스타일 시스템을 제공합니다.
        </p>
        <div style={styles.badges}>
          {['React', 'TypeScript', 'Styled Components', 'Responsive'].map((label) => (
            <span key={label} style={styles.badge}>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div style={styles.divider} />

      <div style={styles.stats}>
        {[
          { number: '38+', label: 'Components' },
          { number: '14', label: 'Color Palettes' },
          { number: '16', label: 'Typography Styles' },
          { number: '100%', label: 'TypeScript' },
        ].map((stat) => (
          <div key={stat.label} style={styles.stat}>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={styles.divider} />

      <p style={styles.sectionTitle}>GETTING STARTED</p>

      <div style={styles.install}>
        <div>
          <span style={styles.installComment}># Install</span>
        </div>
        <div>
          <span style={styles.installCmd}>npm install</span> design-system
        </div>
        <br />
        <div>
          <span style={styles.installComment}># Usage</span>
        </div>
        <div>
          <span style={styles.installCmd}>import</span>
          {" { SolidButton, color } "}
          <span style={styles.installCmd}>from</span> 'design-system';
        </div>
      </div>

      <div style={styles.divider} />

      <p style={styles.sectionTitle}>WHAT'S INSIDE</p>

      <div style={styles.grid}>
        <Card
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l2 2 4-4" />
            </svg>
          }
          iconBg="#eff6ff"
          iconColor="#2b7fff"
          title="Foundation"
          description="Color, Typography, Spacing, Radius 등 디자인 토큰을 탐색합니다."
        />
        <Card
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          }
          iconBg="#f3e8ff"
          iconColor="#ad46ff"
          title="Components"
          description="Button, Modal, Input 등 38개 이상의 UI 컴포넌트를 확인합니다."
        />
        <Card
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          }
          iconBg="#ecfdf5"
          iconColor="#00c950"
          title="Design Tokens"
          description="14개 컬러 팔레트와 반응형 타이포그래피 시스템을 제공합니다."
        />
        <Card
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h10" />
            </svg>
          }
          iconBg="#fff7ed"
          iconColor="#ff6900"
          title="Responsive"
          description="Desktop, Tablet, Mobile 3단계 브레이크포인트를 지원합니다."
        />
      </div>

      <div style={styles.divider} />

      <div style={styles.footer}>
        Built with React + TypeScript + Styled Components
        <br />
        <a
          href="https://github.com/2najung/design-system"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.footerLink}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const Card = ({
  icon,
  iconBg,
  iconColor,
  title,
  description,
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}) => (
  <div
    style={styles.card}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = '#cacccf';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = '#e6e7e9';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <div style={{ ...styles.cardIcon, background: iconBg, color: iconColor }}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{description}</p>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    maxWidth: 720,
    margin: '0 auto',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  hero: {
    textAlign: 'center' as const,
    padding: '64px 0 48px',
  },
  title: {
    fontSize: 48,
    fontWeight: 700,
    letterSpacing: -1.2,
    margin: '0 0 16px',
    background: 'linear-gradient(135deg, #2b7fff 0%, #ad46ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: 18,
    color: '#525459',
    lineHeight: 1.6,
    margin: 0,
  },
  badges: {
    display: 'flex',
    gap: 8,
    justifyContent: 'center',
    marginTop: 24,
    flexWrap: 'wrap' as const,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 14px',
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 500,
    background: '#f0f0f2',
    color: '#525459',
  },
  divider: {
    height: 1,
    background: '#e6e7e9',
    margin: '48px 0',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 16,
    textAlign: 'center' as const,
  },
  stat: {
    padding: '20px 0',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 700,
    color: '#171719',
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 13,
    color: '#8f9298',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 1.2,
    color: '#8f9298',
    margin: '0 0 20px',
  },
  install: {
    background: '#171719',
    borderRadius: 12,
    padding: '20px 24px',
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    fontSize: 14,
    color: '#e6e7e9',
    overflowX: 'auto' as const,
  },
  installComment: {
    color: '#7b7e85',
  },
  installCmd: {
    color: '#5ee9b5',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 16,
  },
  card: {
    border: '1px solid #e6e7e9',
    borderRadius: 12,
    padding: 24,
    transition: 'all 0.2s ease',
    cursor: 'default',
  },
  cardIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
    margin: '0 0 6px',
    color: '#171719',
  },
  cardDesc: {
    fontSize: 14,
    color: '#7b7e85',
    margin: 0,
    lineHeight: 1.5,
  },
  footer: {
    textAlign: 'center' as const,
    padding: '32px 0 16px',
    color: '#8f9298',
    fontSize: 13,
  },
  footerLink: {
    color: '#2b7fff',
    textDecoration: 'none',
  },
};

const meta = {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
} satisfies Meta<typeof Introduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
