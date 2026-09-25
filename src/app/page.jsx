import { Suspense } from "react";
import Banner from "./components/Banner";
import Exercises from "./exercises/page";
import ExerciseLoading from "./exercises/ExerciseLoading";

export default function Home() {
  return (
    <>
      <Banner/>
      <Suspense fallback={<ExerciseLoading/>}>
        <Exercises/>
      </Suspense>
    </>
  );
}