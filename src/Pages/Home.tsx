import { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenres from "../Components/GamesByGenres";

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  useEffect(() => {
    getAllGames();
    getGameListByGenresId(4);
  }, []);

  const getAllGames = async () => {
    const resp = await GlobalApi.getAllGames();
    console.log(resp);
    setAllGameList(resp.data.results);
  };

  const getGameListByGenresId = async (id: number) => {
    const resp = await GlobalApi.getGameListByGenreId(id);
    setGameListByGenres(resp.data.results);
  };

  return (
    <div className="grid grid-cols-4 text-black px-8">
      <div className=" h-full hidden md:block">
        <GenreList
          selectedGenresName={(name: string) => setSelectedGenresName(name)}
          setGenresId={(genresId: number) => getGameListByGenresId(genresId)}
        />
      </div>
      <div className="col-span-4 md:col-span-3 ">
        {allGameList?.length > 0 && gameListByGenres?.length > 0 && (
          <div>
            <Banner gameBanner={allGameList?.[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenres
              gameList={gameListByGenres}
              selectedGenresName={selectedGenresName}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
