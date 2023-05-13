package cl.gob.scj.consultaRegistroCivil.dto;

public class CertificadoNacimientoDTO{

    private String tramite;
    private String rut;
    private String dv;
    private String servicio;

    public String getServicio() {
        return servicio;
    }
    public void setServicio(String servicio) {
        this.servicio = servicio;
    }
    public String getTramite() {
        return tramite;
    }
    public void setTramite(String tramite) {
        this.tramite = tramite;
    }
    public String getRut() {
        return rut;
    }
    public void setRut(String rut) {
        this.rut = rut;
    }
    public String getDv() {
        return dv;
    }
    public void setDv(String dv) {
        this.dv = dv;
    }

    
}