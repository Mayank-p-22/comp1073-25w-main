/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector('header');
const section = document.querySelector('section');

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // STEP 4: Store the URL of a JSON file in a variable */
    const requestURL = "js/i-scream.json";
    
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(requestURL);
    
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    
    // STEP 7: Capture the returned Response object and convert to a JSON object using json()
    const iScream = await response.json();
    
    // STEP 8: Output the iScream JSON object to the console 
    console.log(iScream);
    
    // STEP 9a: Invoke the populateHeader function
    populateHeader(iScream);
    
    // STEP 10a: Invoke the showTopFlavors function
    showTopFlavors(iScream);
}

// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonObj) {
    // Create the H1 element
    let headerH1 = document.createElement('h1');
    
    // Grab the company name from the JSON object and use it for the text node
    headerH1.textContent = jsonObj.companyName;

    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(headerH1);   
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
    // STEP 10c: Attach the JSON topFlavors object to a variable
    let topFlavors = jsonObj.topFlavors;

    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {
        // STEP 10e: Build HTML elements for the content
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let ul = document.createElement('ul');

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = topFlavors[i].name;
        img.setAttribute('src', `images/${topFlavors[i]["image"]}`);
        img.setAttribute('alt', topFlavors[i].name); // Added alt text for accessibility

        // STEP 10g: Build a loop for the ingredients array in the JSON
        let ingredients = topFlavors[i].ingredients;
        for (let j = 0; j < ingredients.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = ingredients[j];
            ul.appendChild(listItem);
        }

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(ul);

        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    }
}
