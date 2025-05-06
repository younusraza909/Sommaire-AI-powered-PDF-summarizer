import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div className="flex">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant="secondary"
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-red-50 transition-colors duration-200"
          >
            <Sparkles className=" mr-2 text-rose-600 animate-pulse" style={{ width: "1.5rem", height: "1.5rem" }} />
            <p className="text-base text-rose-600">Powered by AI</p>
          </Badge>
        </div>
      </div>
      <h1 className="font-bold py-6 text-center">
        Transform PDFs into{" "}
        <span className="relative inline-block">
          <span className="relative px-2 z-10">concise</span>
          <span className="absolute inset-0 bg-rose-200/50 rounded-lg -rotate-2 transform -skew-y-2"></span>
        </span>
        summaries
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
        Get a beautiful summary reel of the document in seconds
      </h2>
      <div className="">
        <Button
          variant={"link"}
          className="text-white mt-6 sm:text-lg lg:text-xl text-base rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold transition-all duration-300"
        >
          <Link href="/#pricing" className="flex items-center gap-2">
            <span>Try Sommaire</span>
            <ArrowRight className="animate-pulse size-4 sm:size-5 md:size-6" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
