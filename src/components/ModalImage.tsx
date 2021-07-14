import React from "react";
import ImageGatsby from "./common/ImageGatsby";
import Modal from "./Modal";

// Types
type ModalImageProps = {
  rounded: boolean;
  image: object;
  alt: string;
  colors: { background: string; primary: string; secondary: string };
  shadow: boolean;
  width: string;
  height: string;
};

const ModalImage: React.FC<ModalImageProps> = ({
  rounded,
  image,
  alt,
  colors,
  shadow,
  width,
  height,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ImageGatsby
        rounded={rounded}
        image={image}
        alt={alt}
        forceheight
        onClick={() => setOpen(true)}
        cursor
        shadow={shadow}
        width={width}
        height={height}
      />

      {open && (
        <Modal
          open={open}
          setOpen={setOpen}
          image={image}
          alt={alt}
          colors={{
            background: colors.background,
            primary: colors.primary,
            secondary: colors.secondary,
          }}
          rounded
        />
      )}
    </>
  );
};

export default ModalImage;
