package com.example.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Edifico")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder

public class Edifico {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String nome;
	private String idirizzo;
	private String città;
	
	
}
