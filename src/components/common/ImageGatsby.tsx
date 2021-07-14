import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import styled, { StyledProps } from "styled-components";

// Types
type ImgProps = StyledProps<{
  width?: string;
  height?: string;
  forceheight?: string;
  rounded?: string;
  shadow?: string;
  cursor?: string;
  image: object;
}>;

type ImageProps = {
  onClick?: () => void;
  rounded?: boolean;
  image: any;
  cursor?: boolean;
  shadow?: boolean;
  alt: string;
  forceheight?: boolean;
  width?: string;
  height?: string;
};

// Styled components
const Img = styled(GatsbyImage)`
  width: ${(props: ImgProps) => `${props.width} !important`};
  height: ${(props: ImgProps) =>
    props.forceheight ? `${props.height} !important` : "auto"};
  animation: 0.2s fade;
  overflow: hidden;
  border-radius: ${(props: ImgProps) =>
    props.rounded ? "4px !important" : "0"};
  box-shadow: ${(props: ImgProps) =>
    props.shadow
      ? "rgba(17, 17, 26, 0.2) 0px 1px 0px, rgba(17, 17, 26, 0.2) 0px 8px 24px, rgba(17, 17, 26, 0.2) 0px 16px 48px !important"
      : "none"};
  /* margin: 0 auto !important; */

  div {
    justify-content: center;
    border-radius: ${(props: ImgProps) =>
      props.rounded ? "4px !important" : "0"};
    height: ${(props: ImgProps) =>
      props.forceheight ? `${props.height} !important` : "auto"};
    /* margin: 0 auto !important; */
  }

  img {
    width: ${(props: ImgProps) => `${props.width} !important`};
    height: ${(props: ImgProps) =>
      props.forceheight ? `${props.height} !important` : "auto"};
    margin: 0 auto;
    align-self: center;
    border-radius: ${(props: ImgProps) =>
      props.rounded ? "4px !important" : "0"};
    transition: opacity 0.25s linear, transform 0.2s ease !important;
  }

  @media screen and (min-width: 768px) {
    border-radius: ${(props: ImgProps) =>
      props.rounded ? "4px !important" : "0"};
    cursor: ${(props: ImgProps) => (props.cursor ? "pointer" : "auto")};
  }
`;

const Image: React.FC<ImageProps> = ({
  onClick,
  rounded,
  image,
  cursor,
  shadow,
  alt,
  forceheight,
  width = "100%",
  height = "100%",
}) => {
  return (
    <Img
      onClick={onClick}
      image={image}
      alt={alt}
      rounded={rounded?.toString()}
      cursor={cursor?.toString()}
      shadow={shadow?.toString()}
      forceheight={forceheight.toString()}
      width={width}
      height={height}
      style={{ margin: "0 auto !important" }}
    />
  );
};

export default Image;
