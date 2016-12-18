# PROJECT DESCRIPTION

This is a simple REST server API using node.js and vanilla JavaScript. This project creates, displays and deletes records of different cheeses. It was created as a project during week two of Code Fellows 401 JavaScript class.

### HOW TO GET UP AND RUNNING

Clone this repository.
``` JavaScript
  cd /lab-megan
  npm i
```
Open two terminal windows. In one navigate to the project root. To start the node server type:
``` JavaScript
  node server.js
```
### HOW TO MAKE REQUESTS

The second terminal window will be used to make posts, requests and deletions to the records.

##### POST
To Create A Cheese
``` JavaScript
  http POST localhost:8000/api/cheese color="<color>" pokableness="<pokableness>"
```
This will return your newly created cheese record along with a unique id. You will also get a 400 status message.


##### GET
To Get A Cheese Record Back
``` JavaScript
  http localhost:8000/api/cheese?id=<unique id you know exists>
```
This will return the record of the cheese as well as a 400 status message.

##### DELETE
To Delete A Record Of A Cheese
``` JavaScript
  http DELETE localhost:8000/api/cheese?id=<unique id you know exits>
```
This will return a status code of 204.

If you search for a record of a cheese that does not exist or has been deleted you will get a 404 error. If you set the parameters for creating a new cheese incorrectly you will get a 400 error.

### TO USE THIS API IN YOUR PROJECTS

Clone this repository and run the following:
``` JavaScript
  npm i
  npm i -D mocha chai superagent gulp gulp-mocha gulp-eslint
```
