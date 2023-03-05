package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Postazione;
import com.example.model.Postazione.Sala;
import com.example.repository.PostazioneDAO;

@Service
public class PostazioneService {

	@Autowired PostazioneDAO repo; 
	
	public void insertPostazione(Postazione post) {
		repo.save(post);
	}
	
	public List<Postazione> getAllPostazioni() {
		return (List<Postazione>) repo.findAll();
	}
	
	public List<Postazione> listTipoSala(Sala tiposala){
		return repo.findByTipoSala(tiposala);
	}
}
