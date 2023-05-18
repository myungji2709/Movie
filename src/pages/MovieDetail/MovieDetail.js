import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {FaStar,FaHome} from "react-icons/fa"
import axios from "axios";
import "./MovieDetail.css"

export default function MovieDetail() {
    const [currentMovieDetail, setCMD] = useState(null);
    const { id } = useParams();
    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=vi`;

        axios
            .get(url)
            .then((res) => {
                setCMD(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getData();
    }, [id]);
    return (
        <div className="movie">
            <div className="movie__intro">
                <img
                    className="movie__backdrop"
                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""
                        }`}
                />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img
                            className="movie__poster"
                            src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""
                                }`}
                        />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">
                            {currentMovieDetail ? currentMovieDetail.original_title : ""}
                        </div>
                        <div className="movie__tagline">
                            {currentMovieDetail ? currentMovieDetail.tagline : ""}
                        </div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
                            <FaStar />
                            <span className="movie__voteCount">
                                {currentMovieDetail
                                    ? "(" + currentMovieDetail.vote_count + ") vote"
                                    : ""}
                            </span>
                        </div>
                        <div className="movie__runtime">
                            {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
                        </div>
                        <div className="movie__releaseDate">
                            {currentMovieDetail
                                ? "Release date: " + currentMovieDetail.release_date
                                : ""}
                        </div>
                        <div className="movie__genres">
                            {currentMovieDetail && currentMovieDetail.genres
                                ? currentMovieDetail.genres.map((genre) => (
                                    <>
                                        <span className="movie__genre" id={genre.id}>
                                            {genre.name}
                                        </span>
                                    </>
                                ))
                                : ""}
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links: </div>
                {currentMovieDetail && currentMovieDetail.homepage && (
                    <a
                        href={currentMovieDetail.homepage}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    ></a>
                )}
                {currentMovieDetail && currentMovieDetail.imdb_id && (
                    <a
                        href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                    >
                        <h1 className="movie__homepage"><FaHome /></h1>
                    </a>
                )}
            </div>
            <div className="movie__production">
                        <div className="movie__heading">Production companies</div>
                {currentMovieDetail &&
                    currentMovieDetail.production_companies &&
                    currentMovieDetail.production_companies.map((company) => (
                        <>
                            {company.logo_path && (
                                <span className="productionCompanyImage">
                                    <img
                                        className="movie__productionCompany"
                                        src={
                                            "https://image.tmdb.org/t/p/original" + company.logo_path
                                        }
                                    />
                                </span>
                            )}
                        </>
                    ))}
            </div>
        </div>
    );
}
