import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSpeechSynthesis } from 'react-speech-kit';
import { AudioOutlined, LoadingOutlined, SoundOutlined } from '@ant-design/icons';

const HelpTourModal = ({ visible, step, onNext, onCancel }) => {
  const { t, i18n } = useTranslation();
  const { speak, voices, speaking, supported, browserSupportsPolyfills } = useSpeechSynthesis({
    onEnd: () => setIconState('idle'),
  });

  const tourContent = [
    {
      title: t('tour.step1_title'),
      content: t('tour.step1_content'),
    },
    {
      title: t('tour.step2_title'),
      content: t('tour.step2_content'),
    },
    {
      title: t('tour.step3_title'),
      content: t('tour.step3_content'),
    },
    {
      title: t('tour.step4_title'),
      content: t('tour.step4_content'),
    },
  ];

  const customPositions = {
    0: { top: 150, left: -250 },
    1: { top: 200, left: -250 },
    2: { top: 250, left: -250 },
    3: { top: 300, left: -250 },
  };

  const [position, setPosition] = useState(customPositions[step]);
  const [iconState, setIconState] = useState('idle');

  useEffect(() => {
    setPosition(customPositions[step] || { top: 0, left: 0 });
  }, [step]);

  const handleSpeak = () => {
    const language = i18n.language;
    const voice = voices.find(v => v.lang.startsWith(language));

    if (voice) {
      setIconState('loading');
      speak({ text: tourContent[step].content, voice });
      setIconState('speaking');
    }
  };

  const getIcon = () => {
    if (iconState === 'loading') {
      return <LoadingOutlined />;
    }
    if (iconState === 'speaking') {
      return <SoundOutlined />;
    }
    return <AudioOutlined />;
  };

  return (
    <Modal
      visible={visible}
      title={tourContent[step].title}
      onOk={onNext}
      onCancel={onCancel}
      style={{ top: position.top, left: position.left }}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          {t('cancel')}
        </Button>,
        <Button key="next" type="primary" onClick={onNext}>
          {t('next')}
        </Button>,
      ]}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: '"Sora", sans-serif' }}>{tourContent[step].content}</p>
        <Button shape="circle" icon={getIcon()} onClick={handleSpeak} disabled={iconState === 'loading' || iconState === 'speaking'} />
      </div>
    </Modal>
  );
};

export default HelpTourModal;
