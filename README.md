# [Fidelma](https://github.com/The-Greatest-Team/comp30022)
This is the repo for comp30022 IT Project, Team 029 -- The Greatest Team

## Check List
- [ ] Requirement
- [ ] How to start the app
- [ ] Environment Variables
- [ ] Documentation
- [ ] Future Improvement

## Requirements

1. Download node.js and npm from https://nodejs.org/en/download.
2. Download IntelliJ IDEA from https://www.jetbrains.com/idea/download.
3. Update JDK to version 16 or later.
4. Has a valid Gmail and MongoDB account.


## How to start the app?
1) open the whole project with IntelliJ IDEA, go to BackEnd/src/main/java/com/thegreatestteam/backend/BackEndApplication to run the main function, if SpringApplication is unrecognised, check "BackEnd Maven instruction" below to recognised it.
2) open the react-frontend file with Vscode(other tools with terminal also fine), if it's first time run, run 'npm install' to install all the dependency first(if see few warning with word 'deprecated', it's fine to continue, this is because the version we choosed is bit old, we considering to change to a newer version in next few sprint, but for now, all the function works fine with this a bit old version), then run 'npm start run' to run the project, the web app is using localhost:3000, the route of each page is define in the App.js.

### BackEnd Maven instruction 

If SpringApplication is unrecognised, navigate to the backend folder and rightclick "pom.xml", 
select "add as Maven Project". Then right click again the pom.xml and select Maven --> Reload Project


## Environment Variables:
- Frontend:
  ```
  REACT_APP_API_URL=http://localhost:8080
  ```
- Backend:
  ```
  MONGO_USERNAME=<mongo-usrname>
  MONGO_PASSWORD=<mongo-pwd>
  APP_URL=http://localhost:3000
  JWT_SECRET=crm
  ```

- Mongo DB Account
   ```
   Username: thegreatestteam
   password: VzI1YYho9OUMlj6R
   ```

## Documents:
- Jira: https://zizhzhang.atlassian.net/jira/software/projects/TEAM/boards/1
- Confluence: https://zizhzhang.atlassian.net/wiki/spaces/THE/pages/65538/This+is+the+Confluence+space+for+Team029+----+THE+GREATEST+TEAM

## Future Improvement:



