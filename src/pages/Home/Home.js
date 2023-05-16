import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import MovieList from "../../component/MovieList/MovieList";

const Home = () => {
    return (
        <>
            <div className="poster">
                <MovieList />
            </div>
        </>
    );
};
export default Home;