package app.minions.minionsfacemaskwebr2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MinionsFaceMaskWebR2Application {
	public static void main(String[] args) {
		SpringApplication.run(MinionsFaceMaskWebR2Application.class, args);
	}
}
