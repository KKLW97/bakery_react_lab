const Cake = ({cake}) => {
  
  return (
    <div>
      <h2>{cake.cakeName}</h2>
      <ul>
        {cake.ingredients.map((ingredient, index) => (
          <li id={index}>{ingredient}</li>))}
      </ul>
      {/* <p>Ingredients: {cake.ingredients}</p> */}
      <p>Price: {cake.price}</p>
      <p>Rating: {cake.rating}</p>
    </div>
  )
}

export default Cake;