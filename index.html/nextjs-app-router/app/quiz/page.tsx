"use client";
import React from "react";
import dynamic from "next/dynamic";

const HouseQuiz = dynamic(() => import("../../components/HouseQuiz"), { ssr: false });

export default function Page() {
  return <HouseQuiz />;
}
