window.onscroll = function() {
  document.getElementById('hoverlay').className = "active";
  if(window.scrollY < 25) {
    document.getElementById('hoverlay').className = "";
  }
};