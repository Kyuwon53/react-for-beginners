import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie)
    setMovie(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (<h1>loading...</h1>) :
        (
          <div align="center">
            <div >
              <h1>{movie.title}</h1>
            </div>
            <div>
              {<img src={movie.large_cover_image} alt={movie.title} />}
              {<h2>{movie.title_long}</h2>}
            </div>
            <div>
              <span>평점: {movie.rating}</span>
              <span> 상영시간: {movie.runtime}</span>
              <p>
              {movie.description_full}
              </p>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Detail;
