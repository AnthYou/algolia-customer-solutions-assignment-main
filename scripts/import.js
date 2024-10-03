require('dotenv').config();
const algoliasearch = require('algoliasearch');
const products = require('../data/products.json');

// Apply a 20% discount on camera products
const updatedProducts = products.map((product) => {
  if (product.hierarchicalCategories.lvl0 === 'Cameras & Camcorders') {
    product.price = Math.floor(product.price * 0.8);
  }

  return product;
});

// Connect and authenticate with your Algolia app
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);

const index = client.initIndex(process.env.ALGOLIA_INDEX);

// Send updatedProducts to Algolia
const processRecords = () => {
  return index.saveObjects(updatedProducts, {
    autoGenerateObjectIDIfNotExist: true, // Cette option crée automatiquement un ID si nécessaire
  });
};

processRecords()
  .then(() => console.log('Successfully indexed objects!'))
  .catch((err) => console.error(err));
