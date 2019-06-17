package com.pdsiproject;

import com.pdsiproject.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    public List<User> findUserByIndex(String index);

    public List<User> findUserByPassword(String password);
}
