function sandwhich(ingredients) {
    console.log("Ingredients in sandwhich");
    ingredients.forEach(function (ingredient) {
        console.log("- " + ingredient);
    });
}
;
sandwhich(["Chicken", "cheese", "onion\n"]);
sandwhich(["beef", "tomato\n"]);
sandwhich(["mayo"]);
