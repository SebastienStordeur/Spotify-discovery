import React, { FC } from "react";

interface ArtistProps {
  artist: any;
}

const Artist: FC<ArtistProps> = ({ artist }) => {
  console.log(artist);
  const { name, images, href } = artist;
  return <article>{name}</article>;
};

export default Artist;
