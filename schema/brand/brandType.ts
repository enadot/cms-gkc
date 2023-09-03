import { defineType } from "sanity";
import { BrandInput } from "./BrandInput";

import LeichtLogo from "./LeichtLogo";
import NobiliaLogo from "./NobiliaLogo";

export const BRANDS = [
  {
    title: "Leicht",
    value: "leicht",
    icon: LeichtLogo,
  },
  {
    title: "Nobilia",
    value: "nobilia",
    icon: NobiliaLogo,
  },
];

export const brandType = defineType({
  name: "brand",
  title: "Brand",
  type: "string",
  options: {
    list: BRANDS.map(({ title, value }) => ({ title, value })),
    layout: "radio",
  },
  components: { input: BrandInput },
});
