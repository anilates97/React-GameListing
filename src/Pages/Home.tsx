import GenreList from "../Components/GenreList";

function Home() {
  return (
    <div className="grid grid-cols-4 text-black px-8">
      <div className=" h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3 ">Game List</div>
    </div>
  );
}

export default Home;
