import { Flex, Text } from "@sanity/ui";
import { PreviewProps } from "sanity";
import { urlForImage } from "../../sanity.image";

export interface TwoColumnImages extends PreviewProps {
  s;
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
}

export const TwoColumnImagesPreview = ({
  leftImage,
  rightImage,
}: TwoColumnImages) => {
  if (rightImage === undefined || leftImage === undefined) {
    return <Text>Images are missing</Text>;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", columnGap: "0.25rem" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          aspectRatio: "1/1",
          background: "black",
        }}
      >
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt={leftImage.alt}
          src={urlForImage(leftImage).width(500).height(500).url()}
        />
      </div>
      <div>
        {leftImage.credit && (
          <p style={{ color: "#333333", fontSize: "0.85rem" }}>
            {" "}
            {leftImage.credit}
          </p>
        )}
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          aspectRatio: "1/1",
          background: "black",
        }}
      >
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt={rightImage.alt}
          src={urlForImage(rightImage).width(500).height(500).url()}
        />
        <div>
          {rightImage.credit && (
            <p style={{ color: "#333333", fontSize: "0.85rem" }}>
              {rightImage.credit}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
