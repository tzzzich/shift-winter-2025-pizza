import { getPizzaCatalogue } from "@requests";
import { useQuery } from "react-query";
import { PizzaCard } from "shared/components/main-page";

const MainPage = () => {
  const { data, error, isLoading } = useQuery(
    "pizzaCatalogue",
    getPizzaCatalogue
  );

  console.log(data);
  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: </div>;

  return (
    <div className="flex flex-wrap gap-x-[32px] gap-y-[48px]">
      {data?.data.catalog.map((pizza) => (
        <PizzaCard pizza={pizza} />
      ))}
    </div>
  );
};

export default MainPage;
