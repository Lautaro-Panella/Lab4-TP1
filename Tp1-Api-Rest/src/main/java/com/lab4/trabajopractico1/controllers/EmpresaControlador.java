/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lab4.trabajopractico1.controllers;

import com.lab4.trabajopractico1.services.EmpresaServicio;
import com.lab4.trabajopractico1.models.Empresa;
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
@RequestMapping("/empresa") // Ruta principal.
public class EmpresaControlador {
    
    @Autowired
    EmpresaServicio empresaServicio;

    /**
     * Al hacer una petición con la ruta principal y el método GET, el controller nos devuelve todas las empresas.
     * @return una lista de empresas
     */
    @GetMapping()
    public List<Empresa> getEmpresas() {
        return empresaServicio.findByAll();
    }

    /**
     * Al hacer una petición con la ruta principal/id y el método GET, el controller nos devuelve la empresa
     * con el Id indicado.
     * @param id Long
     * @return la empresa
     */
    @GetMapping(path = "/{id}")
    public Optional<Empresa> getEmpresaPorId(@PathVariable("id") Long id) {
        return empresaServicio.findById(id);
    }

    /**
     * Al hacer una petición con la ruta principal/consulta?denominacion=valorDenominacion y el método GET,
     * el controller nos devuelve la/las empresa/s con la denominación indicada.
     * @param denominacion String
     * @return la o las empresas por denominación
     */
    @GetMapping("/consulta")
    public List<Empresa> getEmpresaPorDenominacion(@RequestParam("denominacion") String denominacion) {
        return empresaServicio.findByDenominacion(denominacion);
    }

    /**
     * Al hacer una petición con la ruta principal y el método POST, pasando en el body, en formato JSON el objeto
     * a guardar/actualizar, el controller guarda la empresa (si no especificamos Id), o actualiza la empresa (si especificamos Id).
     * @param empresa Empresa
     * @return la empresa guardada
     */
    @PostMapping()
    public Empresa saveUpdateEmpresa(@RequestBody Empresa empresa) {
        return empresaServicio.save(empresa);
    }

    /**
     * Al hacer una petición con la ruta principal y el método PUT, pasando en el body, en formato JSON el objeto a
     * actualizar, el controller actualiza la empresa indicada.
     * @param empresa Empresa
     * @return la empresa actualizada
     */
    @PutMapping()
    public Empresa updateEmpresa(@RequestBody Empresa empresa) {
        return empresaServicio.update(empresa);
    }

    /**
     * Al hacer una petición con la ruta principal/id y el método DELETE, el controller elimina la empresa con el Id
     * indicado y nos devuelve un mensaje de confirmación. En caso que el usuario no exista, nos devuelve un mensaje de operación fallida.
     * @param id Long
     * @return un mensaje de si se elimino la empresa o no
     */
    @DeleteMapping(path = "/{id}")
    public String deleteEmpresa(@PathVariable("id") Long id) {
        boolean eliminado = empresaServicio.delete(id);
        if (eliminado) {
            return "Se eliminó la empresa con id: " + id;
        }
        else {
            return "No se encontró la empresa con id: " + id;
        }
    }
    
}
