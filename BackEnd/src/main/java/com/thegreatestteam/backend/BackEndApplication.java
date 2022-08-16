package com.thegreatestteam.backend;

import com.thegreatestteam.backend.model.Staff;
import com.thegreatestteam.backend.repository.StaffRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(StaffRepository repository){
		return args -> {
			Staff staff = new Staff("test1", "test1@gmail.com");
			repository.insert(staff);
		};
	}

}
