package com.lab4.trabajopractico1.repositories;

import com.lab4.trabajopractico1.models.Noticia;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface NoticiaRepositorio que extiende de la interface CrudRepository
 * @author Maggini - Panella - Tarditi
 */
@Repository
public interface NoticiaRepositorio extends CrudRepository<Noticia, Long> {

    /**
     * Se utiliza JPQL para realizar una consulta personalizada
     *
     * @param empresa Long
     * @return Devuelve una lista de noticias que se encuentran por el id de la Empresa que se pase por parámetro.
     */
    @Query(value = "SELECT n FROM Noticia n WHERE n.empresa.id = :empresa")
    public List<Noticia> findByIdEmpresa(@Param("empresa") Long empresa);

    /**
     *
     * @param titulo String
     * @param resumen String
     * @return un listado de noticias pasandose por parámetro un titulo y un resumen
     */
    public List<Noticia> findByTituloNoticiaContainingOrResumenNoticiaContaining(String titulo, String resumen);

}
