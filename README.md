# CS-465

In this class, we were given a static HTML website, which we hosted locally, and were instructed week by week on how to convert the site to a MEAN stack site with an Express customer frontend site and an Angular SPA admin site. We also spent time practicing source control, which is why this project has it's own repository.

For this project, we created two sites; a customer facing site built using Express HTML, and a SPA admin site using Angular. When we were first given the project, it was set up as a static HTML site driven by JavaScript. The reason for upgrading from the original JavaScript site was to create a more modular site that could be more easily edited and updated by the site owners. Express gives us the use of many different tools to create a modular site. In our HTML, we define handlebars and functions that iterate over our database objects. We also created API endpoints to communicate with out server admin site, which was built using Angular. Angular gives us the option to build an SPA, which gives us fast access to the whole site. This site passes objects along through the API endpoints to the site drivers and on to the database. 

For our database, we used MongoDB, a NoSQL databse. Mongo gives us a lot of advantages, including easy integration with Express, but the biggest is passing query results along as JSON. JSON is a very convenient format to iterate over, and means we can access information, whether uniform or not, over any place in the site we need. One of the big chnaged we were able to make was the editing of the database over the SPA admin site. We were able to construct JSON objects to add to the database using a form fillable page on the SPA admin site. This form collects the data into a JSON object, passes it along to the Express site which passes it to MongoDB through the Mongoose API. All these changes were tested using a wide series of console and terminal print statements, and with catch statements that print out error information generated by Express and Angular. 

As for the impact on this class on my future goals, I originally had very little interest in working in web development. This class helped me see that there is a lot more to site development and optimization than I had originally thought. While I think this kind of programming still isn't something I'm particularly interested in pursuing professionally, I learned some important lessons about how web development touches other kinds of programming, and I got some valuable experience in developing API endpoints, which I think will help in many other kinds of programming I may try. 
