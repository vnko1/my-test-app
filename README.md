# Tweets test app

This project was created with
[Vite](https://vitejs.dev/)

This project implements the functionality of tracking and saving the status of tweet subscriptions. The user can subscribe to the selected card by clicking the "Follow" button. At the same time, the color and text of the button change to "Following", and the number of followers increases by one. When the page is updated, the final result of the user's actions is saved, saving the state of the button and the number of followers. Clicking the button again causes a return to the original state, changing the text and color of the button and decreasing the number of followers by one. Tweets to which a user subscribes are stored in the browser's local storage.

## FEATURE

- Subscribe to tweets using the "Follow" button and change the status of the button to "Following".
- Saving the final state of subscriptions after refreshing the page.
- Return to the initial state when you press the "Follow" button again.
- Displaying the number of followers and changing them when subscribing and unsubscribing.
- Filtering projects by subscription (show all, show only "Follow", show only "Following").

## TECHNOLOGY STACK

- React
- React Router DOM
- Material-UI (MUI)
- RTQ Query
- GitHub
