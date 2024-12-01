# theme
React theme in docker

## docker
- If you make any changes in docker-compose.yml or any docker file, then you have to run below commad ```docker compose build```
- To start docker ```docker compose up -d```
- To enter the react container ```docker compose exec react-app sh```

## React
Once you up the docker react app will be automatically running - so you don't need to run any command to start.

## Package
- Move to the package root directory
- Run ```npm run build```
- Move to the react project root directory 
- Run ```npm link <your-package-name>```. Your package name will be found in packages/packagename/package.json:name
- Now you can import component from your package into your reaqct project
- If you're actively developing the package and want to test changes live in your React project:
-- Open a new terminal
-- Enter to the react container ```docker compose exec react-app sh```
-- Move to the package root directory
--  run: ``` npm run watch```.Your React project will automatically pick up changes if it is running.
- After testing, you might want to unlink the package to avoid conflicts:
-- In the React project:```npm unlink <your-package-name>```
-- In the package project: ```npm unlink```