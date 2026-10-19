
# Bank Management System

## About the Project
The Bank Management System is a web-based application developed using Java Spring Boot and MySQL. It provides a simple interface for administrators and customers to access banking features.

## Features
- Admin Login
- Customer Login
- Customer Dashboard
- Account Information Management
- Backend integration with MySQL
- User-friendly web interface

## Technologies Used
- Java
- Spring Boot
- MySQL
- HTML
- CSS
- JavaScript
- Maven
- Git and GitHub

## Project Structure
```text
demo/
├── src/
│   ├── main/
│   │   ├── java/com/example/bankmgmt/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   └── service/
│   │   └── resources/
│   │       ├── static/
│   │       └── application.properties
│   └── test/
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

## Prerequisites
Install the following before running the project:
- Java JDK 21
- MySQL Server
- Visual Studio Code (or another Java IDE)

## How to Run the Project

1. Clone or download this repository.
2. Create a MySQL database named `bankdb` (or use the database name configured in your application).
3. Configure the database URL, username, and password in `src/main/resources/application.properties`.
4. Open the project folder in a terminal.
5. Run the application:

   Windows:
   ```powershell
   .\mvnw.cmd spring-boot:run
   ```

6. Open your browser and visit:

   http://localhost:8080

## Database Configuration
Configure your MySQL connection details in `application.properties`. Never publish database passwords or other secrets in a public repository.

## Future Enhancements
- Secure authentication and password handling
- Transaction history
- Deposit and withdrawal features
- Improved validation and error handling

## Author
GitHub: https://github.com/kiruthiganagappan

## License
This project is intended for educational purposes.
