## Recipe Raider Web App 👩🏻‍🍳👨🏻‍🍳🍽


### Brief

The proposal is a simple app which will take in a list of user ingredients and return a valid list of meals which can be consumed with the ingredients.

The app will make use of the (insert name here) library [Click here](https://tonejs.github.io/) for (doing something).

The app will have up to three one to many relationships 🍔:

* One user has many ingredients, many ingredients are input by a single user
* One meal has many ingredients, many ingredients are in one meal
* One user has many meals (options)

##MVP
Our application will comprise the following:

* A route/page with a single form to take in ingredients and a single submit button for our ingredients field to send a request
* A route/page for our search results which will return a valid recipe from the user inputted ingredients
* Our API of choice will be the [MealDb](https://www.themealdb.com/api.php) API. This API will be searchable by multi-ingredient
* A valid recipe is defined as an exact match in relation to the users form
* Test data will be hardcoded/generated in the same format as the MealDb API so that the app logic can be validated
* The MealDb API is limited to a multi-ingredient search of 3 ingredients. Therefore this will be a limitation of our MVP app
* Our app will use a relational SQL database (H2)


## Extensions
* Return the image of the meal to the front end of the app
* Implement dynamic filtering
* Remove form case sensitivity
* Include a dictionary/spell-check for the form i.e "did you mean ... ?"
* User form(s) take in speech input to return a meal - look at NLP libraries
* Expand the app to work for cocktails using the CocktailDb API 
* Allow for "americanisms" i.e eggplant/aubergine, coriander/cilantro etc
* Display additional info about the meal - calories, estimated cooking time etc
* Deploy the app on heroku
* App can suggest a random cocktail to go with the drink
* Create a "recipe of the day" as a random meal for the user
* Allow user to input dietary requirements via query strings as API fetch calls
* Use semantic UI for a visually appealing front end design/Incorporate pagination

