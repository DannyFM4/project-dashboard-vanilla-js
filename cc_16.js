// Task 2: Fetch Products with .then()

const BASE_URL = 'https://www.course-api.com/javascript-store-products';

function fetchProductsThen() {
    return fetch(BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(datas => {
            datas.slice(0,12).forEach(product => {
                console.log(product.fields.name);
            })
        })
        .catch(error => {
            console.log('Fetch failed:', error.message);
            throw error;
        });
};

fetchProductsThen();

