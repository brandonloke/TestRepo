/* window.onload = function() {
   startScrolling;
   } */

document.addEventListener('DOMContentLoaded', function() {
  const itemList = document.getElementById('item-list');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let scrollTimeout;

  function startScrolling() {
    itemList.scrollLeft += 15; // Change the value to control scroll speed
    scrollTimeout = setTimeout(startScrolling, 50); // Change the timeout for smoother or faster scrolling
  }

  function stopScrolling() {
    clearTimeout(scrollTimeout);
  }

  itemList.addEventListener('mouseover', stopScrolling);
  itemList.addEventListener('mouseout', startScrolling);

  prevBtn.addEventListener('mouseover', function() {
    itemList.scrollLeft -= 10; // Change the value to control scroll distance on hover
    stopScrolling();
  });

  prevBtn.addEventListener('mouseout', startScrolling);

  nextBtn.addEventListener('mouseover', function() {
    itemList.scrollLeft += 10; // Change the value to control scroll distance on hover
    stopScrolling();
  });

  nextBtn.addEventListener('mouseout', startScrolling);

  startScrolling(); // Start scrolling when the page loads
});
