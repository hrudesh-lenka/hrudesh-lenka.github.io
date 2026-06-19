import randomQuoteImage from "../../assests/random-quote.png"
import exerciseTrackerImage from "../../assests/exercise-tracker.png"

export const ProjectsData = [
    {
        id: 1,
        title: "Order My Food",
        about: "Food ordering platform built as Spring Cloud microservices — API Gateway, Eureka service discovery, OpenFeign inter-service calls, Resilience4j circuit breakers and Zipkin distributed tracing.",
        tags: ["Java", "Spring Boot", "Spring Cloud", "Microservices"],
        github: "https://github.com/hrudesh-lenka/OrderMyFood",
        fallbackIcon: "devicon-spring-plain colored"
    },
    {
        id: 2,
        title: "Movie Booking App",
        about: "Spring Boot REST API for booking movie tickets across PVR and Inox cinema chains, with JWT-secured endpoints, JPA/MySQL persistence and Swagger API docs.",
        tags: ["Java", "Spring Boot", "JWT", "MySQL"],
        github: "https://github.com/hrudesh-lenka/movie-booking-app",
        fallbackIcon: "devicon-spring-plain colored"
    },
    {
        id: 3,
        title: "Shopping Cart",
        about: "Spring Boot REST API for browsing products and managing a shopping cart, with a layered Controller-Service-DAO architecture and JPA/MySQL persistence.",
        tags: ["Java", "Spring Boot", "MySQL"],
        github: "https://github.com/hrudesh-lenka/shoppingcart",
        fallbackIcon: "devicon-spring-plain colored"
    },
    {
        id: 4,
        title: "Random Quote Generator",
        about: "Website built with ReactJs that fetches quotes from external api.",
        tags: ["Reactjs"],
        demo: "https://www.hrudesh.in/random-quote-machine",
        github: "https://www.github.com/hrudesh-lenka/random-quote-machine",
        image: randomQuoteImage
    },
    {
        id: 5,
        title: "Exercise Tracker",
        about: "Website that helps keeps track of exercise duration of users.",
        tags: ["NodeJs", "MongoDB", "Express.js"],
        demo: "https://boilerplate-project-exercisetracker.hrudesh.repl.co/",
        github: "https://github.com/hrudesh-lenka/boilerplate-project-exercisetracker",
        image: exerciseTrackerImage
    },
    {
        id: 6,
        title: "URL Shortener",
        about: "REST API that shortens long URLs and redirects short codes back to the original link.",
        tags: ["NodeJs", "Express.js"],
        github: "https://github.com/hrudesh-lenka/boilerplate-project-urlshortener",
        fallbackIcon: "devicon-nodejs-plain colored"
    }
]
