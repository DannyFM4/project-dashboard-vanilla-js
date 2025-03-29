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

// Task 4: Display the Products


// creates a function to display the product images
function displayProducts(products) {
    // grabs the container by using its ID
    const container = document.getElementById('product-container');

    // uses try and catch to display the product images
    try {
        // goes through the first 5 products
        products.slice(0,5).forEach(product => {
            const div = document.createElement('div'); //creates a div
            // makes the inner html content the name, price, and image
            div.innerHTML = `<h3>Product: ${product.fields.name}</h3><p>Price: $${product.fields.price}</p><img src="${product.fields.image[0].url}" alt="${product.fields.image.url}" />`;
            container.appendChild(div); // appends the container by adding the div
        });
    } catch (error) { // display error message if there is something wrong
        container.innerHTML = `<p style="color: red;">Failed to load posts: ${error.message}</p>`;
    };

    
};

// creates function to handle the error
function handleError(error) {
    //logs the error message in the console
    console.log('An error occured', error.message);
    throw error;
};


// Task 6: Call Your Fetch Functions

// calls the function
fetchProductsThen();
fetchProductsAsync();

