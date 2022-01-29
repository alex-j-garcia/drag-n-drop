"use strict";

(function() {
  let dragArea = document.querySelector(".dnd-container");
  dragArea.addEventListener("mousedown", startDrag);
  // The mousemove event's .toElement property indicates where the drag is
  // hovering over.
  // let isDragging = false;
  let draggedElement = null;
  function startDrag({target}) {
    dragArea.addEventListener("mouseup", onDragEnd)
    let classes = Array.from(target.classList);
    if (classes.includes("dnd-item")) {
      // isDragging = true;
      draggedElement = target;
      // attachListeners();
    }
  }

  // function attachListeners() {
  //   let cells = Array.from(dragArea.querySelectorAll("div"));
  //   let openCells = cells.filter(div => !div.classList.length);
  //   openCells.forEach(div => {
  //     div.addEventListener("onmouseenter", toggleHighlight);
  //     div.addEventListener("onmouseleave", toggleHighlight);
  //   });
  //   dragArea.addEventListener("mousemove", onMove);
  //   dragArea.addEventListener("mouseup", onMouseUp);
  // }

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
    if (target != draggedElement) {
      hoveredElement.classList.toggle("drag-hover");
    }
  }

  function onDragEnd({toElement}) {
    draggedElement.removeAttribute("data-pseudo-content");
    draggedElement.removeAttribute("class");
    toElement.setAttribute("data-pseudo-content", "🗂️");
    toElement.classList.add("dnd-item");
    draggedElement = null;
    dragArea.removeEventListener("mouseup", onDragEnd);
  }
})();