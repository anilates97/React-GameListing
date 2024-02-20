import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({ setGenresId, selectedGenresName }: any) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList().then((resp: any) =>
      setGenreList(resp.data.results)
    );
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item: any, index: number) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            setGenresId(item.id);
            selectedGenresName(item.name);
          }}
          className={` flex gap-2 items-center mb-2 mr-6 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group
        ${activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null}`}
        >
          <img
            src={item.image_background}
            alt="Genre Image"
            className={`w-[60px] h-[60px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out ${
              activeIndex === index ? "scale-105" : null
            }`}
          />
          <h3
            className={`dark:text-white text-[20px] group-hover:font-bold ${
              activeIndex === index ? "font-bold" : null
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
