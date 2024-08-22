// prompt user for flavors
const flavors = prompt("Please enter a list of comma separated flavors.",
    "vanilla, strawberry, chocolate, coffee, berry, cookie dough"
);

// parse input into an array of flavor
const inputFlavors = flavors.split(",")

// create object for flavors
const froyo = {};

// you are looping through the array
function yogurtFlavors(){


for (let i = 0; i < inputFlavors.length; i++) {
    // loop of array and determine if flavors exists and increase count
    if (froyo[inputFlavors[i]]) {
        froyo[inputFlavors[i]] ++
    }
    // does the key vanilla exist in my froyo object?
    // if not create key and set value to 1
    else {
        froyo[inputFlavors[i]] = 1
    }

    // if key vanilla does not exist , increase value by 1
}
console.table(froyo)
}
yogurtFlavors()
const varieties = {
    vanilla: 3,
    strawberry: 3,
    chocolate: 3, 
    coffee: 4,
    berry: 4,
    cookiedough: 5
};