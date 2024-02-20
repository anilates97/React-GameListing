import { useEffect } from "react";

function GamesByGenres({ gameList, selectedGenresName }: any) {
  useEffect(() => {}, []);

  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white gap-6 mt-5">
        {selectedGenresName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((item: any) => (
          <div className="bg-[#76a8f75e] p-3 rounded-lg pb-8 h-full hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <img
              src={item.background_image}
              alt="games by genres image"
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="text-[20px] dark:text-white font-bold mt-5">
              {item.name}{" "}
              <span className="p-1 rounded-sm bg-green-100 text-green-700 font-medium text-[10px] ml-2">
                {item.metacritic}
              </span>{" "}
            </h2>
            <h2 className="text-gray-500 dark:text-gray-200">
              ⭐ {item.rating} 💬 {item.reviews_count} 🔥{" "}
              {item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenres;
