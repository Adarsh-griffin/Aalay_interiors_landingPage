import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px] px-6 md:px-8 lg:px-10",
        className,
      )}
      {...props}
    />
  );
}
