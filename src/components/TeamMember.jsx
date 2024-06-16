"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Teams() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const fetchData = await response.json();
        setData(fetchData.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        {isLoading ? <p>Loading Data...</p> : null}
        {data.map((user, index) => (
          <div
            key={index}
            className="my-10 flex w-44 flex-col items-center text-center sm:w-80"
          >
            {data ? (
              <Image
                src={user.picture.large}
                alt={` ${user.name.first} ${user.name.last}`}
                className="mb-3 mt-3 h-24 w-24 rounded-2xl"
                width={100}
                height={100}
              />
            ) : null}
            {data
              ? `${user.name.title} ${user.name.first} ${user.name.last}`
              : null}{" "}
            <br />
            {data ? `${user.location.country}` : null}
            <p className="mx-1 text-center">Operations Team</p>
          </div>
        ))}
      </div>
    </>
  );
}
