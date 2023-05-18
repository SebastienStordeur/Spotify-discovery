import Link from "next/link";
import React, { FC } from "react";

interface PlaylistProps {
  playlist: any;
}

const Playlist: FC<PlaylistProps> = ({ playlist }) => {
  const { tracks, name, external_urls, images } = playlist;
  console.log(playlist);
  return (
    <Link href={external_urls.spotify}>
      <article className="h-full w-full text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-110">
        <img src={images[0].url} alt={name} />
        <h3 className="flex justify-between py-2">
          {name}
          <span>Tracks: {tracks.total}</span>
        </h3>
      </article>
    </Link>
  );
};

export default Playlist;
