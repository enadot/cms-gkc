import { defineType } from "sanity";

export default defineType({
  name: "navItem",
  type: "object",
  fields: [
    {
      name: "link",
      title: "Page (href)",
      type: "reference",
      to: [{ type: "post" }],
      description: "Select the page this nav link should point to",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      type: "string",
      description: "Enter the text of the nav link",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "submenuOption",
      title: "Opens a submenu?",
      type: "boolean",
      description: "Check this box to add children to this nav item",
      initialValue: false,
    },
    {
      name: "subMenuItems",
      title: "Sub-Menu Items",
      type: "array",
      of: [{ type: "subMenuItem" }],
      description: "Add the sub-menu Items",
      hidden: (field) => !field.parent.submenuOption,
    },
  ],
});
