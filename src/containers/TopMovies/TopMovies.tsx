import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
interface Movie {
  id: number;
  name: string;
  year: number;
  avatar: string;
}

interface TopMoviesProps {
  movies: Movie[];
}

const TopMovies = ({ movies }: TopMoviesProps) => {
  return (
    <div className="app">
      <NavBar />
      <div className="d-flex justify-content-center m-5">
        <h2>Top Movies</h2>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            name={movie.name}
            year={movie.year}
            avatar={movie.avatar}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
