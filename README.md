# Connecting to MongoDB Atlas

# Create models


# Create vector search  index for the current collection
    - go to collection
    - go to indexes tab
    - select "search index"
    - click on "Create vector search index"
    - select "vector search"





























# Keyword based search

Query: "password reset"

Sentence 1: "how to reset your password" → MATCH (exact terms)
Sentence 2: "forgotten credentials recovery" → NO MATCH (different terms)














# Semantic search

Query: "password reset" → [0.2, -0.1, 0.8, 0.3, ...] (embeddings)

Sentence 1: "how to reset your password" → [0.21, -0.09, 0.79, 0.31, ...] → MATCH (0.98 similarity)
Sentence 2: "forgotten credentials recovery" → [0.22, -0.11, 0.81, 0.29, ...] → MATCH (0.94 similarity)
Sentence 3: "change your login access" → [0.19, -0.08, 0.77, 0.32, ...] → MATCH (0.91 similarity)



























# Statements to store

1. Java is widely used for building enterprise backend applications.

2. MongoDB stores data as flexible JSON-like documents.

3. React is a JavaScript library used to build interactive user interfaces.

4. Express is a lightweight Node.js framework for creating web APIs.

5. Python is commonly used for data science, automation, and AI applications.

6. PostgreSQL is a relational database that organizes data using tables and SQL.

7. Docker packages an application and its dependencies into portable containers.

8. JWT is commonly used to authenticate users in web applications.

9. Redis is an in-memory data store often used for caching and fast access.

10. Git is a version control system used to track changes in source code.




# Queries to retrieve

Query 1:
"Which technology can I use to create backend services in JavaScript?"

Expected:
Express is a lightweight Node.js framework for creating web APIs.

Query 2:
"I need a database that stores information as documents instead of rows."

Expected:
MongoDB stores data as flexible JSON-like documents.

Query 3:
"What can I use to remember changes made to my source code?"

Expected:
Git is a version control system used to track changes in source code.

Query 4:
"I want to run my application with all required dependencies anywhere."

Expected:
Docker packages an application and its dependencies into portable containers.

Query 5:
"Which database is good for structured tabular data and SQL queries?"

Expected:
PostgreSQL is a relational database that organizes data using tables and SQL.

Query 6:
"What technology can temporarily keep frequently accessed data in memory?"

Expected:
Redis is an in-memory data store often used for caching and fast access.

Query 7:
"How can my backend verify that a user is logged in?"

Expected:
JWT is commonly used to authenticate users in web applications.

Query 8:
"What is useful for creating interfaces in the browser?"

Expected:
React is a JavaScript library used to build interactive user interfaces.

Query 9:
"Which language is popular for artificial intelligence and automation?"

Expected:
Python is commonly used for data science, automation, and AI applications.

Query 10:
"What technology is commonly used for large business backend systems?"

Expected:
Java is widely used for building enterprise backend applications.

# Excellent for Demo

Stored document:
"Git is a version control system used to track changes in source code."

Query:
"What can I use to remember changes made to my source code?"
