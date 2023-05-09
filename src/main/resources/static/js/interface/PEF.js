 $(document).ready(function(){
  
        $('.dataTables-pef-v2').DataTable({
            dom: '<"html5buttons"B>lTfgitp',
            "language" : lenguaje_es,
            buttons: [
                { extend: 'copy'},
                {extend: 'csv'},
                {extend: 'excel', title: 'PEF'},
                {extend: 'pdf', title: 'PEF'},

            ]

        });

        $('.summernote').summernote({
      	    lang: 'es-ES'
          });

      
       // BuscarFocalizacionAnioActual(0,0);
        $('[data-toggle="tooltip"]').tooltip(); 
        cargarMallaPef(0);  
        cargarFocalizacion(0);
        crearPef();
        buscarPef();
        finalizarEdicionPEF(0);
        modificacionEspecialPEF(0);
        versionPEF(0,0);
       
        // Se agrega Introduccion y analisis       
        introduccionAnalisis(0);
        // Se agrega Acuerdos Comite
        acuerdosComite(0);
        
        // Documentos Adjuntos
        
        documentosAdjuntos(0);
        
        // Completo los datos de todo el formaluario con este metodo
        buscarAdministracionPefPorAnio(0);
    });
    
/*
    $(window).on('load', function(){
    	 document.getElementById("anioPefBuscar").value =$("#idanioPefBuscado").val();    	
    });
 */   
	 function cargarMallaPef(anioPef){
	 	
	 	
			$("#mallaPEF").css("position",
				"relative").css("min-height", "200px").prepend(
			$("<div />").addClass("cargando"));
	 	
			$("#mallaPEF").load(
					"./pef/mallaTabla/"+ anioPef,
					function() {
						$("#mallaPEF").find(
								".cargando").remove();
					});
	 }
	    
   
    
    function cargarFocalizacion(anioFocalizacion){
    	
    	
		$("#focalizacion").css("position",
			"relative").css("min-height", "200px").prepend(
		$("<div />").addClass("cargando"));
    	
		$("#focalizacion").load(
				"./pef/focalizacionTabla/"+ anioFocalizacion,
				function() {
					$("#focalizacion").find(
							".cargando").remove();
				});
    }

    function crearPef(){
    	
    	
		$("#crearPef").css("position",
			"relative").css("min-height", "200px").prepend(
		$("<div />").addClass("cargando"));
    	
		$("#crearPef").load(
				"./pef/crearPef",
				function() {
					$("#crearPef").find(
							".cargando").remove();
				});
    }
    
    
    function buscarPef(){
    	
    	var anioPef = $("#idanioPefBuscado").val();
    	
		$("#buscarPef").css("position",
			"relative").css("min-height", "200px").prepend(
		$("<div />").addClass("cargando"));
    	
		$("#buscarPef").load(
				"./pef/buscarPef/"+anioPef,
				function() {
					$("#buscarPef").find(
							".cargando").remove();
				});
    }
    
    

    

    
    
    
    
    function buscarAdministracionPefPorAnio(anioBusquedaPef){
    	

   	 var planEstrategico = {}
   	 planEstrategico["anioPef"] = anioBusquedaPef; ///$("#idanioPefBuscado1").val(); // Validar Problema de la fecha
   	 
	    	$.ajax({
				type : "POST",
				contentType : "application/json",
				url : "./pef/BuscarDatosPefPorAño",
				data : JSON.stringify(planEstrategico),
				dataType : 'json',
				timeout : 100000,
				success : function(data) {
                    console.log("buscarAdministracionPefPornio SUCCESS: ", data);      
                    
                    $("#introduccionAnalisisPef").summernote("code", data.introduccionAnalisisPef);
                    $("#acuerdoComitePef").summernote("code", data.acuerdosComitePef);
                    
				},
				error : function(e) {
					 console.log("ERROR: ", e);
				},
				done : function(e) {
					 console.log("MAS ERROR: ", e);
				}
			});
    }
    
    
    
function finalizarEdicionPEF(anioBusqueda){
    	
    	var anioPef = anioBusqueda
    	
		$("#finalizarCreacionPEF").css("position",
			"relative").css("min-height", "200px").prepend(
		$("<div />").addClass("cargando"));
    	
		$("#finalizarCreacionPEF").load(
				"./pef/finalizarCreacionPEF/"+anioPef,
				function() {
					$("#finalizarCreacionPEF").find(
							".cargando").remove();
				});
    }
    

function modificacionEspecialPEF(anioBusqueda){
	
	var anioPef = anioBusqueda
	
	$("#modificacionEspecialPEF").css("position",
		"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));
	
	$("#modificacionEspecialPEF").load(
			"./pef/modificacionPefEspecial/"+anioPef,
			function() {
				$("#modificacionEspecialPEF").find(
						".cargando").remove();
			});
}
    


function versionPEF(anioBusqueda , versionPef){
	
	var anioPef = anioBusqueda
	
	$("#versionesPEF").css("position",
		"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));
	
	$("#versionesPEF").load(
			"./pef/versionesPEF/"+anioPef + "/" + versionPef ,
			function() {
				$("#versionesPEF").find(
						".cargando").remove();
			});
}



function introduccionAnalisis(anioBusqueda){
	
	var anioPef = anioBusqueda
	
	$("#introduccionAnalisisDiv").css("position",
		"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));
	
	$("#introduccionAnalisisDiv").load(
			"./pef/introduccionAnalisis/"+anioPef,
			function() {
				$("#introduccionAnalisisDiv").find(
						".cargando").remove();
			});
}


function acuerdosComite(anioBusqueda){
	
	var anioPef = anioBusqueda
	
	$("#acuerdosComiteDiv").css("position",
		"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));
	
	$("#acuerdosComiteDiv").load(
			"./pef/acuerdoComite/"+anioPef,
			function() {
				$("#acuerdosComiteDiv").find(
						".cargando").remove();
			});
}

function documentosAdjuntos(anioBusqueda){
	
	var anioPef = anioBusqueda
	
	$("#documentosAdjuntoDiv").css("position",
		"relative").css("min-height", "200px").prepend(
	$("<div />").addClass("cargando"));
	
	$("#documentosAdjuntoDiv").load(
			"./pef/documentosAdjuntos/"+anioPef,
			function() {
				$("#documentosAdjuntoDiv").find(
						".cargando").remove();
			});
}


