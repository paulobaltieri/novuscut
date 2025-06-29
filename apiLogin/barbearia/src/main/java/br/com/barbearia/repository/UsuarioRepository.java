package br.com.barbearia.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.barbearia.model.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long>{
	
	List<UsuarioModel> findByNomeContainingIgnoreCase(String nome);
	
	Optional<UsuarioModel> findByNome(String nome);
	boolean existsByNome(String nome);
	boolean existsByEmail(String email);
}