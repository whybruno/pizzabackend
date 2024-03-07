const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to read user input
function readInput(question) {
  return new Promise((resolve) => {
    reader.question(question, (answer) => {
      // Trim leading/trailing whitespace
      resolve(answer.trim());
    });
  });
}

// Function to create a pizza object
function createPizza(productName, smPrice, lgPrice, imageUrl, ingredients) {
  return {
    productName,
    smPrice,
    lgPrice,
    imageUrl,
    ingredients,
  };
}

// Function to generate the JSON file
async function generateJSON() {
  const pizzas = [];

  // Loop for adding multiple pizzas
  while (true) {
    const addMore = await readInput('Do you want to add another pizza (y/n)? ');

    if (addMore.toLowerCase() !== 'y') {
      // Exit loop if user doesn't want to add more
      break;
    }

    const productName = await readInput('Product name: ');
    const smPrice = await readInput('Small size price: ');
    const lgPrice = await readInput('Large size price: ');
    const imageUrl = await readInput('Image URL: ');
    const ingredients = [];

    while (true) {
      const ingredient = await readInput('Enter ingredient name (or leave blank to finish): ');

      if (!ingredient) {
        // Exit ingredient loop if user leaves blank
        break;
      }

      ingredients.push(ingredient);
    }

    pizzas.push(createPizza(productName, smPrice, lgPrice, imageUrl, ingredients));
  }

  // Write JSON data to file
  const fs = require('fs');
  fs.writeFile('pizzas.json', JSON.stringify(pizzas, null, 2), (err) => {
    if (err) throw err;
    console.log('JSON file generated successfully!');
  });
  // Close the readline interface
  reader.close();
}

// Start the generateJSON function
generateJSON();
