package ca.quickheaven.demo;

import ca.quickheaven.demo.dao.TeamDao;
import ca.quickheaven.demo.domain.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// @Controller // need to add @ResponseBody otherwise simply return the object.
@RestController // Rest Controllers makes it so that spring MVC always considers the response to be a response body
public class WhateverIWant {

	/*
	@RequestMapping("/hi")
	public @ResponseBody String hiThere() {
		return "hello word!";
	}
	*/
	/* For Thymeleaf example:
	@RequestMapping("/hi/{name}")
	public String hiThere(Map model, @PathVariable String name) {
		model.put("name", name);
		return "hello";
	}
	*/

	/*
	 * Moved to MicroservicesBootApplication after migrating to JPA.
	 *
	private Team team;

	@PostConstruct
	public void init() {
		Set<Player> players = new HashSet<>();
		players.add(new Player("Charlie Brown", "pitcher"));
		players.add(new Player("Snoopy", "shortstop"));

		team = new Team("California", "Peanutes", players);
	}
	*/

    /*
     * Alternatively we can change @Controller to @RestController but we need to
     * remove @ResponseBody. This will consider that the response will always be
     * a response body.
     *
     * What if you want an xml? Put @XmlRootElement in the Team object.
     * http://localhost:8080/microservicesBoot/hi.json
     * http://localhost:8080/microservicesBoot/hi.xml
     *

     @RequestMapping("/hi")
     public @ResponseBody Team hiThere() {
        return team;
     }
     */


    @Autowired
    TeamDao teamDao;

    @RequestMapping("/hi/{name}")
    public Team hiThere(@PathVariable String name) {
        return teamDao.findByName(name);
    }

}


