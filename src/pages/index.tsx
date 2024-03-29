import React from "react";
import Cards from "../common/components/cards";
import { useTRPC } from "../common/hooks/useTRPC";

const Home = (): JSX.Element => {
  const trpc = useTRPC();
  const { data, isLoading } = trpc.useQuery(["recomendations.getTrending"]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-full overflow-hidden">
      {data && <Cards data={data} onClick={console.log} />}
    </div>
  );
};

export default Home;
