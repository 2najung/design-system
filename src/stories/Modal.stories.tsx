import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OutlineButton, SolidButton } from '../components/Button';
import { Dropdown } from '../components/Dropdown';
import { Modal, ModalProps } from '../components/Modal';
import { ToastSystem, toast } from '../components/Toast';

const ModalWithState = ({
  size = 'medium',
  position = 'center',
  open = false,
  onClose,
  title = '제목',
  showCloseButton = true,
  children,
  actions,
  ...props
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        모달 열기
      </button>

      <Modal
        size={size}
        position={position}
        open={isOpen}
        onClose={handleClose}
        title={title}
        showCloseButton={showCloseButton}
        actions={actions}
        {...props}
      >
        {children}
      </Modal>
    </div>
  );
};

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '모달(Modal)은 사용자의 작업 흐름을 잠시 중단하고, 중요한 정보 전달이나 추가 행동을 요구할 때 화면 위에 나타나는 레이어형 컴포넌트로, 사용자가 명확한 결정을 내리거나 메시지를 확인할 수 있도록 안내합니다.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large', 'x-large'],
      description: '모달의 크기를 선택합니다.',
    },
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'center-left',
        'center',
        'center-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: '모달의 위치를 선택합니다.',
    },
    open: {
      control: false,
      description: '모달의 열림/닫힘 상태를 설정합니다.',
    },
    title: {
      control: 'text',
      description: '모달의 제목을 설정합니다.',
    },
    showCloseButton: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부를 설정합니다.',
    },
    onClose: {
      action: 'closed',
      description: '모달이 닫힐 때 호출되는 콜백 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '제목',
    showCloseButton: true,
    actions: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>
    ),
    children: (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        모달 콘텐츠 영역입니다.
        <br />
        여기에 원하는 내용을 넣을 수 있습니다.
      </div>
    ),
  },
};

export const AllSizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <ModalWithState size='x-small' title='X-Small Modal'>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#666',
          }}
        >
          X-Small 크기
        </div>
      </ModalWithState>
      <ModalWithState size='small' title='Small Modal'>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#666',
          }}
        >
          Small 크기
        </div>
      </ModalWithState>
      <ModalWithState size='medium' title='Medium Modal'>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#666',
          }}
        >
          Medium 크기
        </div>
      </ModalWithState>
      <ModalWithState size='large' title='Large Modal'>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#666',
          }}
        >
          Large 크기
        </div>
      </ModalWithState>
      <ModalWithState size='x-large' title='X-Large Modal'>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#666',
          }}
        >
          X-Large 크기 (1200px)
        </div>
      </ModalWithState>
    </div>
  ),
};

export const WithoutActionArea: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '액션 영역 없는 모달',
    showCloseButton: true,
    children: (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        액션 영역이 없는 모달입니다.
        <br />
        닫기 버튼으로만 닫을 수 있습니다.
      </div>
    ),
  },
};

export const ActionAreaWithoutActions: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '액션 영역 있지만 버튼 없음',
    showCloseButton: true,
    // actions 없음 - 액션 영역이 나타나지 않음
    children: (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        actions가 없어서 액션 영역이 나타나지 않습니다.
      </div>
    ),
  },
};

export const WithoutCloseButton: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '닫기 버튼 없는 모달',
    showCloseButton: false,
    children: (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        닫기 버튼이 없는 모달입니다.
        <br />
        배경 클릭으로 닫을 수 있습니다.
      </div>
    ),
  },
};

export const CustomContent: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'large',
    open: false,
    title: '커스텀 콘텐츠',
    showCloseButton: true,
    children: (
      <div>
        <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>상세 정보</h3>
        <p style={{ margin: '0 0 12px 0', color: '#666' }}>
          이 모달은 다양한 콘텐츠를 포함할 수 있습니다.
        </p>
        <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px', color: '#666' }}>
          <li>텍스트</li>
          <li>이미지</li>
          <li>폼 요소</li>
          <li>기타 컴포넌트</li>
        </ul>
        <div
          style={{
            padding: '16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
          }}
        >
          <strong>주의사항:</strong> 모달은 중요한 정보를 전달할 때 사용하세요.
        </div>
      </div>
    ),
  },
};

export const LeftAlignedActions: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '왼쪽 정렬 액션',
    showCloseButton: true,
    actions: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <SolidButton variant='negative'>삭제</SolidButton>
        <OutlineButton variant='secondary'>취소</OutlineButton>
      </div>
    ),
    children: (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        왼쪽 정렬된 액션 버튼들입니다.
      </div>
    ),
  },
};

