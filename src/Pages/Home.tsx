import { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";

function Home() {
  const [allGameList, setAllGameList] = useState();
  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
    const resp = await GlobalApi.getAllGames();
    console.log(resp);
    setAllGameList(resp.data.results);
  };

  return (
    <div className="grid grid-cols-4 text-black px-8">
      <div className=" h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3 ">
        <Banner gameBanner={allGameList?.[0]} />
      </div>
    </div>
  );
}

export default Home;
