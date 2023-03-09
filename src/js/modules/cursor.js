function cursorInit() {
  const cursor = document.getElementById('cursor');
  const activeCursorBg = 'rgba(26, 26, 26, 0.8)';
  const defaultCursorBg = 'rgba(26, 26, 26, 0)';
  if (window.innerWidth > 1440) {
    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseover', hoverCursor);

    function moveCursor(e) {
      gsap.to(cursor, { x: e.clientX, y: e.clientY });
    }

    function hoverCursor(e) {
      if (e.target.classList.contains('__active-cursor')) {
        return gsap.to(cursor, {
          backgroundColor: activeCursorBg,
          scale: 1.3,
        });
      }
      gsap.to(cursor, {
        backgroundColor: defaultCursorBg,
        scale: 1,
      });
    }
    return;
  }
  cursor.style.display = 'none';
}

export default cursorInit;