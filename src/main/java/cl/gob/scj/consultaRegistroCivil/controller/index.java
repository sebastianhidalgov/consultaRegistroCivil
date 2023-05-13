package cl.gob.scj.consultaRegistroCivil.controller;
import cl.gob.scj.consultaRegistroCivil.dto.CertificadoEstadosDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cl.gob.scj.consultaRegistroCivil.servicio.CertificadoNacimiento;

@Controller
public class index {

    @Autowired
    private CertificadoNacimiento certificadoNacimiento;

    @GetMapping("/")
    public String home() {
        return "vista/consultacertificado";
    }

/*     @PostMapping("/consultarCertificado")
    public String consultarCertificado(@RequestParam String rut, @RequestParam String dv, @RequestParam String parametro3) {
        String respuesta = "";
        try {
            if (parametro3.equals("opcion1")) {
                respuesta = certificadoNacimiento.consumeCertificadoNacimiento(rut, dv);
            } else if (parametro3.equals("opcion2")) {
                respuesta = certificadoNacimiento.consumeCertificadoInformacionBasica(rut, dv);
            } else {
                respuesta = "Opción inválida";
            }
        } catch (Exception e) {
            respuesta = "Error al consultar certificado: " + e.getMessage();
            e.printStackTrace();
        }
        System.out.println(respuesta);
        return respuesta;
    }
     */
    @PostMapping("/consultarCertificado")
    public @ResponseBody CertificadoEstadosDTO consultarCertificado(@RequestParam String rut, @RequestParam String dv, @RequestParam String parametro3) {
        CertificadoEstadosDTO certificado = new CertificadoEstadosDTO();
        try {
            if (parametro3.equals("opcion1")) {
                certificado.setEstado(CertificadoEstadosDTO.TipoCertificado.REGISTRONACIMIENTO);
                certificado.setMensaje(certificadoNacimiento.consumeCertificadoNacimiento(rut, dv));
            } else if (parametro3.equals("opcion2")) {
                certificado.setEstado(CertificadoEstadosDTO.TipoCertificado.REGISTROINFORMACIONBASICA);
                certificado.setMensaje(certificadoNacimiento.consumeCertificadoInformacionBasica(rut, dv));
            } else {
                certificado.setEstado(CertificadoEstadosDTO.Estados.ERROR);
                certificado.setMensaje("Opción inválida");
                System.out.println(certificado.getEstado() + " - " + certificado.getMensaje());
                return certificado;
            }
            certificado.setTipo(CertificadoEstadosDTO.Estados.OK);
            System.out.println(certificado.getEstado() + " - " + certificado.getMensaje());
        } catch (Exception e) {
            certificado.setTipo(CertificadoEstadosDTO.Estados.ERROR);
            certificado.setMensaje("Error al consultar certificado: " + e.getMessage());
            e.printStackTrace();
        }
        System.out.println(certificado);
        return certificado;
    }
    
    

}
