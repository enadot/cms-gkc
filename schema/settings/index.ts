import { CogIcon } from "@sanity/icons";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";

import { defineArrayMember, defineField, defineType } from "sanity";

import { mainGroups } from "../groups";

export default defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  groups: mainGroups,
  icon: CogIcon,
  preview: { select: { title: "title", subtitle: "description" } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: "title",
      description: "This field is the title of your website.",
      title: "Title",
      type: "string",
      group: "seo",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      description:
        "Used both for the <meta> description tag for SEO, and the website subheader.",
      title: "Description",
      type: "array",
      group: "seo",
      of: [
        defineArrayMember({
          type: "block",
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: "object",
                name: "link",
                fields: [
                  {
                    type: "string",
                    name: "href",
                    title: "URL",
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      description: "The URL to your Instagram profile.",
      type: "url",
      group: "social",
    }),
    defineField({
      name: "orderLink",
      title: "Order Link (URL)",
      description: "The URL to your order form.",
      type: "url",
    }),
    defineField({
      name: "reserveLink",
      title: "Reservation Link (URL)",
      description: "The URL to your reservation form.",
      type: "url",
    }),
  ],
});
