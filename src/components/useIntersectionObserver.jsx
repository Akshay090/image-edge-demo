import React, { useEffect, useRef } from "react";

const useIntersectionObserver = (option = {}) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = React.useState(1);
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const intersectionCallback = (entries) => {
    const [entry] = entries;
    setContainerWidth(entry.boundingClientRect.width);
    if (entry.isIntersecting) {
      setIsIntersecting(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      // load image 2px before it appears, for demo
      root: null,
      rootMargin: "2px",
      threshold: 0.0,
      ...option,
    });
    if (containerRef.current) observer.observe(containerRef.current);
    const currentRef = containerRef.current;
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [option]);

  return { containerRef, containerWidth, isIntersecting };
};

export default useIntersectionObserver;
