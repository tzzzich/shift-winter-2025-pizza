import { PizzaFullView } from "@types";

export const PizzaCard = ({ pizza }: { pizza: PizzaFullView }) => {
  const URL = import.meta.env.VITE_BASE_URL + pizza.img;

  return (
    <div className="flex flex-col justify-between h-[484px] w-[300px] grow ">
      <img src={URL} className="w-[220px]" alt={pizza.name}></img>
      <div className="flex flex-col gap-[8px]">
        <h3 className="font-semibold text-[20px]">{pizza.name}</h3>
        <p className="font-normal text-[16px] text-(--color-text-tertiary)">
          {pizza.description}
        </p>
      </div>
      <h3 className="font-semibold text-[20px]">От {pizza.sizes[0].price}</h3>
      <button className="btn btn-primary">Выбрать</button>
    </div>
  );
};
