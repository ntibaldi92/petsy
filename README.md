#Petsy

 Petsy is a single-page web application for listing and browsing adoptable pets. It was inspired by Etsy, and was built using Ruby on Rails on the back-end, while the front-end is handled by React.js and Flux. You can visit Petsy live at petsypets.herokuapp.com.


###Homepage:
![Image of Homepage]
(https://github.com/ntibaldi92/petsy/blob/master/docs/images/Screen%20Shot%202016-06-09%20at%204.35.13%20PM.png)

###Registration Page:
![Image of Registration Page]
(https://github.com/ntibaldi92/petsy/blob/master/docs/images/Screen%20Shot%202016-06-09%20at%204.35.29%20PM.png)

###Favorites Page:
![Image of Favorites Page]
(https://github.com/ntibaldi92/petsy/blob/master/docs/images/favorites.png)

###Pet Page:
![Image of Pet Page]
(https://github.com/ntibaldi92/petsy/blob/master/docs/images/show.png)

##Technical
Petsy uses a single flexible React component to render the indexes on the various display pages (created pets, favorite pets, filtered pets, and index). This was somewhat difficult to implement initially, but allows for easy addition of new features.

Petsy makes regular calls to the Petfinder API to display real adoptable pets in the NYC area. Users can email the rescue organization directly to inquire about a pet.

##Features
- Sign up/in, with optional Google/Facebook authentication
- Pets can be viewed be category
- Users can view pet details, and contact the pet's rescue organization
- Users can list pets for adoption
- Users can edit and delete created listings
- Pets are searchable by name, age, description, etc
- Pets can be added to favorites and are listed in a separate view
- Database was seeded with real adoptable pets from Petfinder.com

##Languages
- Ruby
- JavaScript
- HTML
- CSS

##Frameworks
- React.js
- Rails

##Libraries and Technologies
- BCrypt
- Flux
- Paperclip
- PgSearch
- Google and Facebook OmniAuth
- Webpack
- React Router
- Petfinder API

##To Do
- [ ] Allow users to tag pets on creation
- [ ] Show "recently viewed pets" on Homepage
- [ ] Show "similar pets" on show page
- [ ] User profile pages, with avatar
- [ ] Users can send private messages
