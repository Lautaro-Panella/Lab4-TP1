package com.lab4.trabajopractico1.repositories;

import com.lab4.trabajopractico1.models.Empresa;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface EmpresaRepositorio que extiende de la interface CrudRepository
 * @author Maggini - Panella - Tarditi
 */
@Repository
public interface EmpresaRepositorio extends CrudRepository<Empresa, Long> {

    /**
     *
     * @param denominacion String
     * @return un listado de empresas pasandose por parámetro una denominación
     */
    public List<Empresa> findByDenominacion(String denominacion);

}
