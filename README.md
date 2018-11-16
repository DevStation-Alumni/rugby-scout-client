# Rugby Scout Client
A web application that will track Rugby stats and players to make information accessible to college recruiters. Create an interface that will allow rugby, teams, coaches and players to upload a profile with stats, videos.
*****

# About Us
Created by: [Sharon Miller](https://github.com/SharonMiller), [Connor Crossley](https://github.com/Concross), [Alex Hanson](https://github.com/alexlhanson)

## Table of Contents
<!-- TOC -->

- [Overview](#Overview)
- [Current Version](#Current)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#Installation)
- [Deployment](#Deployment) 

# Overview

* This front end provides a client web application that allows an authenticated user to create and update a profile and stats for to show their achievments to rugby recruiters. It also alows any user to view player profiles, stats and rankings.  

 # Current Version (1.0.0)
  * The current version of this program is designed to create, save, update and display  a stats and profiles for rugby players.

 # Installation
  Set up of Local Development Environment:
  * You must download, install, configure, and run both a front end application and the supporting backend infrastructure for the local development environment.  
  * **Prerequisites**:  You need to install mongo database prior to the installation of the backend on your local environment. You may find more info on this process directly from mongo at:
    * https://docs.mongodb.com/manual/
    * https://docs.mongodb.com/manual/mongo/  
  * ### Back-End:   
    * See info the Readme at our [rugby scout server git repo](https://github.com/TeamAquamarine/rugby-scout-server)  
      

  * ### Front-End:   
    * Install:  
      * navigate to https://github.com/TeamAquamarine/rugby-scout-client  
      * clone this repo by clicking on the "clone or download" button and save the link.
      * In your terminal, create a directory where you would like to save the project.
      * enter "git clone", enter a space, and then paste the link you copied into the terminal and then press enter
      * cd to the newly created directory
      * in your terminal, type "npm init" and press enter
      * once complete, type "npm install" so that all the npm modules required for the backend are installed.
    * Configure and Run:
      * make sure the you have installed the backend
      * In your terminal, navigate to the root directory of your front-end repo.
      * type in *npm run watch*  which will launch webpack and completes your build. 
      * open another command line window and navigate to the root directory of the rugbe-scout-client and type in *node run watch* .  
      * Your browser should launch the site automatically  
         

  ****

  # Deployment
  * The front end of this application is currently deployed on netlify and the backend is being deployed on Heroku. Assets are being hosted on S3 and database is hosted with Mongo Atlas.
    
  * When we push a git branch to master on Heroku it is automatically run through tests and it is deployed to the Heroku application.   
   
# Technologies
The primary technologies leveraged in the front-end of this app include:
- React
- Redux
- React BootStrap
- Jest/Enzyme/Sinon
- SCSS
