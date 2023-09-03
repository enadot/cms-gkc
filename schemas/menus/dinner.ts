import { defineField, defineType } from "sanity";
import { mainGroups } from "../groups";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "dinner",
  title: "Dinner",
  type: "document",
  icon: DocumentIcon,
  preview: { select: { title: "title", subtitle: "description" } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: mainGroups,
  fields: [
    defineField({
      type: "object",
      name: "thumbnail",
      title: "Thumbnail",
      fields: [
        {
          type: "cloudinary.asset",
          name: "image",
          title: "Image",
          description: "Used for the hero / main image on the page",
        },

        {
          title: "Alt Text",
          name: "alt",
          type: "string",
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
