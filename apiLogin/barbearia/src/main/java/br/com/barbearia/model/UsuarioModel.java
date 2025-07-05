package br.com.barbearia.model;

import br.com.barbearia.enumeration.SexoEnum;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario_login")
public class UsuarioModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome", unique = true)
	public String nome;
	
	@Column(name = "email", unique = true)
	public String email;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "sexo")
	public SexoEnum sexo;
	
	@Column(name = "cargo")
	public String cargo;
	
	@Column(name = "senha")
	public String senha;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
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