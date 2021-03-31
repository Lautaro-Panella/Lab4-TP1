package com.lab4.trabajopractico1.services;

import java.util.List;
import java.util.Optional;

/**
 * @author Maggini - Panella - Tarditi
 * @param <E> Entity
 * Interface Base que tiene métodos de crud genéricos, la clase implemente de base deberá implementar los métodos
 */
public interface BaseServicio<E> {
    List<E> findByAll();
    Optional<E> findById(Long id);
    E save(E entidad);
    E update(E entidad);
    boolean delete(Long id);

}
