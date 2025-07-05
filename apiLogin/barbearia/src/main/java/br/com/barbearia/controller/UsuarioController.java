package br.com.barbearia.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.barbearia.DTO.CadastroDTO;
import br.com.barbearia.DTO.LoginDTO;
import br.com.barbearia.model.UsuarioModel;
import br.com.barbearia.service.UsuarioService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/usuario")
public record UsuarioController(UsuarioService usuarioService) {

	@PostMapping("/cadastro")
	public ResponseEntity<String> cadastrar(@RequestBody CadastroDTO dto) {
		return usuarioService.cadastrar(dto);
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody LoginDTO dto) {
		return usuarioService.login(dto);
	}

	
	@GetMapping("/consulta")
	public List<UsuarioModel> buscarUsuario() {
		return usuarioService.buscarTodos();
	}
	
	@PutMapping("/nome/{nome}")
	public ResponseEntity<UsuarioModel> atualizarPorNome(@PathVariable String nome, @RequestBody UsuarioModel dadosAtualizados) {
		return usuarioService.atualizarPorNome(nome, dadosAtualizados)
				.map(usuario -> ResponseEntity.ok(usuario))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/nome/{nome}")
	public ResponseEntity<Void> deletarPorNome(@PathVariable String nome) {
		boolean deletado = usuarioService.deletarPorNome(nome);
		
		return deletado
				? ResponseEntity.noContent().build()
				: ResponseEntity.notFound().build();
	}
}
