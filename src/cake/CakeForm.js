import { useState } from "react";

const CakeForm = ({listOfCakes, setListOfCakes }) => {
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedCakes = [...listOfCakes];
        const newCake = {
            cakeName: cakeName,
            ingredients: ingredients,
            price: price,
            rating: rating
        };
        updatedCakes.push(newCake);
        setListOfCakes(updatedCakes);

    }


    return ( 
        <>
            <h2>Add a new cake</h2>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="cakeName"
                    placeholder="Cake name"
                    value={cakeName}
                    onChange = {(e) => setCakeName(e.target.value)}/>
                <input 
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients"
                    value={ingredients}
                    onChange = {(e) => setIngredients(e.target.value.split(", "))} />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={price}
                    onChange = {(e) => setPrice(e.target.value)} />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={rating}
                    onChange = {(e) => setRating(e.target.value)} />
                <input type="submit" value="submit" />
                
            </form>
        </>
     );
}
 
export default CakeForm;