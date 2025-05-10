"use client";

import React from "react";
import UploadFormInput from "./upload-form-input";
import { z } from "zod";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine((file) => file.size <= 20 * 1024 * 1024, "File size must be less than 20MB")
    .refine((file) => file.type.startsWith("application/pdf"), "File must be a PDF"),
});

const UploadForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    // Validation for file
    const validatedField = schema.safeParse({ file });

    if (!validatedField.success) {
      console.log(validatedField.error.flatten().fieldErrors.file?.[0] ?? "Invalid File");

      return;
    }

    console.log("Handle Submitted");
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadForm;
