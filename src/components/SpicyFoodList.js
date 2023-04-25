import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data/index";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);

    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray) = [...foods, newFood];
  }
  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }    
//[1, 2, 3].filter((number) => number !== 3);// => [1,2]


  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

const [foodType, setFoodType] = useState("All");
  const sorted = (type)=>{
    setFoodType(type.target.value)
  }

  const foodDisplay = foods.filter(food=>{
    return (foodType==="All")? true : food.cuisine === foodType
  })


const foodList = foods.map((food) => (
    <li key={food.id} onClick={ ()=> handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

return (
  <div>
    <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={(e)=>sorted(e)}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>
    <ul>{foodList}</ul>
  </div>
  
);

export default SpicyFoodList;
