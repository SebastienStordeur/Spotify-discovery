import Link from "next/link";
import React, { FC } from "react";

interface PlaylistProps {
  playlist: any;
}

const Playlist: FC<PlaylistProps> = ({ playlist }) => {
  const { tracks, name, uri, images } = playlist;
  console.log(playlist);
  return (
    <Link href={playlist.uri}>
      <article className="h-72 w-72 bg-darkbg text-white text-sm font-semibold tracking-wide">
        <img src={images[0].url} alt="" />

        <h3 className="flex justify-between py-2">
          {name}
          <span>Tracks: {tracks.total}</span>
        </h3>
      </article>
    </Link>
  );
};

export default Playlist;
