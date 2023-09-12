import { StackCompactIcon } from "@sanity/icons";
export default {
  name: "category",
  title: "Categories",
  icon: StackCompactIcon,
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
