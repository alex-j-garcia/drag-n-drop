"use strict";

(function() {
  let dragArea = document.querySelector(".dnd-container");
  let cells = Array.from(dragArea.querySelectorAll("div"));
  dragArea.addEventListener("mousedown", startDrag);

  let isDragging = false;
  let draggedElement = null;
  function startDrag(event) {
    event.preventDefault();
    let {target} = event;
    let classes = Array.from(target.classList);
    if (classes.includes("dnd-item")) {
      target.classList.toggle("drag-hover");
      isDragging = true;
      draggedElement = target;
      attachListeners();
    }
  }

  function attachListeners() {
    dragArea.addEventListener("mousemove", onMove);
    dragArea.addEventListener("mouseup", onDragEnd);
    cells.forEach(div => {
      div.addEventListener("mouseenter", toggleHighlight);
      div.addEventListener("mouseleave", toggleHighlight);
    });
  }

  function onMove(event) {
    if (isDragging) {
      let shadow = removeShadow() || createShadow();
      shadow.style.left = (event.pageX - 25) + "px";
      shadow.style.top = (event.pageY - 25) + "px";
      dragArea.appendChild(shadow);
    }
  }

  function removeShadow() {
    let shadow = document.querySelector(".shadow");
    if (shadow) dragArea.removeChild(shadow);
  }

  function createShadow() {
    let container = document.createElement("div");
    container.setAttribute("data-pseudo-content", "🗂️");
    container.classList.add("shadow");
    return container;
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

    // Remove listeners.
    dragArea.removeEventListener("mousemove", onMove);
    dragArea.removeEventListener("mouseup", onDragEnd);
    cells.forEach(div => {
      div.removeEventListener("mouseenter", toggleHighlight);
      div.removeEventListener("mouseleave", toggleHighlight);
    });

    removeShadow();
  }
})();