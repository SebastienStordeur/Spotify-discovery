import { FormatData, filterGenres } from "./FormatData";

const mainGenres = ["hip hop", "rap", "pop", "metal", "rock", "dance", "electronic", "house"];

describe("FormatData", () => {
  it("should return an empty array if no data is provided", () => {
    const result = FormatData([]);
    expect(result).toEqual([]);
  });

  /*   it("should categorize genres correctly based on mainGenres", () => {
    const data = [
      { genres: ["hip hop", "pop", "rock"] },
      { genres: ["rap", "pop", "metal"] },
      { genres: ["dance", "pop", "house"] },
      { genres: ["electronic", "rock"] },
      { genres: ["pop"] },
      { genres: ["jazz", "blues"] },
    ];

    const result = FormatData(data);
    expect(result).toEqual([
      { genre: "hip hop", count: 1 },
      { genre: "rap", count: 1 },
      { genre: "pop", count: 4 },
      { genre: "metal", count: 1 },
      { genre: "rock", count: 2 },
      { genre: "dance", count: 1 },
      { genre: "electronic", count: 1 },
      { genre: "house", count: 1 },
      { genre: "others", count: 2 },
    ]);
  }); */
});

describe("filterGenres", () => {
  it("should return an empty array if no data is provided", () => {
    const result = filterGenres([]);
    expect(result).toEqual([]);
  });

  it("should extract unique genres from the provided data", () => {
    const data = [
      { genres: ["hip hop", "pop", "rock"] },
      { genres: ["rap", "pop", "metal"] },
      { genres: ["dance", "pop", "house"] },
      { genres: ["electronic", "rock"] },
      { genres: ["pop"] },
      { genres: ["jazz", "blues"] },
    ];

    const result = filterGenres(data);
    expect(result).toEqual(["hip hop", "pop", "rock", "rap", "metal", "dance", "house", "electronic", "jazz", "blues"]);
  });
});
