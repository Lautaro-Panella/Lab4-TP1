package com.lab4.trabajopractico1.repositories;

import com.lab4.trabajopractico1.models.Noticia;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticiaRepositorio extends CrudRepository<Noticia, Long> {

    @Query(value = "SELECT n FROM Noticia n WHERE n.empresa.id = :empresa") //JPQL
    List<Noticia> findByIdEmpresa(@Param("empresa") Long empresa);

    List<Noticia> findByTituloNoticia(String tituloNoticia);

    List<Noticia> findByResumenNoticia(String resumenNoticia);

}
