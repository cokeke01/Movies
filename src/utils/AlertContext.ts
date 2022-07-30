import React from 'react';
const AlertContext = React.createContext(() => {});
export default AlertContext;
//the purpose of this context is to allow us call a function from a different component on Landpage, so that when a movie is deleted, it auto calls the function to reload the movie list without refreshing the landing page
// that way only the component gets updated.
