import { graphql, useStaticQuery } from "gatsby";

const useFilterImage = (src: string, grayscale: boolean): object => {
  //Types
  type ImageData = {
    gatsbyImageData: {
      images: {
        fallback: {
          src: string;
        };
      };
    };
  };
  //  type ArrayData = {
  //    gatsbyImageData: {
  //      images: {
  //        fallback: {
  //          src: string;
  //        };
  //      };
  //    };
  //  }
  //  [];

  let image: ImageData;
  let arr: any;

  const query = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      grayscale: allImageSharp {
        nodes {
          gatsbyImageData(
            layout: CONSTRAINED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  `);

  if (grayscale) {
    arr = query.grayscale.nodes;
    image = arr.find((item) =>
      item.gatsbyImageData.images.fallback.src.includes(src)
    );

    return image !== undefined && image.gatsbyImageData;
  } else {
    arr = query.allImageSharp.nodes;
    image = arr.find((item) =>
      item.gatsbyImageData.images.fallback.src.includes(src)
    );

    return image !== undefined && image.gatsbyImageData;
  }
};

export default useFilterImage;
