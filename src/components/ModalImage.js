import React from "react";
import ImageGatsby from "./common/ImageGatsby";
import Modal from "./Modal";

const ModalImage = ({ rounded, image, alt }) => {
  const [open, setOpen] = React.useState(false);
  // const [imageId, setImgId] = React.useState("");
  // const [imageAlt, setImgAlt] = React.useState("");

  // const handleImage = (e) => {
  //   //    const fileName = e.target.src.match("[^/]+$")[0];

  //   // console.log(image);
  //   // console.log(e.target.image);
  //   // console.log(e.target.src);

  //   //   setImgId(fileName.substr(0, fileName.length - 38));

  //   // setImgId(image)

  //   setOpen(true);

  //   // setImgAlt(alt);
  // };

  return (
    <>
      <ImageGatsby
        rounded={rounded}
        image={image}
        alt={alt}
        forceheight="true"
        onClick={() => setOpen(true)}
        cursor="true"
      />

      {open && (
        <Modal
          openModal={open}
          setOpenModal={setOpen}
          image={image}
          alt={alt}
          rounded="true"
        />
      )}
    </>
  );
};

export default ModalImage;
