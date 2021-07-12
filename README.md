<h1 align="center">
✳️gatsby-plugin-beast-modal
</h1>

A [Gatsby](https://github.com/gatsbyjs/gatsby) plugin for easy modal display with gatsby-plugin-image.

<p align="center">
<img src="https://user-images.githubusercontent.com/13293669/125135970-46335f00-e0e0-11eb-9e39-e780f14be26f.gif" height="300" />
<img src="https://user-images.githubusercontent.com/13293669/125134435-c1474600-e0dd-11eb-9ca1-3afd72b07a52.gif" height="300" />
</p>

## ✅Install

`npm install @tsaristbomba/gatsby-plugin-beast-modal`

You will also need `gatsby-source-filesystem`

`npm install gatsby-source-filesystem`

## ✅How to use

Edit `gatsby-config.js`:

```javascript
const path = require(`path`);

module.exports = {
  plugins: [
    `gatsby-plugin-beast-modal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
};
```

Example jsx:

```jsx
import React from "react";
import { ModalImage } from "@tsaristbomba/gatsby-plugin-beast-modal";
import { graphql, useStaticQuery } from "gatsby";

const Index = () => {
  const query = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `).allImageSharp.nodes;

  const colorsObj = {
    background: "#dc143c",
    primary: "#333",
    secondary: "#fff",
  };

  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <ModalImage
        image={query[0].gatsbyImageData}
        alt="ghost pepper"
        rounded="true"
        colors={colorsObj}
      />
    </div>
  );
};

export default Index;
```

## ✅Attributes

| Attribute | Description                                                                                 | Default                                                                        |
| --------- | :------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------- |
| rounded   | Rounded Image (4px). It only accepts strings,</br> so "true" or "false" (styled-components) | "false"                                                                        |
| image     | `gatsby-plugin-image` query object                                                          | none                                                                           |
| colors    | colors object                                                                               | {</br> background: "#333", </br>primary: "#333",</br> secondary: "#fff" </br>} |
| width     | Width of the image                                                                          | 100%                                                                           |
| height    | Height of the image                                                                         | 100%                                                                           |

## ✅Utils

There is a helper hook `useModalHelper` if you don't want to query the graphql yourself. The hook query's for any string that is passed as an argument as close as possible to the file name of the actual image:

```jsx
import React from "react";
import { ModalImage, useModalHelper } from "gatsby-plugin-beast-modal";

const colorsObj = {...};

return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <ModalImage
        image={useModalHelper("hero.jpg")}
        alt="ghost pepper"
        rounded="true"
        colors={colorsObj}
      />
    </div>
  );
};

export default Index;
```

If you pass `true` as the second argument, the query will have `transformOptions: { grayscale: true }` in `gatsbyImageData` options. So the image will be grayscaled.

### ✔️Note

The helper hook `useModalHelper` can't be called inside a callback. It is against [rules of hooks](https://reactjs.org/docs/hooks-rules.html).
