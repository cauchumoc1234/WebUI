
function onScroll() {
    window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
      var y = window.pageYOffset;
      if (y > 150) {
        document.getElementById('header').style.backgroundColor = 'rgb(220 215 244)'
      } else {
        document.getElementById('header').style.backgroundColor = '#fff'
      }
    }
}
  window.onload = function() {
    onScroll();
  };
   