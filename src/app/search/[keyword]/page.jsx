import React from "react";
import Movies from "@/components/Movies";
import { options } from "@/app/page";
const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
    options
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  console.log(keyword);
  return (
    <div>
      {!res?.results ? (
        <div>Aradığınız film bulunamadı</div>
      ) : (
        <div className=" flex items-center flex-wrap gap-3">
          {res?.results?.map((res, i) => (
            <Movies key={i} res={res} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
