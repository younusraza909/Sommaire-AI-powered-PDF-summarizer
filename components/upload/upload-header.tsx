import React from "react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";

const UploadHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors"
          >
            <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base">AI-powered Content Creation</p>
          </Badge>
        </div>
        <div className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Start Uploading{" "}
          <span className="relative inline-block">
            <span className="relative px-2 z-10">Your PDF's</span>
            <span className="absolute inset-0 bg-rose-200/50 rounded-lg -rotate-2 transform -skew-y-2"></span>
          </span>
        </div>

        <div>
          <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
            Upload your PDF and let our AI do the magic! ✨{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default UploadHeader;
