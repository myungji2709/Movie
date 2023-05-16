import axios from "axios";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/">
                    <img
                        className="header_icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
                    />
                </Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                    <span>Popular</span>
                </Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                    <span>Top Rated</span>
                </Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                    <span>Upcoming</span>
                </Link>
            </div>
        </div>
    );
}
