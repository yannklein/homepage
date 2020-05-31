const outroLoading = (doc, loadElement) => {
  const hideLoading = () => {
    loadElement.style.display = 'none';
  };

  setTimeout(hideLoading, 5000);
  doc.addEventListener('DOMContentLoaded', hideLoading);
};

export default outroLoading;
