package com.lab4.trabajopractico1.services;

import com.lab4.trabajopractico1.models.Empresa;
import com.lab4.trabajopractico1.repositories.EmpresaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Es una clase de servicio que implementa la interface base de servicio
 * @author Maggini - Panella - Tarditi
 */
@Service
public class EmpresaServicio implements BaseServicio<Empresa> {

    private final EmpresaRepositorio empresaRepositorio;

    @Autowired
    public EmpresaServicio(EmpresaRepositorio empresaRepositorio) {
        this.empresaRepositorio = empresaRepositorio;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Empresa> findByAll() {
        return (List<Empresa>) this.empresaRepositorio.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Empresa> findById(Long id) {
        return this.empresaRepositorio.findById(id);
    }

    @Override
    @Transactional
    public Empresa save(Empresa empresa) {
        return this.empresaRepositorio.save(empresa);
    }

    @Override
    @Transactional
    public Empresa update(Empresa empresa) {
        return this.empresaRepositorio.save(empresa);
    }

    @Override
    @Transactional
    public boolean delete(Long id) {
        try {
            this.empresaRepositorio.deleteById(id);
            return true;
        } catch (Exception ex) {
            return false;
        }
    }

    @Transactional
    public List<Empresa> findByDenominacion(String denominacion){
        return this.empresaRepositorio.findByDenominacion(denominacion);
    }

}
