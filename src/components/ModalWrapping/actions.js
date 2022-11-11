function showModal(component, dialogProps) {
  dispatchEvent(
    new CustomEvent('show-modal', {
      detail: {
        component,
        dialogProps,
      },
    })
  );
}

function closeModal() {
  dispatchEvent(new CustomEvent('close-modal'));
}

export { showModal, closeModal };
