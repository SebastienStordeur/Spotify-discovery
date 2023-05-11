const mainGenres = ["hip hop", "rap", "pop", "metal", "rock", "dance", "electronic", "house"];

export function FormatData(data: []) {
  const genres: any = filterGenres(data);
  const categorizedGenres: { genre: string; count: number }[] = [];

  for (const genre of genres) {
    const matchingMainGenres = mainGenres.filter((mainGenre) => genre.includes(mainGenre));

    if (matchingMainGenres.length > 0) {
      const mainGenre = matchingMainGenres[0];
      const existingGenre = categorizedGenres.find((item) => item.genre === mainGenre);

      if (existingGenre) {
        existingGenre.count++;
      } else {
        categorizedGenres.push({ genre: mainGenre, count: 1 });
      }
    } else {
      const existingGenre = categorizedGenres.find((item) => item.genre === "others");

      if (existingGenre) {
        existingGenre.count++;
      } else {
        categorizedGenres.push({ genre: "others", count: 1 });
      }
    }
  }

  return categorizedGenres;
}

function filterGenres(data: []) {
  let genres: any = [];

  data.forEach((artist: any) => {
    genres.push(...artist.genres);
  });

  genres = new Set(genres);

  return Array.from(genres);
}
