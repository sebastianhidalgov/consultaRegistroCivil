
jQuery(document).ready(
		function($) {
			   // Cargar El año Actual Del Documento
			   document.getElementById("anioTareaBusqueda").value = $("#anioTareadHidden").val();  
				administrarTarea(0);
			   asignarTarea(0);			   
		});

function guardarTarea() {
	var valid = $("#tareaForm").validationEngine('validate');

	if (valid == false) {
	    return;
	}
	
	var anioBusqueda = $("#anioTarea").val();
	
	 var tarea = {}
	 tarea["nombreTarea"] =  $("#nombreTarea").val();
	 tarea["anioTarea"] = $("#anioTarea").val();
	 tarea["codigoTarea"] = $("#codigoTarea").val();
	 tarea["descripcionTarea"] = $("#descripcionTarea").val();
	 
  	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "./proceso/crearTarea",
			data : JSON.stringify(tarea),
			dataType : 'json',
			timeout : 100000,
			success : function(data) {
               console.log("SUCCESS: ", data);
               if (data.estado == "OK"){
              	 swal( 
              	    'creado exitosamente',
              	    '',
              		'success'
              		)


              		
               }else{
              	 swal(
              	  'Oops...',
      			  'Ha ocurrido un error al guardar',
      			  'error'
              		)
               }
               
			},
			error : function(e) {
				 console.log("ERROR: ", e);
			},
			complete : function(e) {
				$('#tareaForm')[0].reset();
				administrarTarea(anioBusqueda);		
				asignarTarea(anioBusqueda);	
				
			},
		});
}


function buscarTarea(){

 	 var anioBusqiedaVali = $("#anioTareaBusqueda").validationEngine('validate');
	 
	 if (anioBusqiedaVali == false ){
		return  
	 }	
	
	var anioBusqueda = $("#anioTareaBusqueda").val();;
	administrarTarea(anioBusqueda);
	asignarTarea(anioBusqueda);
}



function administrarTarea(anioBusqueda){
	$("#administrarTarea").css("position",
	"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));

     $("#administrarTarea").load(
		"./proceso/administrarTarea/"+ anioBusqueda,
		function() {
			$("#administrarTarea").find(
					".cargando").remove();
		});
}

function asignarTarea(anioBusqueda){
	
	$("#asignarTarea").css("position",
	"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));

     $("#asignarTarea").load(
		"./proceso/asignarTarea/"+ anioBusqueda,
		function() {
			$("#asignarTarea").find(
					".cargando").remove();
		});
}

