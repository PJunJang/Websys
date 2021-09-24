
Name : Paul Jang
Project : Lab2
<
  <Collaborators : Lubna, Rex, Chloe, Paul(Me)>
  <Resources : https://stackoverflow.com/questions/13854159/how-to-get-class-id-of-a-button-in-jquery
                https://api.jquery.com/id-selector/
                https://www.w3schools.com/jquery/jquery_selectors.asp
                https://stackoverflow.com/questions/3698200/window-onload-vs-document-ready#:~:text=The%20ready%20event%20occurs%20after,event%20is%20specific%20to%20jQuery.
                >
                
    <
      As in a group lab project, I tried to implement javascript/jquery functions.
      Since we wanted to hide the following contents hidden as we first open the page : 
          1. The Preamble contents
          2. The Preamble recap
          3. Article 1-7 recaps
          4. Amendment 1- 10 recaps
        I placed each button before the contents so that user could click on the button to view desired content.
        We got stuck at how to make these hidden as default when the page is first opened. 
        We first tried onload jquery function, but since it didn't work with our web, so I replaced the function using 
        '$(document).ready(function(){} )' to solve the problem.
        In js file, as we assigned all different id tags for each content, we had to go over and create multiple functions as the number of the contents to be handled.
        At the end, the implementation of buttons with functions resulted in as we intended.
    >
>
