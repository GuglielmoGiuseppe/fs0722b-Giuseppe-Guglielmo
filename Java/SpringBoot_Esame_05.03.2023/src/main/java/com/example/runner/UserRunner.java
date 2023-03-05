package com.example.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.model.Postazione;
import com.example.model.Postazione.Sala;
import com.example.model.User;
import com.example.service.PostazioneService;
import com.example.service.UserService;

	
//		forse è un problema mio... la traccia è scritta da cani.
//		già sono dislessico, mettici pure una traccia dove bisogna perdere 3 ore per capire cosa bisgona fare
//		...ti passa pure la voglia di farlo l'esercizio.
		
// faccio l'esercio in base a quello che forse, ipoteticamente parlando dovrebbe essere.


@Component
public class UserRunner implements ApplicationRunner {

	@Autowired UserService us; PostazioneService ps;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("Runner");
		
		User u1 = new User();
		Postazione p1 = new Postazione();
		
		//users
		u1.setUsername("giggi120");
		u1.setName("BEllo");
		u1.setSurname("poco");
		u1.setEmail("bello@live.it");
		
		
		// postazioni
		p1.setDescription(" ho solo voglia di bestemmiare");
		p1.setEdifico("Gemello");
		p1.setMaxOccupanti(35);
		p1.setTipoSala(Sala.PRIVATO);


		
		//inserimento db
		us.insertUser(u1);
		ps.insertPostazione(p1);

		
		
		// Print console
		
		System.out.println(u1.toString());
		System.out.println(p1.toString());
		ps.listTipoSala(Sala.PRIVATO);
		System.out.println(ps.toString());
		
		
		
	}

}
