package cl.gob.scj.consultaRegistroCivil.servicio;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import cl.gob.scj.consultaRegistroCivil.dto.CertificadoNacimientoDTO;

@Service
public class CertificadoNacimiento {

    private final RestTemplate clienteRest;

    public CertificadoNacimiento(RestTemplate restTemplate) {
        this.clienteRest = restTemplate;
    }

    public String consumeCertificadoNacimiento(String run, String dv) {
        String url = "http://172.16.10.237:8080/SRCeICertificadoNacimientoServiceREST/service";
        CertificadoNacimientoDTO certificadoNacimiento = new CertificadoNacimientoDTO();
        certificadoNacimiento.setTramite("0001");
        certificadoNacimiento.setRut(run);
        certificadoNacimiento.setDv(dv);
    
        ResponseEntity<String> response = clienteRest.postForEntity(url, certificadoNacimiento, String.class);
        String responseBody = response.getBody();
        System.out.println(responseBody);
        return responseBody;
    }

    public String consumeCertificadoInformacionBasica(String run, String dv) {
        String url = "http://172.16.10.237:8080/SRCeIInformacionPersonalINPREST/service";
        CertificadoNacimientoDTO certificadoNacimiento = new CertificadoNacimientoDTO();
        certificadoNacimiento.setTramite("0001");
        certificadoNacimiento.setRut(run);
        certificadoNacimiento.setDv(dv);
    
        ResponseEntity<String> response = clienteRest.postForEntity(url, certificadoNacimiento, String.class);
        String responseBody = response.getBody();
        System.out.println(responseBody);
        return responseBody;
    }


    
}
