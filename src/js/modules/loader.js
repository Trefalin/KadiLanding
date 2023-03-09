function loader(status) {
  const loader = document.getElementById('loader');
  if (!status) {
    return loader.classList.add('__active');
  }
  loader.classList.remove('__active');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 0.3)
}

export default loader;