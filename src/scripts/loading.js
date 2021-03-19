const outroLoading = (doc, loadElement) => {
  const hideLoading = () => {
    loadElement.style.display = 'none';
  };
  doc.addEventListener('DOMContentLoaded', hideLoading);
};

export default outroLoading;
