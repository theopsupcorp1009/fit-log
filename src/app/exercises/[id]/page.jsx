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
        <div className="relative w-[550px] h-[723px]">
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

          <table className="w-full border-collapse font-inter text-[12px] font-bold text-[#9CA3AF] bg-[#1E2330] mt-8 rounded-[12px]">
            <tbody>
              <tr className="border-b border-[#232834]">
                <td className="px-6 py-4">EQUIPMENT</td>
                <td className="px-6 py-4 text-right">{data.equipment}</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-6 py-4">DIFFICULTY</td>
                <td className="px-6 py-4 text-right">{data.difficulty}</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-6 py-4">SETS</td>
                <td className="px-6 py-4 text-right">{data.sets}</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-6 py-4">REPS</td>
                <td className="px-6 py-4 text-right">{data.reps}</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-6 py-4">DURATION</td>
                <td className="px-6 py-4 text-right">{data.duration} min</td>
              </tr>

              <tr className="border-b border-[#232834]">
                <td className="px-6 py-4">CALORIES</td>
                <td className="px-6 py-4 text-right">
                  {data.caloriesBurned} Kcal
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4">RATING</td>
                <td className="px-6 py-4 text-right">{data.rating}</td>
              </tr>
            </tbody>
          </table>

          <div className="space-y-3 mt-8">
            <h2 className="font-inter font-extrabold text-[16px]">
              INSTRUCTION
            </h2>
            <ol className="ml-4 font-inter text-[14px] text-[#D1D5DB] text-justify space-y-2">
              {data.instructions.map((instruction, index) => (
                <li key={index} className="list-decimal">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-3 items-center justify-start font-inter text-[14px] mt-10">
            <TodayPlanButton data={data} />
            <SaveForLaterButton data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcerciseDetailPage;
