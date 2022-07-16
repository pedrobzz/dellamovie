import { useContext } from "react";
import { Title } from "../common/components/Title";
import AppContext from "../common/context/appContext";

const Home = (): JSX.Element => {
  const ctx = useContext(AppContext);
  return (
    <>
      <Title>My page</Title>
      <h3 className="text-3xl text-red-500">Context Name: </h3>
    </>
  );
};

export default Home;
