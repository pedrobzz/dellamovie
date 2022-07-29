import { useContext } from "react";
import Cards from "../common/components/cards";
import AppContext from "../common/context/appContext";
import { useTRPC } from "../common/hooks/useTRPC";

const Home = (): JSX.Element => {
  const trpc = useTRPC();
  const ctx = useContext(AppContext);
  const { data, isLoading } = trpc.useQuery(["recomendations.getTrending"]);

  return (
    <div className="h-[90vh]  bg-[#acabab] relative overflow-hidden flex-col">
      <Cards data={data} onClick={console.log} />
    </div>
  );
};

export default Home;
