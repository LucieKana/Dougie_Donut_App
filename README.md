# Dougie_Donut_App

Details
Dougie the Donut & Pizza Rat

donutdance .  donutrat
 

Dougie the Donut and Pizza Rat are now best buds taking New York City by storm. Now instead of causing trouble against each other, they've taken it upon themselves to cause trouble around the city! The catch is, they don't want to get caught by the police (in other words, they want to eat their cake and have it, too) so they've put their brains together to come up with a helpful app idea that will allow them to see what kind of trouble they can cause without getting thrown in jail. Let's help them build it!

Getting Started

Create a directory named complaints_app
Inside that directory, create app.js, index.html, and styles.css files
The App

Overall, what Dougie and Pizza Rat want for this app is for it to search through the 311 call data (Links to an external site.) provided by the NYC Open Data API (Links to an external site.), and display all the complaints made to the NYPD, filtered by borough. They also want to see how the police responded to the complaint, since that's what they'll use to determine whether or not they can cause the same trouble without consequences!

The Data

For this particular API, NYC Open Data, the data sent after making a fetch (Links to an external site.) call is formatted as JSON.

What is JSON?
JSON stands for JavaScript Object Notation, which simply just means the data is formatted like the JavaScript objects you've learned about! So, for example, one dataset from the API looks like:

When collapsed:

closeapi

When opened to see all the key value pairs: 

openapi

Whew, that's a lot of data! For the purposes of our app (more specifics below), however, only some of the key-value pairs are of use to us. Particularly...

borough
descriptor (which says what kind of complaint was made)
agency: "NYPD" (because we only want complaints that were handled by the police department)
resolution_description (which says how the police handled the complaint)
Working with an API

While using fetch with an API will generally follow the same format, an important thing to note about API's are that they're all different. Just because one API allows you to filter and customize the format of the returned data one way, doesn't mean another API will work the exact same. Don't fret, though! Any good API worth using will come with its own set of documentation that will aid you on how you can use it. So now's a good time as ever to get used to reading documentation.

For this lab in particular, here are some important pages you may need to look through to do this lab:

The 311 Service Requests API Documentation (Links to an external site.)
This page in particular shows an example AJAX call using jQuery. We will be using fetch instead... no need for jQuery! That URL in the code snippet could be useful though...
The 311 Service Requests Data Info Page (Links to an external site.)
Info on how to filter the API Data Being Returned (Links to an external site.)
Info on how you can Customize the API Queries More Precisely (Links to an external site.)
Now that you're armed with an API and it's documentation, as well as a general idea of what the app should do -- let's finally get onto the specifics of the app!

Minimum Viable Product (MVP)

Below is a more detailed list of what functionalities Dougie and Pizza Rat want for their app.

Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx) of New York City when they load the page
Users should also be able to see an input box where they can put in a number of how many complaints they want to see
When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
If the user doesn't input any number, make the default be 10
Remember, also, they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that particular complaint
Make sure it only toggles the response for that one complaint, not the entire list!
Example of a working app

api

 

Hungry For More?

Make it so the complaints are listed in alphabetical order
You'll notice the complaint descriptors fall under umbrella categories (e.g. "No Access", "Banging/Pounding", "Loud Music/Party", etc. etc.)
Display somewhere on the page all the categories and how many times they show up for the current list of complaints
e.g. "No Access was complained about 4 times", "Banging/Pounding was complained about 10 times", "Loud Music/Party was complained about 20 times"
Super Hungry For More?

The data provides latitude and longitude coordinates for where the complaints took place. Consider looking into geolocation and google maps so that you can display a map with a pin showing exactly where the complaint was made




Enter Web URL
Website url input
