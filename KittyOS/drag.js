let zIndexCounter = 1000;

document.querySelectorAll('.draggable').forEach(function(elem) {
  let offsetX, offsetY;

  const handle = elem.querySelector('.draggableHeader');
  if (!handle) return;

  // ðŸŸ¡ 1. z-index listener on the full tab
  elem.addEventListener('mousedown', function() {
    zIndexCounter++;
    elem.style.zIndex = zIndexCounter;
  });

  // ðŸŸ¢ 2. drag listener stays on the header only
  handle.addEventListener('mousedown', function(e) {
    offsetX = e.clientX - elem.offsetLeft;
    offsetY = e.clientY - elem.offsetTop;

    function onMouseMove(e) {
      elem.style.left = (e.clientX - offsetX) + 'px';
      elem.style.top = (e.clientY - offsetY) + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    // prevent text selection
    e.preventDefault();
    e.stopPropagation(); // ðŸ›‘ Prevent this from also triggering the elem's mousedown
  });
});


// TERMINAL JAVASCRIPT

var i = 0;
var txt = '>>KittyCorp KittyOS [v1.5.200]\n>(C) Copyrigtht of KittyCorp 1423-2025\n\n>Initiallising BOOT_mcC.s files . . . done\n>Initiallising BOOT.ico files . . . done\n>Packaging BOOT parent and children . . . done\n>Spacing PaulsComputer . . . done\n>Reading and Creating KittyPreferences.prf files . . . done\n>Enabling offensive ICBM countermeasures . . . failed <!>\nWelcome to . . . ';
var speed = 15;

function typeWriter() {
  if (i < txt.length) {
    let char = txt.charAt(i);
    if (char === '\n') {
      document.getElementById("terminalOutput").innerHTML += '<br>';
    } else {
      document.getElementById("terminalOutput").innerHTML += char;
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  typeWriter();
});



// SHOW/HIDE TABS
function Hide(HideID) 
{
  HideID.style.visibility = "hidden"; 
}

function Show(ShowID)
{
	ShowID.style.visibility = "visible";
}

// DELAYED VISIBILITY

document.addEventListener('DOMContentLoaded', function() {
	const delayedBg = document.getElementById('background');
	const delayedButt = document.getElementById('butt');
	const delayedPRE = document.querySelector('.ascii-art')
	const delayedHead = document.getElementById('Heading');
	const delayTime = 7400;

  setTimeout(() => {
    // Option 2: Change visibility property
	  delayedBg.style.visibility = 'visible';
	  delayedBg.style.opacity = "1";
	  delayedButt.style.visibility = 'visible';
	  delayedButt.style.opacity = "1";
	  delayedPRE.style.visibility = 'visible';
	  delayedPRE.style.opacity = "1";
	  delayedHead.style.visibility = 'visible';
	  delayedHead.style.opacity = "1";
  }, delayTime);
});



// CURRENT TIME / DOODADS
function updateTime() {
  const now = new Date(); // Get the current date and time
  const formattedTime = now.toLocaleTimeString(); // Format the time for display

  document.getElementById('current-time').textContent = formattedTime; // Update the HTML element
}

// Call updateTime initially to display the time immediately
updateTime(); 

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000); 

