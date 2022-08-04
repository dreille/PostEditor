# How to Use

# On Load
<!-- To run the application, use the command 'npm run dev', which uses concurrently to launch both the server and frontend simultaneously.  
     The application works by first making the call to the backend, which then in turn provides the Redux Store with the data from the API. 
     The user is then able to view all of the available posts from the get go, on the left side of the page. The right side of the page is
      where posts can be edited -->

# Searching
<!-- For searching, the user is able to either search the posts by the start of the title of the post or for text that lies anywhere within the 
     title of the post, and this can be changed through the radio buttons above the search bar. Upon searching, the results are provided both within 
     a dropdown to the search bar and also on the page. Once the user has found a post they wish to edit, the user then needs to either 
     click the post itself or the title from the dropdown bar and the post and title will populate the edit fields -->

# Edit Area

<!-- Posts can populate the edit area in two ways. First, if the user wishes to populate the field by the title of the post they must 
     enter the title in the title field before clicking a post and then press the Enter button. Doing this will populate the body field
     with the post body if it is found, or it will clear the title if it is not found. Second, after clicking on a post through 
     the search functionality the edit fields are populated with the posts Title and Body automatically. After populating these fields, 
     the post title and body can then be edited, and after pressing the submit button the edits are entered into the Redux Store and will 
     be available in future searches -->

# Testing

<!-- As it stands, 'npm run test' runs the tests for the back and frontend which are found in the __tests__ folder. These tests test the server route,
     as well as the rendering of the frontend and the functionality of the reducer.>
