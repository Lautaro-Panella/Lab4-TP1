package com.lab4.trabajopractico1.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import javafx.print.Paper;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name = "empresa")
public class Empresa implements Serializable {
    private static final Long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "denominacion",length = 128)
    private String denominacion;
    @Column(name = "telefono",length = 50)
    private String telefono;
    @Column(name = "hora_de_atencion",length = 256)
    private String horarioDeAtencion;
    @Column(name = "quienes_somos",length = 1024)
    private String quienesSomos;
    @Column(name = "latitud")
    private double latitud;
    @Column(name = "longitud")
    private double longitud;
    @Column(name = "domicilio",length = 256)
    private String domicilio;
    @Column(name = "email",length = 75)
    private String email;
    @OneToMany(mappedBy = "empresa",fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)
    @JsonManagedReference
    List<Noticia> noticias = new ArrayList<>();

    public Empresa() {
    }

    public static Long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDenominacion() {
        return denominacion;
    }

    public void setDenominacion(String denominacion) {
        this.denominacion = denominacion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getHorarioDeAtencion() {
        return horarioDeAtencion;
    }

    public void setHorarioDeAtencion(String horarioDeAtencion) {
        this.horarioDeAtencion = horarioDeAtencion;
    }

    public String getQuienesSomos() {
        return quienesSomos;
    }

    public void setQuienesSomos(String quienesSomos) {
        this.quienesSomos = quienesSomos;
    }

    public double getLatitud() {
        return latitud;
    }

    public void setLatitud(double latitud) {
        this.latitud = latitud;
    }

    public double getLongitud() {
        return longitud;
    }

    public void setLongitud(double longitud) {
        this.longitud = longitud;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Noticia> getNoticias() {
        return noticias;
    }

    public void setNoticias(List<Noticia> noticias) {
        this.noticias = noticias;
    }
}