export const CenterAlignedActions: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '중앙 정렬 액션',
    showCloseButton: true,
    actions: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>
    ),
    children: (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        중앙 정렬된 액션 버튼들입니다.
      </div>
    ),
  },
};

export const RightAlignedActions: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '오른쪽 정렬 액션',
    showCloseButton: true,
    actions: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>
    ),
    children: (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        오른쪽 정렬된 액션 버튼들입니다.
      </div>
    ),
  },
};

export const SingleActionButton: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '단일 액션 버튼',
    showCloseButton: true,
    actions: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <SolidButton variant='positive'>완료</SolidButton>
      </div>
    ),
    children: (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        단일 액션 버튼 예시입니다.
      </div>
    ),
  },
};

export const MultipleActionButtons: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'large',
    open: false,
    title: '다중 액션 버튼',
    showCloseButton: true,
    actions: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <SolidButton variant='negative'>삭제</SolidButton>
        <OutlineButton variant='brand'>임시저장</OutlineButton>
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>저장</SolidButton>
      </div>
    ),
    children: (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}
      >
        여러 개의 액션 버튼 예시입니다.
        <br />
        삭제, 임시저장, 취소, 저장 버튼이 있습니다.
      </div>
    ),
  },
};

export const ModalWithDropdown: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: 'large',
    open: false,
    title: '드롭다운 테스트 모달',
    showCloseButton: true,
    actions: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>저장</SolidButton>
      </div>
    ),
    children: (
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>모달 안에서 드롭다운 테스트</h3>
        <p style={{ margin: '0 0 20px 0', color: '#666' }}>
          아래 드롭다운들이 모달 위에 정상적으로 표시되는지 확인해보세요.
        </p>

        <div style={{ marginBottom: '20px' }}>
          <Dropdown
            type='selector'
            label='일반 드롭다운'
            placeholder='옵션을 선택하세요'
            options={[
              { label: '옵션 1', value: 'option1' },
              { label: '옵션 2', value: 'option2' },
              { label: '옵션 3', value: 'option3' },
              { label: '옵션 4', value: 'option4' },
              { label: '옵션 5', value: 'option5' },
            ]}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Dropdown
            type='combobox'
            label='검색 가능한 드롭다운'
            placeholder='검색하거나 선택하세요'
            options={[
              { label: 'Apple', value: 'apple' },
              { label: 'Banana', value: 'banana' },
              { label: 'Cherry', value: 'cherry' },
              { label: 'Date', value: 'date' },
              { label: 'Elderberry', value: 'elderberry' },
              { label: 'Fig', value: 'fig' },
              { label: 'Grape', value: 'grape' },
              { label: 'Honeydew', value: 'honeydew' },
            ]}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Dropdown
            type='selector'
            label='비활성화된 드롭다운'
            placeholder='비활성화됨'
            disabled={true}
            options={[
              { label: '옵션 1', value: 'option1' },
              { label: '옵션 2', value: 'option2' },
            ]}
          />
        </div>

        <div
          style={{
            padding: '16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
          }}
        >
          <strong>테스트 포인트:</strong>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
            <li>드롭다운 메뉴가 모달 위에 표시되는지</li>
            <li>드롭다운 메뉴가 모달 경계를 벗어나지 않는지</li>
            <li>검색 기능이 정상 작동하는지</li>
            <li>스크롤이 필요한 경우 정상 작동하는지</li>
          </ul>
        </div>
      </div>
    ),
  },
};

export const SimpleModalWithDropdown: Story = {
  render: (args) => {
    const [dropdownValue, setDropdownValue] = useState('');

    return (
      <ModalWithState {...args}>
        <div style={{ padding: '20px' }}>
          <Dropdown
            type='selector'
            label='옵션 선택'
            placeholder='선택하세요'
            value={dropdownValue}
            onChange={setDropdownValue}
            options={[
              { label: '옵션 1', value: 'option1' },
              { label: '옵션 2', value: 'option2' },
              { label: '옵션 3', value: 'option3' },
              { label: '옵션 4', value: 'option4' },
              { label: '옵션 5', value: 'option5' },
            ]}
          />
        </div>
      </ModalWithState>
    );
  },
  args: {
    size: 'medium',
    open: false,
    title: '드롭다운 테스트',
    showCloseButton: true,
    actions: (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>
    ),
  },
};

