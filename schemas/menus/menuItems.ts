import { format } from "date-fns";
import { defineField, defineType } from "sanity";
import { mainGroups } from "../groups";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "menuItems",
  title: "menuItems",
  type: "document",
  icon: DocumentIcon,
  preview: { select: { title: "title", subtitle: "description" } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: mainGroups,
  fields: [
    defineField({
      type: "object",
      name: "serving",
      title: "Serving",
      fields: [
        {
          type: "cloudinary.asset",
          name: "image",
          title: "Image",
        },
        {
          title: "Alt Text",
          name: "alt",
          type: "string",
        },
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
          rows: 4,
        },
        {
          title: "Price",
          name: "price",
          type: "number",
        },
      ],
    }),

    defineField({
      type: "file",
      name: "pdf",
      title: "PDF File",
      description: "Upload the menu in a PDF format only",
      options: {
        accept: ".pdf",
        storeOriginalFilename: true,
      },
      validation: (Rule) => [Rule.required().error("A PDF file is required")],
    }),
  ],
});
