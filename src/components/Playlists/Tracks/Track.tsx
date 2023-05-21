import React, { FC } from "react";

interface TrackProps {
  artists: { name: string }[];
  name: string;
  duration: number;
}

const Track: FC<TrackProps> = ({ artists, name, duration }) => {
  const convertMsToMinute = (duration: number) => {
    var minutes = Math.floor(duration / 60000);
    var seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <li className="h-13 w-full bg-darkbg text-white text-sm font-semibold p-2 rounded-lg overflow-hidden shadow-lg">
      <h3 className="flex justify-between">
        <span className="text-ellipsis w-full h-5 overflow-hidden">{name}</span>
        <span className="ml-6">{convertMsToMinute(duration)}</span>
      </h3>
      {artists.map((artist: { name: string }, index: number) => {
        return (
          <span key={name + Math.random()} className="italic text-accent">
            {index === artists.length - 1 ? artist.name : artist.name + ", "}
          </span>
        );
      })}
    </li>
  );
};

export default Track;
