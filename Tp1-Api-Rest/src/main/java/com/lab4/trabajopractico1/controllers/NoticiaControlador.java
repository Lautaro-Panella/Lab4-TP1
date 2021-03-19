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
 * @author hp
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/noticia") // Ruta principal.
public class NoticiaControlador {
    
    @Autowired
    NoticiaServicio noticiaServicio;
    
    @GetMapping() // Al hacer una petición con la ruta principal y el método GET, el controller nos devuelve todas las noticias.
    public List<Noticia> getNoticias() {
        return noticiaServicio.findByAll();
    }
    
    @GetMapping(path = "/{id}") // Al hacer una petición con la ruta principal/id y el método GET, el controller nos devuelve la noticia con el Id indicado.
    public Optional<Noticia> getNoticiaPorId(@PathVariable("id") Long id) {
        return noticiaServicio.findById(id);
    }
    
    @GetMapping("/consulta") // Al hacer una petición con la ruta principal/consulta?empresa=valorId y el método GET, el controller nos devuelve la/las noticia/s con el Id de empresa indicado.
    public List<Noticia> getNoticiasPorIdEmpresa(@RequestParam("empresa") Long id) {
        return noticiaServicio.findByIdEmpresa(id);
    }
    
    @GetMapping("/consulta2") // Al hacer una petición con la ruta principal/consulta2?titulo=valorTitulo y el método GET, el controller nos devuelve la/las noticia/s con el título indicado.
    public List<Noticia> getNoticiasPorTitulo(@RequestParam("titulo") String titulo) {
        return noticiaServicio.findByTituloNoticia(titulo);
    }
    
    @GetMapping("/consulta3") // Al hacer una petición con la ruta principal/consulta3?resumen=valorResumen y el método GET, el controller nos devuelve la/las noticia/s con el resumen indicado.
    public List<Noticia> getNoticiasPorResumen(@RequestParam("resumen") String resumen) {
        return noticiaServicio.findByResumenNoticia(resumen);
    }
    
    @PostMapping() // Al hacer una petición con la ruta principal y el método POST, pasando en el body, en formato JSON el objeto a guardar/actualizar, el controller guarda la noticia (si no especificamos Id), o actualiza la empresa (si especificamos Id).
    public Noticia saveUpdateNoticia(@RequestBody Noticia noticia) {
        return noticiaServicio.save(noticia);
    }
    
    @PutMapping() // Al hacer una petición con la ruta principal y el método PUT, pasando en el body, en formato JSON el objeto a actualizar, el controller actualiza la noticia indicada.
    public Noticia updateNoticia(@RequestBody Noticia noticia) {
        return noticiaServicio.update(noticia.getId(), noticia);
    }
    
    @DeleteMapping(path = "/{id}") // Al hacer una petición con la ruta principal/id y el método DELETE, el controller elimina la noticia con el Id indicado y nos devuelve un mensaje de confirmación. En caso que el usuario no exista, nos devuelve un mensaje de operación fallida.
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
