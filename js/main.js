$(document).ready(function(){

	var ref = new Firebase('https://yoseguro.firebaseio.com');
	
	$('#Send').on('click',function(){
		ref.push({
			menssage: $('#ChatGeneral').val(),
		});

		ref.on('child_added',function(snapshot){
			var newText = snapshot.val();
			$('#Cabecera').append('<p>'+ newText.menssage +'</p>');
		});
	});

	});