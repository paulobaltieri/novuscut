package br.com.barbearia.DTO;

import br.com.barbearia.enumeration.SexoEnum;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class CadastroDTO {
	
	public String nome;
	public String email;
	
	@Enumerated(EnumType.STRING)
	public SexoEnum sexo;
	
	public String cargo;
	public String senha;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public SexoEnum getSexo() {
		return sexo;
	}
	public void setSexo(SexoEnum sexo) {
		this.sexo = sexo;
	}
	public String getCargo() {
		return cargo;
	}
	public void setCargo(String cargo) {
		this.cargo = cargo;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
}