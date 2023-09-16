import { useEffect, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { getImageUrl } from "./utils";

// previewSize - 1, 8, 64, 128, 256, 512, 1024, 2048
const ImageComponent = ({ height, width, path, previewSize }) => {
  const { containerRef, isIntersecting } = useIntersectionObserver();

  const baseURL = "https://d152pmcrqu9fdo.cloudfront.net/";

  const imageURL = getImageUrl({ baseURL, path });

  const previewURL = getImageUrl({ baseURL, width: previewSize, path });

  const [imgSrc, setImgSrc] = useState(previewURL);

  const isSrcPreviewURL = imgSrc === previewURL;

  useEffect(() => {
    if (isIntersecting) {
      setImgSrc(imageURL);
    }
  }, [imageURL, isIntersecting]);

  return (
    <div
      ref={containerRef}
      style={{
        width: width || "100%",
        height: height || "100%",
      }}
    >
      <img
        src={imgSrc}
        style={{
          width: width || "100%",
          height: height || "100%",
          objectFit: "contain",
          ...(isSrcPreviewURL
            ? { filter: "blur(10px)", clipPath: "inset(0)" }
            : {
                filter: "blur(0px)",
                transition: "filter 0.5s linear",
              }),
        }}
      />
    </div>
  );
};

export default ImageComponent;
