
jQuery(document).ready(
		function($) {

			   $("#guardarDatosButton").click(
					function() {
						var valid = $("#procesoForm")
								.validationEngine('validate');

						if (valid == true) {
							guardarProceso();
						} else {
							$("#procesoForm").validationEngine();
						}
					});
			   
			 
			   
			   // Cargar El año Actual Del Documento
			   document.getElementById("anioProcesoBusqueda").value = $("#anioProcesoHidden").val();  
			   administrarProceso(0);
			   
			   
			   
		});



		function guardarProceso(){
			
			
		     var anioBusqueda = $("#anioProceso").val();
			
			 var proceso = {}
			 proceso["nombreProceso"] =  $("#nombreProceso").val();
			 proceso["anioProceso"] = $("#anioProceso").val();
			 proceso["codigoProceso"] = $("#codigoProceso").val();
			 proceso["descripcionProceso"] = $("#descripcionProceso").val();
	    	 
		    	$.ajax({
					type : "POST",
					contentType : "application/json",
					url : "./proceso/crearProceso",
					data : JSON.stringify(proceso),
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
						$('#procesoForm')[0].reset();
						  administrarProceso(anioBusqueda);									 
					},
				});
		
		}



function administrarProceso(anioBusqueda){
		
	$("#administrarProceso").css("position",
		"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));
	
	$("#administrarProceso").load(
			"./proceso/administrarProceso/"+ anioBusqueda,
			function() {
				$("#administrarProceso").find(
						".cargando").remove();
			});
}

function buscarProceso(){

   	 var anioBusqiedaVali = $("#anioProcesoBusqueda").validationEngine('validate');
	 
	 if (anioBusqiedaVali == false ){
		return  
	 }	
	
	var anioBusqueda = $("#anioProcesoBusqueda").val();;
	administrarProceso(anioBusqueda);
}

/*   se traspaso a la libreria Util

function validarPef(anioBusquedaPef){
	
	anioBusquedaPef = anioBusquedaPef.value;
	
	if (anioBusquedaPef == ""){
		return;
	}
	
	
	 var planEstrategico = {}
   	 planEstrategico["anioPef"] = anioBusquedaPef; 
   	 
	    	$.ajax({
				type : "POST",
				contentType : "application/json",
				url : "./pef/BuscarDatosPefPorAño",
				data : JSON.stringify(planEstrategico),
				dataType : 'json',
				timeout : 100000,
				success : function(data) {
                    console.log("validarPef SUCCESS: ", data);      
                     if (data.editarPef == "SI" ){
                        document.getElementById("guardarProcesoButton").disabled = false; 
                     }else{
                         document.getElementById("guardarProcesoButton").disabled = true;                  	 
                     }
				},
				error : function(e) {
					 console.log("ERROR: ", e);
				},
				done : function(e) {
					 console.log("MAS ERROR: ", e);
				}
			});
}
*/