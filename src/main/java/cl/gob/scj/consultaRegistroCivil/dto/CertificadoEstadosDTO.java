package cl.gob.scj.consultaRegistroCivil.dto;

public class CertificadoEstadosDTO {
    public final class TipoCertificado {
        public static final int REGISTRONACIMIENTO = 1;
        public static final int REGISTROINFORMACIONBASICA = 0;
        
    }
    
    public final class Estados {
        public static final int OK = 1;
        public static final int ERROR = 0;
        
    }


    private Integer estado;
    private String mensaje;
    private Integer tipo;
    public Integer getEstado() {
        return estado;
    }
    public void setEstado(Integer estado) {
        this.estado = estado;
    }
    public String getMensaje() {
        return mensaje;
    }
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    public Integer getTipo() {
        return tipo;
    }
    public void setTipo(Integer tipo) {
        this.tipo = tipo;
    }



}
