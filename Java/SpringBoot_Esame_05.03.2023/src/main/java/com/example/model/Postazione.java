package com.example.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Table(name = "Postazione")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder

@Entity
public class Postazione {
	
	public enum Sala {
	    PRIVATO,
	    OPENSPACE, 
	    SALA_RIUNIONI
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String Description;
	private int MaxOccupanti;
	
	@Enumerated(EnumType.ORDINAL)
	private Sala TipoSala;
	
	private String edifico;


}


