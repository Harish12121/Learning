// Define an array of objects
const fruits = [
    { name: 'Apple', color: 'Red', quantity: 10 },
    { name: 'Banana', color: 'Yellow', quantity: 5 },
    { name: 'Orange', color: 'Orange', quantity: 8 }
  ];
  
  // Function to filter fruits by color
  const filterByColor = (fruitsArray, color) => {
    return fruitsArray.filter(fruit => fruit.color === color);
  };
  
  // Callback function to log the filtered fruits
  const logFilteredFruits = (filteredFruits) => {
    console.log("Filtered fruits:", filteredFruits);
  };
  
  // Filter fruits by color and log the result
  const desiredColor = 'Red';
  const filteredFruits = filterByColor(fruits, desiredColor);
  logFilteredFruits(filteredFruits);
  