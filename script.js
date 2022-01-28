"use strict";

(function() {
  let dragArea = document.querySelector(".dnd-container");
  dragArea.addEventListener("mousedown", startDrag);
  // if the element is of the type we're looking for, add a mousemove event
  // listener to it (this MUST be removed on mouseup otherwise it could have
  // too many listeners attached).
  // The mousemove event's .toElement property indicates where the drag is
  // hovering over.
  let isDragging = false;
  function startDrag({target}) {
    let classes = Array.from(target.classList);
    if (classes.includes("dnd-item")) {
      isDragging = true;
      dragArea.addEventListener("mousemove", onMove);
      dragArea.addEventListener("mouseup", onMouseUp);
    }
  }

  function onMove({toElement}) {
    if (isDragging) {
      // I want to highlight where the element would be
      // dropped, as a visual cue. Unless the element is
      // the origin of the drag.
      // When the value in toElement changes from one element to the
      // next, the styles need to be removed from the original element
      // and added to the next one.
      
    }
  }

  function onMouseUp() {
    dragArea.removeEventListener("mousemove", onMove);
    isDragging = false;
  }
})();