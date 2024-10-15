package ca.quickheaven.demo;

import ca.quickheaven.demo.dao.TeamDao;
import ca.quickheaven.demo.domain.Player;
import ca.quickheaven.demo.domain.Team;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class MicroservicesBootApplication extends SpringBootServletInitializer {

    /**
     * Used when run as a JAR.
     * <a href="http://localhost:8080/hi">...</a>
     */
    public static void main(String[] args) {
        SpringApplication.run(MicroservicesBootApplication.class, args);
    }

    /**
     * Used when run as a WAR.
     * <a href="http://localhost:8080/demo/hi">...</a>
     */
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(MicroservicesBootApplication.class);
    }

    @PostConstruct
    public void init() {
        Set<Player> players = new HashSet<>();
        players.add(new Player("Charlie Brown", "pitcher"));
        players.add(new Player("Snoopy", "shortstop"));

        Team team = new Team("California", "Peanuts", players);
        teamDao.save(team);
    }

    @Autowired
    TeamDao teamDao;
}
