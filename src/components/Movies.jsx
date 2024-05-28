"use client";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const Movies = ({ dt }) => {
  const router = useRouter;
  const handleClick = () => {
    router.push(`/movie/${dt?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className=" min-w-[470px] relative imgContainer "
    >
      <Image
        className=" object-fit-cover"
        width={470}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
      />
      <div className=" absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{dt.title}</div>
      </div>
    </div>
  );
};

export default Movies;
