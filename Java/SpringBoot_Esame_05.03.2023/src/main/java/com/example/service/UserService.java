package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.User;
import com.example.repository.UserDAO;

@Service
public class UserService {

	@Autowired UserDAO repo; 
	
	public void insertUser(User user) {
		repo.save(user);
	}
	
	public User getUserByID(Long id) {
		
		return repo.findById(id).get();
	}
	
	public void updateUser(User user) {
		repo.save(user);
	}
	
	public void removeUser(User user) {
		repo.delete(user);
	}
	
	public List<User> getAllUser() {
		return (List<User>) repo.findAll();
	}
}
