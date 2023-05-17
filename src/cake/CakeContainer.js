import React, { useState } from "react";
import Cake from "./Cake.js";
import CakeForm from "./CakeForm.js";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = React.useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 5
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5
			} 
		]		
	)
	const list = listOfCakes.map((cake, index) => <Cake key={index} cake={cake}/>)
  return (
    <>
		{list}
        {/* <Cake cake={listOfCakes[0]}/>
        <Cake cake={listOfCakes[1]} />
        <Cake cake={listOfCakes[1]} /> */}
		<CakeForm listOfCakes={listOfCakes} setListOfCakes={setListOfCakes}/>

		
    </>
  )
}

export default CakeContainer;