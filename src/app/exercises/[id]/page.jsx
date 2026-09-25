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
    <section className="container mx-auto mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start mx-5 lg:mx-0">
        <div className="relative max-w-[90vw] h-[30vh] sm:h-[40vh] md:h-[50vh] lg:max-[80vh] lg:h-[773px]">
          <Image
            src={data.image}
            fill
            alt={data.name}
            className="object-center lg:object-fit rounded-2xl"
          />
        </div>

        <div className="space-y-3 md:space-y-5 lg:space-y-5 mt-2 lg:mt-0">
          <div className="">
            <h2 className="uppercase text-[28px] sm:text-[30px] md:text-[38px] lg:text-[38px] font-bold">{data.name}</h2>
            <p className="font-inter text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-bold md:font-normal lg:font-normal text-[#9CA3AF]">
              {data.description}
            </p>
          </div>

          <div className="flex gap-2 font-inter text-[11px] font-bold uppercase leading-none">
            {data.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#C2F800] text-[#0F1115] font-bold md:font-semibold lg:font-semibold px-2 py-1 rounded-2xl"
              >
                {muscle}
              </span>
            ))}
          </div>

          <table className="w-full border-collapse font-inter text-[12px] font-bold text-[#9CA3AF] bg-[#1E2330] mt-4 md:mt-5 lg:mt-8 rounded-[12px]">
            <tbody>
              <tr className="border-b border-[#232834]">
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">EQUIPMENT</td>
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-right">{data.equipment}</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">DIFFICULTY</td>
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-right">{data.difficulty}</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">SETS</td>
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-right">{data.sets}</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">REPS</td>
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-right">{data.reps}</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">DURATION</td>
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-right">{data.duration} min</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">CALORIES</td>
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-right">
                  {data.caloriesBurned} Kcal
                </td>
              </tr>

              <tr>
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">RATING</td>
                <td className="px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-right">{data.rating}</td>
              </tr>
            </tbody>
          </table>

          <div className="space-y-1 md:space-y-3 lg:space-y-3 mt-4 md:mt-6 lg:mt-8">
            <h2 className="font-inter font-extrabold text-[14px] md:text-[16px] lg:text-[16px]">
              INSTRUCTION
            </h2>
            <ol className="pr-3 md:pr-0 lg:pr-0 ml-4 font-inter text-[12px] md:text-[14px] lg:text-[14px] text-[#D1D5DB] text-justify space-y-1 md:space-y-2 lg:space-y-2">
              {data.instructions.map((instruction, index) => (
                <li key={index} className="list-decimal">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-3 items-center justify-start font-inter text-[14px] mt-4 md:mt-6 lg:mt-10">
            <TodayPlanButton data={data} />
            <SaveForLaterButton data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcerciseDetailPage;
