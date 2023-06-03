import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import "./style.scss"

const TermsOfuse = () => {
    return (
        <ContentWrapper>

            <div className='div1'>
                <span className='title'>Terms Of Use</span>

            </div>
            <div className="div2">
                <p className='paragraph'>The web app we are creating is a basic movie application that interacts with the TMDB (The Movie Database) API. It is built using ReactJS, a popular JavaScript library for building user interfaces. </p>
                <p className='paragraph'>The main functionality of the app includes:</p>
                <p className='paragraph'>Displaying popular movies: When you visit the home page, the app sends a request to the TMDB API to fetch a list of popular movies. The response is then used to display the movie titles and overviews on the page.</p>
                <p className='paragraph'>Movie details: Clicking on a movie title will take you to the movie details page. The app sends another API request to retrieve the specific details for the selected movie, such as the title, overview, and poster image. The details are then displayed on the page.</p>
                <p className='paragraph'>Browse popular movies: Users can visit the home page of the app to browse through a list of popular movies. They can read the movie titles and overviews to get a sense of what the movies are about.</p>
                <p className='paragraph'>Movie details: When users find a movie that interests them, they can click on the movie title to view more details. The app will display information such as the movie's title, overview, and poster image. This helps users get a better understanding of the movie before deciding whether to watch it.</p>
                <p className='paragraph'>Search functionality: You can enhance the app by adding a search feature, allowing users to search for specific movies by title, genre, or other criteria. This would provide a more personalized movie browsing experience.</p>
                <p className='paragraph'>Favorite lists: Users could have the option to create and manage their favorite movie lists within the app. They can add movies they like to their lists, making it easier to keep track of movies they want to watch or have already watched.</p>
                <p className='paragraph'>Recommendations: Using the TMDB API, you can implement a recommendation system based on user preferences and movie ratings. This can provide personalized movie recommendations to users based on their previous interactions with the app.</p>
                <p className='paragraph'>User reviews and ratings: You can allow users to leave reviews and ratings for movies they have watched. This can create a community-driven aspect to the app, where users can share their opinions and help others make informed decisions.</p>
            </div>
        </ContentWrapper>
    )
}

export default TermsOfuse