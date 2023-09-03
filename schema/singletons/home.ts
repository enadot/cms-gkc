export default {
  name: "home",
  title: "Home Page",
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
      validation: (Rule) =>
        Rule.required().max(260).warning("Maximum 260 characters recommended."),
      description: "Enter a brief meta description (up to 260 characters).",
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
