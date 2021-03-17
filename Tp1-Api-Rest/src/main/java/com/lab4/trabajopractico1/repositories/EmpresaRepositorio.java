package com.lab4.trabajopractico1.repositories;

import com.lab4.trabajopractico1.models.Empresa;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmpresaRepositorio extends CrudRepository<Empresa, Long> {

    List<Empresa> findByDenominacion(String denominacion);

}
