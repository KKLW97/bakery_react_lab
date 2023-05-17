import Cake from "./Cake";
import CakeForm from "./CakeForm";

const ListOfCakes = ({ cakes }) => {
  const cakeComponents = cakes.map((cake, index) => {
    return <Cake cake={cake} key={index} />;
  });

  return <ul>{cakeComponents}</ul>;
};

export default ListOfCakes;