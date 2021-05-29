import React from "react";
import ImageGatsby from "./common/ImageGatsby";
import Modal from "./Modal";

const ModalImage = ({ rounded, image, alt, colors, shadow, width, height }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ImageGatsby
        rounded={rounded}
        image={image}
        alt={alt}
        forceheight="true"
        onClick={() => setOpen(true)}
        cursor="true"
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
          colors={colors}
          rounded="true"
        />
      )}
    </>
  );
};

export default ModalImage;
