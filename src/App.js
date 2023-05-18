import {Routes,Route} from "react-router-dom"
import Header from "./component/Header/Header"
import Home from "./pages/Home/Home"
import MovieDetail from "./pages/MovieDetail/MovieDetail"
import MovieList from "./component/MovieList/MovieList"
export default function App(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="movie/:id" element={<MovieDetail />}></Route> 
      </Routes>
    </div>
  )
}