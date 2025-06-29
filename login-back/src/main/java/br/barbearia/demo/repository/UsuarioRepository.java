package br.barbearia.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.barbearia.demo.model.UsuarioModel;

public interface UsuarioRepository extends CrudRepository<UsuarioModel, String>{
	UsuarioModel findById(long id);
	
	@Query(value="select *from USUARIO where login = :login and senha =:senha", nativeQuery = true)
	public UsuarioModel login(String login, String senha);
}
