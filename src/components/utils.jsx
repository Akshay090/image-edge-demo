export const getImageUrl = ({ baseURL, path, format, width }) => {
  const url = new URL(`${baseURL}${path}`);
  if (width) url.searchParams.set("width", width);
  if (format) url.searchParams.set("format", format);
  return url.toString();
};

const pixelValues = [1, 8, 64, 128, 256, 512, 1024, 2048];
export const getNearestCeilingPixelValue = (containerWidth) => {
  let nearestPixelValue = null;
  for (let i = 0; i < pixelValues.length; i++) {
    const currentValue = pixelValues[i];
    if (
      currentValue > containerWidth &&
      (nearestPixelValue === null || currentValue < nearestPixelValue)
    ) {
      nearestPixelValue = currentValue;
    }
  }
  return nearestPixelValue || pixelValues[pixelValues.length - 1];
};
