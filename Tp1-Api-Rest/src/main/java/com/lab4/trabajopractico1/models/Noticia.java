package com.lab4.trabajopractico1.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "noticia")
public class Noticia implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "titulo_de_la_noticia",length = 128)
    private String tituloNoticia;
    @Column(name = "resumen_de_la_noticia",length = 1024)
    private String resumenNoticia;
    @Column(name = "imagen_noticia",length = 20480)
    private String imagenNoticia;
    @Column(name = "contenido_html",length = 20480)
    private String contenidoHtml;
    @Column(name = "publicada")
    private boolean publicada;
    @Column(name = "fecha_publicacion")
    private Date fecha;

    @ManyToOne(fetch = FetchType.EAGER,cascade ={CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "id_empresa")
    private Empresa empresa;

    public Noticia() {
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

    public String getTituloNoticia() {
        return tituloNoticia;
    }

    public void setTituloNoticia(String tituloNoticia) {
        this.tituloNoticia = tituloNoticia;
    }

    public String getResumenNoticia() {
        return resumenNoticia;
    }

    public void setResumenNoticia(String resumenNoticia) {
        this.resumenNoticia = resumenNoticia;
    }

    public String getImagenNoticia() {
        return imagenNoticia;
    }

    public void setImagenNoticia(String imagenNoticia) {
        this.imagenNoticia = imagenNoticia;
    }

    public String getContenidoHtml() {
        return contenidoHtml;
    }

    public void setContenidoHtml(String contenidoHtml) {
        this.contenidoHtml = contenidoHtml;
    }

    public boolean getPublicada() {
        return publicada;
    }

    public void setPublicada(boolean publicada) {
        this.publicada = publicada;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }
}
