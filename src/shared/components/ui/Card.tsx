import { PropsWithChildren } from "react";
import clsx from "clsx";
import { ClassProps } from "@types";

export function Card({ children, className }: PropsWithChildren<ClassProps>) {
  return (
    <div className={clsx("p-[16px] rounded-lg", className)}>{children}</div>
  );
}
