const mainGenres = ["hip hop", "rap", "pop", "metal", "rock", "dance", "electronic", "house"];

export function FormatData(data: []) {
  const genres: any = filterGenres(data);
  const categorizedGenres: { genre: string; count: number }[] = [];

  for (const genre of genres) {
    const matchingMainGenre = mainGenres.find((mainGenre) => genre.includes(mainGenre));
    const targetGenre = matchingMainGenre || "others";
    const existingGenre = categorizedGenres.find((item) => item.genre === targetGenre);

    existingGenre ? existingGenre.count++ : categorizedGenres.push({ genre: targetGenre, count: 1 });
  }
  return categorizedGenres;
}

export function filterGenres(data: any[]) {
  let genres: any = [];

  data.forEach((artist: any) => {
    genres.push(...artist.genres);
  });

  genres = new Set(genres);

  return Array.from(genres);
}
