export default {
  name: "settings",
  title: "Site Settings",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Meta Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "keywords",
      title: "Meta keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
