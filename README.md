# [Fidelma](https://github.com/The-Greatest-Team/comp30022)

Link: 

### Introduction

This application is a restaurant management system built for the restaurant Fidela. It includes a variety of functionalities for both customers and staff end. 
For example, customers can place orders. Staff can manage dishes and ingredients.
For more, visit (https://zizhzhang.atlassian.net/wiki/spaces/THE/pages/2785472/Requirements) for all user stories.

The backend server uses Spring Boot framework and provides restful API service that the React frontend uses. The database used is MongoDB. The project is deployed to two Heroku apps


## Check List
- [ ] Requirement
- [ ] How to start the app
- [x] Environment Variables
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
  frontend.host.local=http://localhost:3000
  frontend.host.heroku=https://fidelma-reactjs.herokuapp.com
  frontend.host.heroku2=http://fidelma-reactjs.herokuapp.com
  ```
- Backend:
  ```
  spring.data.mongodb.uri=mongodb+srv://app:<password>@cluster0.9kzpmzz.mongodb.net/<<Database name>>?retryWrites=true&w=majority
  spring.servlet.multipart.max-file-size=2MB
  spring.servlet.multipart.max-request-size=2MB
  spring.servlet.multipart.enabled=true
  
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
- staff side can modify the profile

- responsive design, make sure the website works well on mobile, desktop and tablet

- add more animations make the loading smoother

- add register function for staff to create account

- add functionality that staff can make few dish into discount mode

- improve home page

- make the main menu is dynamic on the type

- Add alert system(maybe with voice) on the staff side when new order been send to staff side



