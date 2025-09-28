const row1 = document.querySelector(".row-1");
const row2 = document.querySelector(".row-2");

// create items dynamically
const items = Array.from({ length: 10 }, (_, i) => {
  const div = document.createElement("div");
  div.className = "item";
  div.textContent = i + 1;
  return div;
});

// distribute items evenly
items.slice(0, items.length / 2).forEach(el => row1.appendChild(el));
items.slice(items.length / 2).forEach(el => row2.appendChild(el));

let startX, activeRow, deltaX = 0;

function startDrag(e, row) {
  startX = e.pageX || e.touches[0].pageX;
  activeRow = row;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchmove", onDrag);
  document.addEventListener("touchend", endDrag);
}

function onDrag(e) {
  const x = e.pageX || e.touches[0].pageX;
  deltaX = x - startX;

  if (activeRow === 1) {
    row1.style.transform = `translateX(${deltaX}px)`;
    row2.style.transform = `translateX(${-deltaX}px)`;
  } else {
    row2.style.transform = `translateX(${deltaX}px)`;
    row1.style.transform = `translateX(${-deltaX}px)`;
  }
}

function endDrag() {
  // reset transform smoothly
  row1.style.transition = row2.style.transition = "transform 0.3s ease-out";
  row1.style.transform = "translateX(0)";
  row2.style.transform = "translateX(0)";

  // conveyor belt handoff logic
  if (deltaX > 100) {
    // move last item of active row to the start of the other row
    if (activeRow === 1) {
      const last = row1.lastElementChild;
      row2.insertBefore(last, row2.firstChild);
    } else {
      const last = row2.lastElementChild;
      row1.insertBefore(last, row1.firstChild);
    }
  } else if (deltaX < -100) {
    // move first item of active row to the end of the other row
    if (activeRow === 1) {
      const first = row1.firstElementChild;
      row2.appendChild(first);
    } else {
      const first = row2.firstElementChild;
      row1.appendChild(first);
    }
  }

  deltaX = 0;

  // cleanup
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", endDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("touchend", endDrag);

  setTimeout(() => {
    row1.style.transition = row2.style.transition = "none";
  }, 300);
}

// attach drag events
row1.addEventListener("mousedown", e => startDrag(e, 1));
row1.addEventListener("touchstart", e => startDrag(e, 1));

row2.addEventListener("mousedown", e => startDrag(e, 2));
row2.addEventListener("touchstart", e => startDrag(e, 2));
