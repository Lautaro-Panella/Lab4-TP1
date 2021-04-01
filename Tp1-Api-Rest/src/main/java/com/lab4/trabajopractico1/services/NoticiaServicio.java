package com.lab4.trabajopractico1.services;

import com.lab4.trabajopractico1.models.Empresa;
import com.lab4.trabajopractico1.models.Noticia;
import com.lab4.trabajopractico1.repositories.NoticiaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Es una clase de servicio que implementa la interface base de servicio
 *
 * @author Maggini - Panella - Tarditi
 */
@Service
public class NoticiaServicio implements BaseServicio<Noticia> {

    private final NoticiaRepositorio noticiaRepositorio;

    @Autowired
    public NoticiaServicio(NoticiaRepositorio noticiaRepositorio) {
        this.noticiaRepositorio = noticiaRepositorio;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Noticia> findByAll() {
        return (List<Noticia>) this.noticiaRepositorio.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Noticia> findById(Long id) {
        return this.noticiaRepositorio.findById(id);
    }

    @Override
    @Transactional
    public Noticia save(Noticia noticia) {
        return this.noticiaRepositorio.save(noticia);
    }

    @Override
    @Transactional
    public Noticia update(Noticia noticia) {
        return this.noticiaRepositorio.save(noticia);
    }

    @Override
    @Transactional
    public boolean delete(Long id) {
        try {
            this.noticiaRepositorio.deleteById(id);
            return true;
        } catch (Exception ex) {
            return false;
        }
    }

    @Transactional(readOnly = true)
    public List<Noticia> findByIdEmpresa(Long empresa) {
        return this.noticiaRepositorio.findByIdEmpresa(empresa);
    }

    @Transactional
    public List<Noticia> findByTituloNoticiaOrResumenNoticia(String consulta) {
        return this.noticiaRepositorio.findByTituloNoticiaContainingOrResumenNoticiaContaining(consulta, consulta);
    }

    @Transactional
    public List<Noticia> findByTituloNoticia(String titulo) {
        return this.noticiaRepositorio.findByTituloNoticia(titulo);
    }

    @Transactional
    public List<Noticia> findByResumenNoticia(String resumen) {
        return this.noticiaRepositorio.findByResumenNoticia(resumen);
    }
}