export const AllPositions: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        padding: '20px',
      }}
    >
      <ModalWithState position='top-left' title='상단 좌'>
        <div style={{ padding: '20px', textAlign: 'center' }}>상단 좌측</div>
      </ModalWithState>
      <ModalWithState position='top-center' title='상단 중앙'>
        <div style={{ padding: '20px', textAlign: 'center' }}>상단 중앙</div>
      </ModalWithState>
      <ModalWithState position='top-right' title='상단 우'>
        <div style={{ padding: '20px', textAlign: 'center' }}>상단 우측</div>
      </ModalWithState>
      <ModalWithState position='center-left' title='중앙 좌'>
        <div style={{ padding: '20px', textAlign: 'center' }}>중앙 좌측</div>
      </ModalWithState>
      <ModalWithState position='center' title='정중앙'>
        <div style={{ padding: '20px', textAlign: 'center' }}>정중앙</div>
      </ModalWithState>
      <ModalWithState position='center-right' title='중앙 우'>
        <div style={{ padding: '20px', textAlign: 'center' }}>중앙 우측</div>
      </ModalWithState>
      <ModalWithState position='bottom-left' title='하단 좌'>
        <div style={{ padding: '20px', textAlign: 'center' }}>하단 좌측</div>
      </ModalWithState>
      <ModalWithState position='bottom-center' title='하단 중앙'>
        <div style={{ padding: '20px', textAlign: 'center' }}>하단 중앙</div>
      </ModalWithState>
      <ModalWithState position='bottom-right' title='하단 우'>
        <div style={{ padding: '20px', textAlign: 'center' }}>하단 우측</div>
      </ModalWithState>
    </div>
  ),
};

export const NestedModals: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [firstModalOpen, setFirstModalOpen] = useState(false);
    const [secondModalOpen, setSecondModalOpen] = useState(false);

    return (
      <>
        <ToastSystem />
        <div>
          <button
            onClick={() => setFirstModalOpen(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            첫 번째 모달 열기
          </button>

          <Modal
            size='large'
            open={firstModalOpen}
            onClose={() => setFirstModalOpen(false)}
            title='첫 번째 모달'
            showCloseButton={true}
            actions={
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                  width: '100%',
                }}
              >
                <OutlineButton variant='secondary' onClick={() => setFirstModalOpen(false)}>
                  닫기
                </OutlineButton>
              </div>
            }
          >
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>첫 번째 모달 콘텐츠</h3>
              <p style={{ margin: '0 0 20px 0', color: '#666' }}>
                이 모달 위에 또 다른 모달을 띄울 수 있습니다.
                <br />
                아래 버튼을 클릭하면 두 번째 모달이 열립니다.
              </p>

              <button
                onClick={() => setSecondModalOpen(true)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                두 번째 모달 열기
              </button>

              <div
                style={{
                  marginTop: '20px',
                  padding: '16px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef',
                }}
              >
                <strong>참고:</strong>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                  <li>두 번째 모달이 첫 번째 모달 위에 표시됩니다</li>
                  <li>각 모달의 배경 클릭으로 닫을 수 있습니다</li>
                  <li>두 번째 모달에서 확인 버튼을 누르면 Toast가 표시됩니다</li>
                  <li>Toast는 모든 Modal 위에 표시됩니다 (z-index: 10000)</li>
                </ul>
              </div>
            </div>
          </Modal>

          <Modal
            size='medium'
            open={secondModalOpen}
            onClose={() => setSecondModalOpen(false)}
            title='두 번째 모달'
            showCloseButton={true}
            actions={
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                  width: '100%',
                }}
              >
                <OutlineButton variant='secondary' onClick={() => setSecondModalOpen(false)}>
                  닫기
                </OutlineButton>
                <SolidButton
                  variant='primary'
                  onClick={() => {
                    toast.success('저장되었습니다', 'Toast가 모든 Modal 위에 표시됩니다');
                    setSecondModalOpen(false);
                  }}
                >
                  확인
                </SolidButton>
              </div>
            }
          >
            <div
              style={{
                padding: '20px',
                backgroundColor: '#fff3cd',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: '0 0 12px 0', color: '#856404' }}>
                <strong>두 번째 모달입니다!</strong>
              </p>
              <p style={{ margin: '0', color: '#856404' }}>
                첫 번째 모달 위에 표시됩니다.
                <br />이 모달을 닫으면 첫 번째 모달이 다시 보입니다.
              </p>
            </div>
          </Modal>
        </div>
      </>
    );
  },
};
