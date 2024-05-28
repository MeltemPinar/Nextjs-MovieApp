/*import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }api_key=32e23c3afe8be6e1adacd53935f08ed0&?language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );
  const data = res.json;
  //console.log(data);
  //.then((data) => console.log(res))
  // .catch((err) => console.error(err));

  return (
    <div className=" flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;*/
"use client";
import Movies from "@/components/Movies";
import React, { useEffect, useState } from "react";

const Page = ({ searchParams }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${
            searchParams.genre
              ? "movie/" + searchParams.genre
              : "trending/all/day"
          }?api_key=32e23c3afe8be6e1adacd53935f08ed0&language=en-US&page=1`
        );
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchParams.genre]);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
