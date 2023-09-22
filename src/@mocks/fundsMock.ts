import { FundProps } from "@components/Funds/FundCard";

import WingSVG from "@assets/icons/wing.svg";
import SunSVG from "@assets/icons/sun.svg";
import LeafSVG from "@assets/icons/leaf.svg";

export const fundsMock = [
  {
    icon: WingSVG,
    title: "Wind Fund",
    money: "$1032.23",
    type: "up",
    profitPercentage: 3.51,
  },
  {
    icon: SunSVG,
    title: "Solar Fund",
    money: "$986.61",
    type: "down",
    profitPercentage: 0.13,
  },
  {
    icon: LeafSVG,
    title: "Natural Fund",
    money: "$1122.95",
    type: "up",
    profitPercentage: 5.1,
  },
] as FundProps[];
