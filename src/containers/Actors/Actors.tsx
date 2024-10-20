
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";


interface Props {
  id: number;
  name: string;
  year: number;
  avatar: string;
}

interface ActorsProps {
  actors: Props[];
}

const Actors = ({ actors }: ActorsProps) => {
  return (
    <div className="app">
      <NavBar />
      <div className="d-flex justify-content-center m-5">
        <h2>Actors</h2>
        {actors.map((actor) => (
          <Card
            key={actor.id}
            name={actor.name}
            year={actor.year}
            avatar={actor.avatar}
            id={actor.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Actors;
