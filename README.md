> [!IMPORTANT]  
> Before starting, create a public GitHub/GitLab repository and share the link with the interviewer.

> [!TIP]  
> If you'd like to use this project as a template instead of setting up yours from scratch:
> - Create a public GitHub/GitLab repository
>   - Copy the clone URL (example: git@github.com:CoinBR/tmp.git) 
> - Clone this repository (the challenge)
>   - Navigate to its folder in the terminal
>   - Run this command with your repository URL: 
>     - `./setup_repo.sh ___YOUR_REPOSITORY_URL___`

## Code Challenge - Express

Create a simple RESTful API using Node.js and Express that allows users to manage a list of tasks. 
Each task should have the following properties:

- id (number): Unique identifier for the task
- title (string): Title of the task
- completed (boolean): Indicates whether the task is completed
The API should support the following endpoints:

GET /tasks - Retrieve all tasks
POST /tasks - Create a new task
PUT /tasks/:id - Update an existing task by ID
DELETE /tasks/:id - Delete a task by ID

#### Requirements:
- Use in-memory storage (an array) for tasks (no database required).
- When creating a new task, the id should be generated (not read from the request)
- Validate incoming data for the POST and PUT requests.
- Ensure that the API follows RESTful conventions.

---

## Running the project
- Run, in the root of the project:
  - `./run.sh`
- Follow the instructions on the script output

