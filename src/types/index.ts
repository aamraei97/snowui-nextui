import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export type ProjectType = {
	name: string
	email: string
	registerDate: string
}