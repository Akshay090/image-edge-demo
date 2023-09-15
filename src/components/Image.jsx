import { useEffect, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { getNearestCeilingPixelValue, getImageUrl } from "./utils";

// previewSize - 1, 8, 64, 128, 256, 512, 1024, 2048
const ImageComponent = ({ height, width, path, previewSize }) => {
  const { containerRef, containerWidth, isIntersecting } =
    useIntersectionObserver();

  const baseURL = "https://d152pmcrqu9fdo.cloudfront.net/";

  const containerCeilSize = getNearestCeilingPixelValue(containerWidth);

  const imageURL = getImageUrl({ baseURL, width: containerCeilSize, path });

  const previewURL = getImageUrl({ baseURL, width: previewSize, path });

  const [imgSrc, setImgSrc] = useState(previewURL);

  const isSrcPreviewURL = imgSrc === previewURL;

  useEffect(() => {
    if (isIntersecting) {
      setImgSrc(imgSrc);
    }
  }, [imgSrc, isIntersecting]);

  useEffect(() => {
    const img = new Image();
    img.src = imageURL;
    img.onload = () => {
      setImgSrc(imageURL);
    };
    img.onerror = () => {
      console.log("failed to load ", imageURL);
    };
  }, [imageURL]);

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
