package br.com.barbearia.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.barbearia.DTO.CadastroDTO;
import br.com.barbearia.DTO.LoginDTO;
import br.com.barbearia.model.UsuarioModel;
import br.com.barbearia.repository.UsuarioRepository;

@Service
public record UsuarioService(UsuarioRepository usuarioRepository) {

	//public UsuarioModel salvar(UsuarioModel usuarioModel) {
		//return usuarioRepository.save(usuarioModel);
	//}
	
	public ResponseEntity<String> cadastrar(CadastroDTO dto) {
		if (usuarioRepository.existsByNome(dto.getNome())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Usuário já existe.");
		}
		
		if(usuarioRepository.existsByEmail(dto.getEmail())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("E-mail já existe.");
		}
		
		UsuarioModel usuario = new UsuarioModel();
		usuario.setNome(dto.getNome());
		usuario.setEmail(dto.getEmail());
		usuario.setCargo(dto.getCargo());
		usuario.setSexo(dto.getSexo());
		usuario.setSenha(dto.getSenha());
		
		usuarioRepository.save(usuario);
		
		return ResponseEntity.ok("Cadastro Realizado com sucesso!");
	}
	
	public ResponseEntity<String> login(LoginDTO dto) {
		Optional<UsuarioModel> usuario = usuarioRepository.findByNome(dto.getNome());
		
		if (usuario.isPresent() && usuario.get().getSenha().equals(dto.getSenha())) {
			return ResponseEntity.ok("Login realizado");
		}
		
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha incorretos.");
	}
	
	public List<UsuarioModel> buscarTodos() {
		return usuarioRepository.findAll();
	}
	
	public Optional<UsuarioModel> atualizarPorNome(String nome, UsuarioModel dadosAtualizados) {
		return usuarioRepository.findByNome(nome).map(usuarioExistente -> {
			usuarioExistente.setNome(dadosAtualizados.getNome());
			usuarioExistente.setEmail(dadosAtualizados.getEmail());
			usuarioExistente.setCargo(dadosAtualizados.getCargo());
			usuarioExistente.setSexo(dadosAtualizados.getSexo());
			usuarioExistente.setSenha(dadosAtualizados.getSenha());
			
			return usuarioRepository.save(usuarioExistente);
		});
	}
	
	public boolean deletarPorNome(String Nome) {
		Optional<UsuarioModel> usuario = usuarioRepository.findByNome(Nome);
		if (usuario.isPresent()) {
			usuarioRepository.delete(usuario.get());
			return true;
		}
		
		return false;
	}
}