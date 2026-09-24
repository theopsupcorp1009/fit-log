import SaveForLaterButton from "@/app/components/exerciseDetails/SaveForLaterButton";
import TodayPlanButton from "@/app/components/exerciseDetails/TodayPlanButton";
import Image from "next/image";
import React from "react";

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const ExcerciseDetailPage = async ({ params }) => {
  const { id } = await params;
  const fitnesData = await getData();
  const data = fitnesData.find((elem) => String(elem.id) === String(id));
  return (
    <section className="container mx-auto mt-15">
      <div className="grid grid-cols-2 items-start">
        <div className="relative w-[550px] h-[645px]">
          <Image
            src={data.image}
            fill
            alt={data.name}
            className="object-fit rounded-2xl"
          />
        </div>

        <div className="space-y-5">
          <div>
            <h2 className="uppercase text-[38px] font-bold">{data.name}</h2>
            <p className="font-inter text-[16px] text-[#9CA3AF]">
              {data.description}
            </p>
          </div>

          <div className="flex gap-2 font-inter text-[11px] font-bold uppercase leading-none">
            {data.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#C2F800] text-[#0F1115] font-semibold px-2 py-1 rounded-2xl"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="font-inter text-[12px] font-bold text-[#9CA3AF] bg-[#1E2330] px-3 mt-8 rounded-[12px]">
            <div className="flex justify-between items-center border-b border-[#232834] py-3">
              <span>EQUIPMENT</span>
              <span>{data.equipment}</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#232834] py-3">
              <span>DIFFICULTY</span>
              <span>{data.difficulty}</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#232834] py-3">
              <span>SETS</span>
              <span>{data.sets}</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#232834] py-3">
              <span>REPS</span>
              <span>{data.reps}</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#232834] py-3">
              <span>DURATION</span>
              <span>{data.duration} min</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#232834] py-3">
              <span>CALORIES</span>
              <span>{data.caloriesBurned} Kcal</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#232834] py-3">
              <span>RATING</span>
              <span>{data.rating}</span>
            </div>
          </div>


            <div className="space-y-3 mt-8">
                <h2 className="font-inter font-extrabold text-[16px]">INSTRUCTION</h2>
                <ol className="ml-4 font-inter text-[14px] text-[#D1D5DB] text-justify space-y-2">
                    {
                        data.instructions.map((instruction, index)=>(<li key={index} className="list-decimal">{instruction}</li>))
                    }
                </ol>
            </div>

            <div className="flex gap-3 items-center justify-start font-inter text-[14px] mt-10">
                <TodayPlanButton data={data} />
                <SaveForLaterButton data={data}/>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ExcerciseDetailPage;
