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
                        document.getElementById("guardarDatosButton").disabled = false; 
                     }else{
                         document.getElementById("guardarDatosButton").disabled = true;                  	 
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