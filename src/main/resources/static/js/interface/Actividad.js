

jQuery(document).ready(
		function($) {

			
			   $("#guardarDatosButton").click(
					function() {
						var valid = $("#actividadForm")
								.validationEngine('validate');

						if (valid == true) {
							guardarActividad();
						} else {
							$("#actividadForm").validationEngine();
						}
					});
			 
			 
			   
			   // Cargar El año Actual Del Documento
			     document.getElementById("anioActividadBusqueda").value = $("#anioActividadHidden").val();  
			   administrarActividad(0);
			   asignarActividad(0);
			   
			   
			   
		});



function administrarActividad(anioBusqueda){
		
	$("#administrarActividad").css("position",
		"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));
	
	$("#administrarActividad").load(
			"./proceso/administrarActividad/"+ anioBusqueda,
			function() {
				$("#administrarActividad").find(
						".cargando").remove();
			});
}



function guardarActividad(){
	
	
    var anioBusqueda = $("#anioActividad").val();
	
     tipoActividad ={}
     tipoActividad["idTipoActividad"] = $("#tipoActividad").val();
    
	 var actividad = {}
	 actividad["nombreActividad"] =  $("#nombreActividad").val();
	 actividad["anioActividad"] = $("#anioActividad").val();
	 actividad["codigoActividad"] = $("#codigoActividad").val();
	 actividad["descripcionActividad"] = $("#descripcionActividad").val();
	 actividad["tipoActividad"] = tipoActividad;
	 
	 
   	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "./proceso/crearActividad",
			data : JSON.stringify(actividad),
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
				$('#actividadForm')[0].reset();
				 administrarActividad(anioBusqueda);
				 asignarActividad(anioBusqueda);
			},
		});

}

function buscarActividad(){

  	 var anioBusqiedaVali = $("#anioActividadBusqueda").validationEngine('validate');
	 
	 if (anioBusqiedaVali == false ){
		return  
	 }	
	
	var anioBusqueda = $("#anioActividadBusqueda").val();;
	administrarActividad(anioBusqueda);
	asignarActividad(anioBusqueda);
}


function asignarActividad(anioBusqueda){
	
	$("#asignarActividad").css("position",
		"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));
	
	$("#asignarActividad").load(
			"./proceso/asignarActividad/"+ anioBusqueda,
			function() {
				$("#asignarActividad").find(
						".cargando").remove();
			});
}
