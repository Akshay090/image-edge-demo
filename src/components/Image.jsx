import useIntersectionObserver from "./useIntersectionObserver";
import { getImageUrl } from "./utils";

// previewSize - 1, 8, 64, 128, 256, 512, 1024, 2048
const Image = ({ height, width, path, previewSize }) => {
  const { containerRef } = useIntersectionObserver();

  const baseURL = "https://d152pmcrqu9fdo.cloudfront.net/";

  const imageURL = getImageUrl({ baseURL, width: previewSize, path });

  return (
    <div
      ref={containerRef}
      style={{
        width: width || "100%",
        height: height || "100%",
      }}
    >
      <img
        src={imageURL}
        style={{
          width: width || "100%",
          height: height || "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default Image;
