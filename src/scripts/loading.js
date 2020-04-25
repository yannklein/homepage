const outroLoading = (doc, loadElement) => {
  doc.addEventListener('DOMContentLoaded', () => {
    loadElement.style.display = 'none';
  });
  setTimeout(() => {
    loadElement.style.display = 'none';
  }, 3000);
};

export default outroLoading;
