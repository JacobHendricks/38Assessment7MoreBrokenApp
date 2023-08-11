### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON web token

- What is the signature portion of the JWT?  What does it do?
  version of header & payload, signed with secret key

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, the payload is encoded, not encrypted

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  Create a token using jwt.sign
  Authenticate a token using jwt.verify.  If valid, store the token payload on res.locals
  You can repeat this authentication on every route using middlware.

- Compare and contrast unit, integration and end-to-end tests.
  Unit Testing tests an individual function
  Integration Testing tests the codes relationship with external dependencies
  End-to-end testing tests an application’s flow from start to end. The purpose of E2E testing is to simulate an entire real user scenario

- What is a mock? What are some things you would mock?
  Mocking is primarily used in unit testing. An object under test may have dependencies on other (complex) objects. To isolate the behavior, you replace other objects by mocks that simulate their behavior. This is useful if the real objects are impractical to incorporate into the unit test.
  These are things you would mock:
  - AJAX requests
  - Reading/Writing to files
  - Impure functions like Math.random

- What is continuous integration?
  Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle. The goal is to build better software by developing and testing in smaller increments.

- What is an environment variable and what are they used for?
  Environment variables are variables outside your application.  They are useful for setting up different configuration options for your application such as the port, Bcrypt work factor, or selecting the dev/test database.

- What is TDD? What are some benefits and drawbacks?
  Write tests before the code. Then only write the code necessary to get the tests to pass
  Benefits: Forces good architecture and forces your code to be testable.  Easier to maintain and refactor.  Makes collaboration easier and more efficient.  
  Drawbacks: A challenge to learn. It slows down development initially. Tests may be hard to write beyond the unit test level. 

- What is the value of using JSONSchema for validation?
  So user data can fail fast, before bad data gets to your db.
  To reduce amount of code for processing and validating data.
  To get a validation system that is easy to setup and maintain.

- What are some ways to decide which code to test?
  Instead of testing the database, test the API.  I think it is best to concentrate testing on the most critical components of the code.  Especially validation and authorization.  

- What does `RETURNING` do in SQL? When would you use it?
  Allows you to return data from modified rows.  The INSERT, UPDATE, and DELETE commands all have this option. Use of RETURNING avoids performing an extra database query to collect the data.

- What are some differences between Web Sockets and HTTP?
  HTTP is stateless: no remaining connection
  Websocket: connection remains open; server can automatically and immmediately push changes to the browser and from the browser to the server. Really good for real time updates.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I prefer the syntax in Flask. I think it is cleaner and flows better. I also like how SQLAlchemy makes it very easy to do transactions in the SQL database. However, because we used these tools to simplify Flask, I don't feel like I can customize a flask app as much as I can with Express. With Express I understand better how to do validation and authorization.  Although using WTForms in flask was easier, I don't know how to customize the validators as much as I do with JSONSchema. 
