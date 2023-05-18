import Link from "next/link";
import React, { FC } from "react";

interface ArtistProps {
  artist: any;
}

const Artist: FC<ArtistProps> = ({ artist }) => {
  console.log(artist);
  const { name, images, href } = artist;
  return (
    <Link href={href}>
      <article className="flex flex-col items-center h-full w-full text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-110 overflow-hidden">
        <img src={images[0].url} alt={name} className="h-40 w-40 object-cover rounded-full" />
        <h3 className="mt-2">{name}</h3>
      </article>
    </Link>
  );
};

export default Artist;
