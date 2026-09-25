import React, { use } from "react";
import ExerciseCard from "../components/shared/ExerciseCard";

const fetchData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Exercises = async () => {
  const fitnessdata = await fetchData();

  return (
    <div className="mt-15">
      <div className="container mx-auto" id="library">
        <div className="mx-5 lg:mx-0">
          <div className="text-center md:text-left lg:text-left">
            <h2 className="font-bold text-[30px]">The Library</h2>
            <p className="font-inter text-[14px] text-[#9CA3AF]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fitnessdata.map((data) => {
              return <ExerciseCard key={data.id} data={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
