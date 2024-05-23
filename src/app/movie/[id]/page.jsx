import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=32e23c3afe8be6e1adacd53935f08ed0`
  );

  return await res.json;
};
const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  //console.log(movieDetail);
  console.log(id);
  return (
    <div className=" relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          res?.backdrop_path || res?.poster_path
        }`}
      />
      <div className=" absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className=" w-1/2">{movieDetail?.overview}</div>
        <div className=" my-3">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <div className=" my-2 border w-32 hover:bg-white hover: text-black p-3  rounded-md text-center text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
