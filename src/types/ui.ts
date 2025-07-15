import type { ReactNode } from "react";

export interface WithChildren  {
  children: ReactNode,
  modal?:string
}

export interface IconProps {
  width?: number;
  className?: string;
}