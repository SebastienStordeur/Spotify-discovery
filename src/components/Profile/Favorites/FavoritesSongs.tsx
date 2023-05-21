import { FC } from "react";

type Song = {
  images: { url: string }[];
  name: string;
  id: string;
};

interface FavoriteSongsProps {
  data: Song[];
}

const FavoritesSongs: FC<FavoriteSongsProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-8 relative">
      <h2 className="text-white text-lg font-semibold">Favorite Artists</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.slice(0, 10).map((song: Song) => {
          return (
            <div className=" flex items-center w-52 h-20 h-full bg-background relative" key={song.id}>
              <img src={song.images[0].url} alt={song.name} className="w-20 h-20" />
              <h3 className="text-white ml-2">{song.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesSongs;
