var zIndexCounter = 1000;

document.querySelectorAll('.draggable').forEach(function(elem) {
  var offsetX, offsetY;

  var handle = elem.querySelector('.draggableHeader');
  if (!handle) return;

  handle.addEventListener('mousedown', function(e) {
    var isDragging = true;

    // Bring this element to front at drag start
    zIndexCounter++;
    elem.style.zIndex = zIndexCounter;

    offsetX = e.clientX - elem.offsetLeft;
    offsetY = e.clientY - elem.offsetTop;

    function onMouseMove(e) {
      if (isDragging) {
        elem.style.left = (e.clientX - offsetX) + 'px';
        elem.style.top = (e.clientY - offsetY) + 'px';
      }
    }

    function onMouseUp() {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    e.preventDefault(); // Prevent text selection
  });
});




// hide/show
function hide(HideID) {
	HideID.style.visibility = "hidden";
}
function show(ShowID) {
	ShowID.style.visibility = "visible";
}