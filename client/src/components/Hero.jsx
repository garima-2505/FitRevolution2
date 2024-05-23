import React from "react";
import Button from "./Button2";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero-bg">
      <div className="hero-overlay"></div>
      <div className="hero-content flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
        <div className="flex flex-col gap-4">
          <p className="text-white">WELCOME TO</p>
          <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Fit<span className="text-blue-400">Revolution</span>
          </h1>
        </div>
        <p className="text-sm md:text-base font-light text-white">
          Join us in the{" "}
          <span className="text-blue-400 font-medium">FitRevolution</span> and
          transform into an{" "}
          <span className="text-blue-400 font-medium">unbelievably fit</span>{" "}
          version of yourself. Embrace the journey and become the local{" "}
          <span className="text-blue-400 font-medium">fitness icon</span>.
        </p>
        <div className="flex gap-4">
          <Button
            func={() => {
              window.location.href = "#generate";
            }}
            text={"Accept & Begin"}
          />
          <Button
            func={() => {
              navigate("./dashboard");
            }}
            text={"Track Progress"}
          />
        </div>
      </div>
    </div>
  );
}
