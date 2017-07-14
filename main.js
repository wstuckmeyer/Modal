document.getElementById('closeButton').addEventListener('click', function(){
	document.getElementById('myModal').style.display = 'none'
	document.getElementById('blur').style.display = 'none'
});

  window.setTimeout(function openModal(){
     document.getElementById('myModal').style.display = 'block'
     document.getElementById('blur').style.display = 'block'
     
	}, 3000)

  


