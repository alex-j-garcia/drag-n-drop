"use strict";

(function() {
  let dragArea = document.querySelector(".dnd-container");
  let cells = Array.from(dragArea.querySelectorAll("div"));
  dragArea.addEventListener("mousedown", startDrag);

  let isDragging = false;
  let draggedElement = null;
  function startDrag({target}) {
    let classes = Array.from(target.classList);
    if (classes.includes("dnd-item")) {
      target.classList.toggle("drag-hover");
      isDragging = true;
      draggedElement = target;
      attachListeners();
    }
  }

  function attachListeners() {
    cells.forEach(div => {
      div.addEventListener("mouseenter", toggleHighlight);
      div.addEventListener("mouseleave", toggleHighlight);
    });
    dragArea.addEventListener("mouseup", onDragEnd);
  }

  function onMove({toElement}) {
    if (isDragging) {

      // *** Most crucial step is to have a reference to the original element --> done
      // I want to highlight where the element would be
      // dropped, as a visual cue. Unless the element is
      // the origin of the drag.
      // When the value in toElement changes from one element to the
      // next, the styles need to be removed from the original element
      // and added to the next one.
      // Make the image opaque as it's being dragged with a declaration of opacity: 0.5
    }
  }

  function toggleHighlight({target}) {
    target.classList.toggle("drag-hover");
  }

  function onDragEnd({toElement}) {
    draggedElement.removeAttribute("data-pseudo-content");
    draggedElement.removeAttribute("class");
    draggedElement = null;
    toElement.setAttribute("data-pseudo-content", "🗂️");
    toElement.classList.add("dnd-item");
    toElement.classList.remove("drag-hover");
    dragArea.removeEventListener("mouseup", onDragEnd);
    cells.forEach(div => {
      div.removeEventListener("mouseenter", toggleHighlight);
      div.removeEventListener("mouseleave", toggleHighlight);
    });
  }
})();