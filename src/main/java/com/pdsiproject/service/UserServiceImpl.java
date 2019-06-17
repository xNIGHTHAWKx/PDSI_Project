package com.pdsiproject.service;

import com.pdsiproject.UserRepository;
import com.pdsiproject.entities.User;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        var users = (List<User>) userRepository.findAll();

        return users;
    }
}
