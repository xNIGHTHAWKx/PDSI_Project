package com.pdsiproject;

import com.pdsiproject.entities.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class UserController {

    @GetMapping("/home")
    public String logIn(User user) {
        return "log-in";
    }

    @PostMapping("/login")
    public String logInUser(@Valid User user, BindingResult result, Model model) {

        if (result.hasErrors()) {
            return "login";
        }
        else return "home";
    }

}
