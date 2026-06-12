document.querySelectorAll('.nav-toggle').forEach(function(b){
  b.addEventListener('click', function(){
    b.closest('header').classList.toggle('open');
  });
});