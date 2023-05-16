import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Card/Card";
import { useParams } from "react-router-dom";

const MovieList = () => {
    const [data, setData] = useState(null);
    const {type} = useParams

    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=vi&page=1`;

        axios
            .get(url)
            .then((res) => {
                setData(res.data.results);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getData();
},[]);
    return (
        <div className="movie__list">
            {/* <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2> */}
            <div className="list__cards">
                {data &&
                    data.map((movie, index) => (
                      <Cards key={index} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
};
export default MovieList;
