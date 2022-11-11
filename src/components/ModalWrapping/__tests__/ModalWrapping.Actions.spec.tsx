import { rtl } from '@/app/tests/utils';
import { ModalWrapping } from '..';
import { closeModal, showModal } from '../actions';

describe('ModalWrapping', () => {
  const openModalMessage = 'The Modal Opened!!';

  it('when using showModal function passing a jsx, it should be displayed in Modal', () => {
    rtl.render(<ModalWrapping />);

    rtl.act(() => {
      showModal(<h1>{openModalMessage}</h1>);
    });

    expect(rtl.screen.getByText(openModalMessage)).toBeInTheDocument();
  });

  it('When the close modal function is executed, the Modal must be the closed', () => {
    rtl.render(<ModalWrapping />);

    rtl.act(() => {
      showModal(<h1>{openModalMessage}</h1>);
    });

    const modalMessage = rtl.screen.getByText(openModalMessage);

    rtl.act(() => {
      closeModal();
    });

    expect(modalMessage).not.toBeVisible();
  });
});
