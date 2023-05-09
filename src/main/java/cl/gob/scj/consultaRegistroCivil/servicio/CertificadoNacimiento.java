package cl.gob.scj.consultaRegistroCivil.servicio;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import cl.gob.scj.consultaRegistroCivil.dto.CertificadoNacimientoDTO;

@Service
public class CertificadoNacimiento {

    private final RestTemplate restTemplate;

    public CertificadoNacimiento(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String consumeEndpoint() {
   
        String url = "http://172.16.10.237:8080/SRCeICertificmadoNacimientoServiceREST/service";
        
        CertificadoNacimientoDTO certificadoNacimiento = new CertificadoNacimientoDTO();
        certificadoNacimiento.setTramite("0001");
        certificadoNacimiento.setRut("18602729");
        certificadoNacimiento.setDv("9");

        ResponseEntity<String> response = restTemplate.postForEntity(url, certificadoNacimiento, String.class);
        String responseBody = response.getBody();
        System.out.println(responseBody);
        return responseBody;
    }
}
