/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lab4.trabajopractico1.controllers;

import com.lab4.trabajopractico1.services.NoticiaServicio;
import com.lab4.trabajopractico1.models.Noticia;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author Maggini - Panella - Tarditi
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/noticia") // Ruta principal.
public class NoticiaControlador {
    
    @Autowired
    NoticiaServicio noticiaServicio;

    /**
     * Al hacer una petición con la ruta principal y el método GET, el controller nos devuelve todas las noticias.
     * @return el listado de noticias
     */
    @GetMapping()
    public List<Noticia> getNoticias() {
        return noticiaServicio.findByAll();
    }

    /**
     *Al hacer una petición con la ruta principal/id y el método GET, el controller nos devuelve la noticia con el Id indicado.
     * @param id Long
     * @return la noticia
     */
    @GetMapping(path = "/{id}")
    public Optional<Noticia> getNoticiaPorId(@PathVariable("id") Long id) {
        return noticiaServicio.findById(id);
    }

    /**
     *Al hacer una petición con la ruta principal/consulta?empresa=valorId y el método GET, el controller nos devuelve
     * la/las noticia/s con el Id de empresa indicado.
     * @param id Long
     * @return la o las noticias por el id de la empresa
     */
    @GetMapping("/consulta")
    public List<Noticia> getNoticiasPorIdEmpresa(@RequestParam("empresa") Long id) {
        return noticiaServicio.findByIdEmpresa(id);
    }

    /**
     *Al hacer una petición con la ruta principal/consulta2?titulo=valorTitulo y el método GET, el controller nos
     * devuelve la/las noticia/s con el título indicado.
     * @param consulta String
     * @return la o las noticias por titulo o resumen
     */
    @GetMapping("/consulta2")
    public List<Noticia> getNoticiasPorTituloOrResumen(@RequestParam("consulta") String consulta) {
        return noticiaServicio.findByTituloNoticia(consulta);
    }

    /**
     *Al hacer una petición con la ruta principal y el método POST, pasando en el body, en formato JSON el objeto
     * a guardar/actualizar, el controller guarda la noticia (si no especificamos Id), o actualiza la empresa (si especificamos Id).
     * @param noticia Noticia
     * @return la noticia guardada
     */
    @PostMapping()
    public Noticia saveUpdateNoticia(@RequestBody Noticia noticia) {
        return noticiaServicio.save(noticia);
    }

    /**
     *Al hacer una petición con la ruta principal y el método PUT, pasando en el body, en formato JSON el objeto a
     * actualizar, el controller actualiza la noticia indicada.
     * @param noticia Noticia
     * @return la noticia actualizada
     */
    @PutMapping()
    public Noticia updateNoticia(@RequestBody Noticia noticia) {
        return noticiaServicio.update(noticia);
    }

    /**
     *Al hacer una petición con la ruta principal/id y el método DELETE, el controller elimina la noticia con el Id
     * indicado y nos devuelve un mensaje de confirmación. En caso que el usuario no exista, nos devuelve un mensaje de operación fallida.
     * @param id Long
     * @return un mensaje de si se elimino la noticia o no
     */
    @DeleteMapping(path = "/{id}") //
    public String deleteNoticia(@PathVariable("id") Long id) {
        boolean eliminado = noticiaServicio.delete(id);
        if (eliminado) {
            return "Se eliminó la noticia con id: " + id;
        }
        else {
            return "No se encontró la noticia con id: " + id;
        }
    }
}
