import { Routes, Route } from "react-router-dom";
import TopMovies from "../../containers/TopMovies/TopMovies";
import Home from "../../containers/Home/Home";
import Actors from "../../containers/Actors/Actors";
import MovieBar from "../MovieBar/MovieBar";

const NavBar = () => {
  const movies = [
    {
      name: "Лунтик, возвращение домой",
      year: 2024,
      id: 1,
      avatar:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/01ac7d30-bf29-4df2-b0dc-3320cb5f7887/280x420",
    },
    {
      name: "Обе две",
      year: 2024,
      id: 2,
      avatar:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/e2ee617b-5dbd-4b84-b028-fb5db82e2789/600x900",
    },
    {
      name: "Ворон",
      year: 2024,
      id: 3,
      avatar:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/689fb85e-1590-4c7c-8426-674b7e64400a/600x900",
    },
  ];

  const actors = [
    {
      name: "Leonardo Dicaprio",
      year: 1974,
      id: 1,
      avatar:
        "https://avatars.mds.yandex.net/i?id=71a37f7a4c1f80b8c49557a2d03d9a47_l-8978567-images-thumbs&n=13",
    },
    {
      name: "William Bradley Pitt",
      year: 1963,
      id: 2,
      avatar:
        "https://i.pinimg.com/736x/c0/5a/2c/c05a2cf384e70a66cfe555d73e7b0595.jpg",
    },
    {
      name: "Willem Dafoe",
      year: 1954,
      id: 3,
      avatar:
        "https://avatars.mds.yandex.net/get-entity_search/96437/932407211/S600xU_2x",
    },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TopMovies" element={<TopMovies movies={movies} />} />
              <Route path="/Actors" element={<Actors actors={actors} />} />
              <Route path="/MovieBar" element={<MovieBar/>} />
              
      </Routes>
    </div>
  );
};

export default NavBar;
