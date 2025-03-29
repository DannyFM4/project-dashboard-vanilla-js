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

async function fetchProductsAsync() {
    try {
        const respond = await fetch(BASE_URL);

        if (!respond.ok) {
            throw new Error(`Error: ${respond.status}`);
        }

        const products = await respond.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);        
    };

    
};


fetchProductsAsync();