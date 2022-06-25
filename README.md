📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Week 1 Assignment: Flixster

Submitted by: Cynthia Delira

Estimated time spent: **#** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [ ] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [X] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [X] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [X] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [X] Website accounts for basic HTML/CSS accessibility features
- [X] Website should be responsive

#### STRETCH FEATURES

- [ ] Deploy website using GitHub Pages. 
- [ ] Allow user to view more details about a movie within a popup.
- [ ] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

<iframe 
src="https://drive.google.com/file/d/1KhWQ8yE-h17Isw_oZupT-n6Y-45FZAH3/view?usp=sharing" frameborder="0" 
webkitallowfullscreen mozallowfullscreen allowfullscreen 
style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
</iframe>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

There are couple of topics that helped a lot when completing the assignment was the fetch since I was able to get the api and then use this to get specific elements from the api. A second feature that helped me in this project was the addEventListener as using this I was able to this function to the specific buttons and call specific functions that are specified for each button. A feature that I felt unprepared was the map function since I had trouble at first on how I could utilize it for it go through each movie in the api. I could not figure out how to map through these elements so I used the forEach algorithm instead which was easier but I would like to do more research regarding the map algorithm and how to use it correctly.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would of have worked differently with the display of the movie image, movie title and movie rating. I realized that the way I printed it would count these three elements as their own separate box so when trying to customize the movie grid on css I had trouble organizing to have the title and ratig below the image and the next movie be displayed to the right.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Reflecting on my project demo, honestly the time spent on displaying my images took longer than I had anticipated. The reason I had trouble displaying these images was because I realized I was using the wrong url and was using the api url which was not the actual image but instead learned that I had to use the image url and simply get the poster path from the api to get to the image. One thing that I would of have liked to add to my project was a small popup that would show up when the image is click and contain further information regarding the movie.

### Open-source libraries used

- Add any links to open-source libraries used in your project.
GeeksforGeeks.com
W3Schools.com


### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I would like to give a shout out to Enrique and Paul since they helped me with the display of images and helped me with what url to use in order to retrieve these images.
