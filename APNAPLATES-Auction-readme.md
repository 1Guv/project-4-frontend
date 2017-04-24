# APNAPLATES Auction

## A Number Plate Auction

######GA WDI-25 London - Project 4:


This app allows my customers to add their personal number plates to an online auction. Potential buyers can then put a bid on a plate, before the timer runs out.

I currently run an online business called [APNAPLATES](https://www.apnaplates.com) which is #1 for Advertising and Selling Asian Number Plates in the UK. The first part of the business name 'APNA' means 'ours' in punjabi and the latter word is self explanatory. The webiste provides an online platform for my customers to sell their private asian number plates.

This idea was developed because my current customers provided me with some feedback and from that research I identified that their could be scope for an addittional auction platform to help my customers to sell their private number plates.

##Approach / How it works:

* When you enter the website you will be shown a splash page.
* You can then click on the 'Auction' link to see the current plates in the auction.
* You can then use the plate search to filter through the current plates.
* You can also see a timer on each plate counting down from todays date to the expiry date for that individual plate.
* If their is a plate that you like then you can click on the 'plate' image or the 'BID' button to see more details.
* Note you will not be able to bid unless you have registered.
* To register click on the 'Register' link at the top of the screen.
* Please enter all the details about you to register, please note that you have a plate to sell then you can add this on the profile page.
* Once you have registered you will be taken to the Login Page.
* Once you have logged in you will be taken to the Auction Listings page.
* Now you can bid select and bid on any plate as appropriate.
* If you click on the Profile Page link (top right) you will come to a page where you can add a plate to the auction, or see the plates that you have made bids for already.

##The build:


* For the project we used a full Express RESTful app using Angular on the frontend and then a Ruby-on-Rails API on the backend.
* Created a Rails API to deliver json data which includes token authentication, BCRYPT and JWOT with CORS.
* We used Express, Ajax, JSON, JS, HTML 5, SASS and Angular to create the frontend app.
* Used Ng-Messages for full form validation.
* Used Smart-Table to display auction plate details in a table.
* Used a combination of Bootstrap and W3.CSS for styling

* Used Balsamiq for wireframing - please screen shot below:

![Balsamiq](https://github.com/1Guv/WDI-25-Project-3/blob/master/src/images/SpeakEasy-Balsamiq-Wireframe?raw=true "Balsamiq")

* Used Trello for my project board - please see the screen shot below:

![Trello](https://github.com/1Guv/WDI-25-Project-3/blob/master/src/images/SpeakEasy-TrelloBoard.png?raw=true "Trello")

##Problems & Challenges:


During the project we encountered many problems and as a team we dealt with all of them very effeciently. Initially we did a group programming excercise where we developed the core product and reduced any GIT conflicts to a minimum. Once the core routes, controllers and the initial setup had been established we then listed out the other tasks via Trello and paired programmed the majority of them in two sub teams.

NodeMailer was an early challenge, and we implemented this successfully. The Google Maps API for the radius was also a good challenge and gave us the added functionality that we were thinking of. Another team member researched into Angular Material and provided the extra animation for all the forms for the app. 

The main blocker was time, so many things needed attention so we used Trello to document the most important tasks for MVP knowing that we could add the extra functionality once that had been completed. I also managed the team to a large extent and I beleive that my organisational and excellent time management skills gave us the edge on this project.

##If I had more time I would:

- To use more UI Bootstrap features eg Modals.
- Provide more user friendly notifications when a user sends a message to others.
- To have a separate map and profile listings page.
- To use realtime communications viia the app to each user using web sockets instead of offline email comms.
- Experiment with the color theme throughout the app.
- Make it fully responsive.
- Using RegEx to capitalising various outputs.
- We were thinking of having a video as our homepage but did not get time to find the right video.
- Styke email messages with our logo in the footer.
- Allow user to delete profile with confirmation modal.
- Show profile image in the top right when a user is logged in.


