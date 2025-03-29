// Task 2: Fetch Products with .then()

// gives a variable the value of the url
const BASE_URL = 'https://www.course-api.com/javascript-store-products';

// creates a function that uses fetch, then, and catch;
function fetchProductsThen() {
    // fetches the url
    return fetch(BASE_URL)
        // uses a then and if statement to throw an error if the response is not ok
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            // return the response
            return response.json();
        })
        // goes through each product and logs its name in the console
        .then(datas => {
            datas.slice(0,12).forEach(product => {
                console.log(product.fields.name);
            })
        })
        // catches the error and logs the message in the console
        .catch(error => {
            console.log('Fetch failed:', error.message);
            throw error;
        });
};

// calls the function
fetchProductsThen();

// Task 3: Fetch Products with async/await

//creates an async function that uses try and catch to grab the url and runs helper functions
async function fetchProductsAsync() {
    try {
        //grabs the url
        const respond = await fetch(BASE_URL);

        //uses if statement to show status if there is an error
        if (!respond.ok) {
            throw new Error(`Error: ${respond.status}`);
        }

        //assigns the variable the respond json
        const products = await respond.json();
        displayProducts(products); // call the function
    } catch (error) {
        //sends the catch to a helper function
        handleError(error);        
    };

    
};

// calls the function
fetchProductsAsync();