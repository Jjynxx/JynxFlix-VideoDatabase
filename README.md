# JynxFlix - MEEN Stack Web Application

## Overview

JynxFlix is a full-stack web application developed as part of the COMP 206, Assignment 2 for a 'Web Development using JavaScript' class. The project utilizes 
the MEEN (MongoDB, Express, EJS, Node.js) stack to interact with the sample_mflix database, providing a platform to query and display movie information.

## Project Setup

1. Download the Assignment 2 Starter Project from Blackboard.
2. Unzip the project and navigate to the "App" folder.
3. Run `npm install` to install the required dependencies.
4. Open your browser at `localhost:3000/` to ensure successful setup.
5. Open the `routes/index.js` file and update the "author" field with your full name.
6. Initialize a local Git repository and commit your project with the message: "Initial commit."

## Assignment Tasks

### 1. Collections Route Handler

- Path: `/db/collections`
- Lists the collections available in the `sample_mflix` database.
- View collections at `localhost:/db/collections`.
    git commit -m "List collections"
  
2. Movies Route Handler
Path: /db/movies
Retrieves an array of movie objects from the movies collection.
Displays movies in the movies.ejs file.
Customize movie display with HTML and CSS.
git commit -m "Add Movies Route Handler"

4. Customize Movies Page
Modify EJS code to display key movie fields.
Customize movie display using your preferred HTML elements and CSS.
git commit -m "Customize Movies Page"

4. Add Queries
Integrate MongoDB queries for search functionality.
Design a user interface for various search queries.
Update index.js to handle requests from the user interface.
git commit -m "Add Queries"

## Some of the querries which were added:
-- Movies page -> This takes users to the movie list without any filters besides a limit of 5 movies
-- Top rated movies -> Filters movies based on how well they did using imdb ratings stored in the database
-- Text box entry -> Here user can enter the name of a movie, case sensativity is turned off to improve user experience
-- Genre dropdown -> This brings users to a filtered list where the user can select a genre from a dropdown 
    and only movies from that genre will appear
-- Movie by country checkboxes -> User can select one of 3 common countries to see movies from these countries

## Planned improvments 
--I will alter the code to have the dropdown list self populated by the database depending on which genres are present,
    rather than having to go through the list for all the different genres
--I would like to do the same with countries and languages since these can be common search filters for users
--Improve the user interface now that the application no longer has to meet assignment criteria.

Author
Sara MCHattie
Contact
For any inquiries or issues, please contact smchattie01@student.sl.on.ca.
