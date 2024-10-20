import './Card.css'

interface Props {
    name: string;
    year: number;
    avatar: string;
    id: number
}


const Card: React.FC<Props> = ({ name, year, avatar }) => {

        return (
            <div className="Movie">
                <img src={avatar} alt={name} />
                <h1>{name}</h1>
                <p>Год: {year}</p>
            </div>
        )
};

export default Card