// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. 
// Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
// and returns the maximum number of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts 
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

// первый способ, но через него не решила:

function cakes(recipe, available) { // это ассоциативный массив
    var newArrAssRecipe = Object.entries(recipe); // преобразовала объект recipe в Массив пар ключ-значение
    // 0: (2) ["flour", 500]
    // 1: (2) ["sugar", 200]
    // 2: (2) ["eggs", 1]
    var nameRecipe = newArrAssRecipe[0][0];
    var quantityRecipe = newArrAssRecipe[0][1];
    console.log(nameRecipe);
    console.log(quantityRecipe);

    var newArrAssAvailable = Object.entries(available); // преобразовала объект available в Массив пар ключ-значение
    // 0: (2) ["flour", 1200]
    // 1: (2) ["sugar", 1200]
    // 2: (2) ["eggs", 5]
    // 3: (2) ["milk", 200]
    var nameAvailable = newArrAssAvailable[0][0];
    var quantityAvailable = newArrAssAvailable[0][1];
    console.log(nameAvailable);
    console.log(quantityAvailable);
}
cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });

// второй способ:

function cakes(recipe, available) {
    for (var key in recipe) {
        console.log("key:" + key + " av:" + available[key]);
    }
}
cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
// key:flour av:1200
// VM1360:3 key:sugar av:1200
// VM1360:3 key:eggs av:5

// третий способ:

function cakes(recipe, available) {
    var arrRecipe = [];
    var arrAvailable = [];

    var arrRecipeNumber = [];
    var arrAvailableNumber = [];

    var finalSum = [];

    for (var key in recipe) {
        arrRecipe.push(key);
        var nameRecipe = key;
        arrRecipeNumber.push(recipe[key]);
    }

    for (var key in available) {
        arrAvailable.push(key);
        var nameAvailable = key;
        arrAvailableNumber.push(available[key]);

    }
    for (var i = 0; i < arrRecipe.length; i++) {
        var finded = arrAvailable.indexOf(arrRecipe[i]);

        if (finded == -1 || arrAvailableNumber[finded] < arrRecipeNumber[i]) {
            return 0;
        } else if (arrRecipeNumber[i] > arrAvailableNumber[finded]) {
            var delRecipe = Math.floor(arrRecipeNumber[i] / arrAvailableNumber[finded]);
            finalSum.push(delRecipe);
        } else {
            var delAvailable = Math.floor(arrAvailableNumber[finded] / arrRecipeNumber[i]);
            finalSum.push(delAvailable);
        }
    }
    finalSum.sort(function (a, b) {
        return a - b;
    });

    return finalSum[0];
}

cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
cakes({ "sugar": 1, "butter": 66, "cream": 20 }, {
    "cocoa": 8500, "chocolate": 7200, "butter": 7800, "apples": 1900,
    "crumbles": 5400, "milk": 9400, "pears": 6300, "nuts": 700, "flour": 2900, "cream": 700, "oil": 3400, "sugar": 100, "eggs": 7900
});
