import { useEffect } from "react";

function TrendingGames({ gameList }: any) {
  useEffect(() => {}, []);

  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="md:grid md:grid-cols-3 gap-3 lg:grid-cols-4 mt-5">
        {gameList?.map(
          (item: any, index: number) =>
            index < 4 && (
              <div className="bg-[#76a8f75e] rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={item.background_image}
                  alt="trending Games Images"
                  className="h-[425px] rounded-t-lg object-cover"
                />
                <h2 className="dark:text-white text-[20px] font-bold p-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
