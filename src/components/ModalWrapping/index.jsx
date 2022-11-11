import React, { useCallback, useEffect, useState } from 'react';
import { closeModal, showModal } from './actions';
import BackIcon from '../../assets/svg/backbutton.svg';
import * as S from './styles';

function ModalWrapping() {
  const [contentModal, setContentModal] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleShowModal = useCallback(event => {
    setContentModal(event.detail);
    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('show-modal', handleShowModal);
    window.addEventListener('close-modal', handleCloseModal);

    return () => {
      window.addEventListener('show-modal', handleShowModal);
      window.addEventListener('show-modal', handleCloseModal);
    };
  }, [handleCloseModal, handleShowModal]);

  if (!isOpen) return null;
  return (
    <S.Overlay>
      <S.ContentModalWrapper p={4} minWidth={300} minHeight={200}>
        <S.ButtonCloseWrapper
          onClick={() => handleCloseModal()}
          sx={{ position: 'absolute', right: '32px', top: '32px' }}
        >
          <S.IconModal src={BackIcon} />
        </S.ButtonCloseWrapper>
        {contentModal?.component}
      </S.ContentModalWrapper>
    </S.Overlay>
  );
}

export { ModalWrapping, closeModal, showModal };
