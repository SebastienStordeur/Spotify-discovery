import React, { FC } from "react";

interface PlaylistProps {
  playlists: any;
}

const Playlists: FC<PlaylistProps> = ({ playlists }) => {
  console.log(playlists);

  return (
    <>
      {playlists && (
        <div className="flex flex-col h-40 w-72 bg-darkbg">
          <ul>
            {playlists.items.map((playlist: any) => {
              return <li>{playlist.name}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Playlists;
