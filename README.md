# Microservices with Spring Cloud
A deep-dive into the Microservice architectural style, and how to implement it with Spring technologies. 

## What are Microservices
**Best describe as:**
* An architectural style
* An alternative to more traditional 'monolithic' applications
* Decomposition of single system into a suite of small services, each running as independent processes and intercommunicating via open protocols.
* Fine Grained SOA - Adrian Cockroft (Netflix)

## Spring Boot
Spring boot is all about getting a Java Spring application up and running very quickly.

**Running Spring Boot:**
* Spring Application
  - Created Spring Application Context
* Created Spring Application Context @SpringBootApplication
  - Combination of @Configuration (Java equivalent of <beans> file
  - ... And @ComponentScan (Looks for @Components)
  - ... And @EnableAutoConfiguration (Examines ApplicationContext & classpath; Creates missing beans based on intelligent defaults)

## Spring Cloud
The goal is to address the needs of cloud based applications. 
Spring Cloud is a sub-project within Spring IO Umbrella. And is itself an umbrella project.
Spring Cloud addresses common patterns in distributed computing.
Spring Cloud is based on Spring Boot.

### Spring and NETFLIX since 2017
Eureka -> Eureka \
Archaius -> Spring Cloud Config \
Ribbon -> Spring Cloud Load Balancer \
Zuul -> Spring Cloud Gateway \
Hystrix -> Resilience4J / Spring Cloud Circuit Breaker \
Hystrix Dashboard -> Micrometer \
Turbine -> Micrometer

### DevTools
Optional dependency.
Automatically restarts applications aftermost code changes.
```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-devtools</artifactId>
	<optional>true</optional>
</dependency>
```
### Spring Cloud Configuration
(Centralized Version Configuration)
Provides centralized, externalized, secured, easy-to-reach source of application configuration.

### Spring Cloud Bus
Provides simple way to notify clients to config changes

### Spring Cloud Netflix Eureka
Service Discovery - Allows applications to register themselves as clients






