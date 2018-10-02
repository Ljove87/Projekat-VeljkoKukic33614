$(document).ready(function(){

  $("#btn").on('click', myFunction);
  
  function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.addEventListener('click', drop); 
   function drop(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  });
  