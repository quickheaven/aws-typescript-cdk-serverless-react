# Microservices with Spring Cloud
A deep-dive into the Microservice architectural style, and how to implement it with Spring technologies. (September 2024)

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

