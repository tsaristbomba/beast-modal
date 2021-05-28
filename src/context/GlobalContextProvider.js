import React from "react";

export const GlobalStateContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [imageId, setImgId] = React.useState("");
  const [imageAlt, setImgAlt] = React.useState("");

  const handleImage = (e) => {
    const fileName = e.target.src.match("[^/]+$")[0];

    setImgId(fileName.substr(0, fileName.length - 38));

    setOpen(true);

    setImgAlt(e.target.alt);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        open,
        imageId,
        imageAlt,
        handleImage,
        setOpen,
        setImgId,
        setImgAlt,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
