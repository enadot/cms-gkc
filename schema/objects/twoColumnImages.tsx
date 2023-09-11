import { defineType } from "sanity";
import { ComponentType } from "react";

type TwoColumnImages = {
  leftImage: {
    alt: string;
    credit?: string;
    url: string;
  };
  rightImage: {
    alt: string;
    credit?: string;
    url: string;
  };
};

const Preview: ComponentType<{ value: TwoColumnImages }> = ({ value }) => {
  if (!value) {
    return <div>Images are missing</div>;
  }

  return (
    <div>
      <div>
        <img alt={value.leftImage.alt} src={value.leftImage.url} />
        {value.leftImage.credit && <p>{value.leftImage.credit}</p>}
      </div>
      <div>
        <img alt={value.rightImage.alt} src={value.rightImage.url} />
        {value.rightImage.credit && <p>{value.rightImage.credit}</p>}
      </div>
    </div>
  );
};

export default defineType({
  name: "twoColumnImages",
  title: "Two Images (Grid)",
  type: "object",
  fields: [
    {
      name: "leftImage",
      title: "Left Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Alternative text is required.",
          validation: (Rule) => [Rule.required()],
        },
        {
          name: "credit",
          type: "string",
          title: "Photographer Credit",
          description: "Optional: add here the name of the photographer",
        },
        {
          name: "url",
          type: "url", // Use the 'url' type for the image source URL
          title: "Image URL",
        },
      ],
    },
    {
      name: "rightImage",
      title: "Right Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Alternative text is required.",
          validation: (Rule) => [Rule.required()],
        },
        {
          name: "credit",
          type: "string",
          title: "Photographer Credit",
          description: "Optional: add here the name of the photographer",
        },
        {
          name: "url",
          type: "url", // Use the 'url' type for the image source URL
          title: "Image URL",
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     leftImage: "leftImage",
  //     rightImage: "rightImage",
  //   },
  //   component: Preview,
  // },
});
