import Image from "next/image";
import React, { FC } from "react";

interface FavoriteSongsProps {
  data: any;
}

const FavoritesSongs: FC<FavoriteSongsProps> = ({ data }) => {
  return (
    <div className="flex gap-8 bg-darkbg h-64 px-11 py-8 w-full overflow-hidden relative">
      {data.slice(0, 5).map((song: any) => {
        /* console.log(song); */
        return (
          <div className="w-52 h-full bg-background relative" key={song.id}>
            <img src={song.images[0].url} alt={song.name} className="w-full h-full object-fit absolute" />
          </div>
        );
      })}
    </div>
  );
};

export default FavoritesSongs;
