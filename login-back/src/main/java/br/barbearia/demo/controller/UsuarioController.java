package br.barbearia.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import br.barbearia.demo.model.UsuarioModel;
import br.barbearia.demo.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository ur;
	
	@GetMapping("/login")
    public String login() {
        return "login";
    }
	
	@GetMapping("/")
	public String teste() {
		return "index";
	}
	
	@PostMapping("/logar")
	public String loginUsuario(UsuarioModel usuario, Model model, HttpServletResponse response) {
		UsuarioModel usuarioLogado = this.ur.login(usuario.getNome(), usuario.getSenha());
		if (usuarioLogado != null) {
			return "redirect:/";
		}
		
		model.addAttribute("erro", "Usuario Invalido");
		return "login";
	}
}