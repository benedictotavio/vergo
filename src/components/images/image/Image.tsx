import styles from "./Image.module.css";
import ImageNext from "next/image";

type ImageProps = {
  src: string | Uint8Array;
  alt: string;
  isCircle?: boolean;
  width?: number;
  height?: number;
};

const Image = ({ src, alt, isCircle = false, width, height }: ImageProps) => {
  switch (typeof src) {
    case "string":
      break;
    case "object":
      if (src instanceof Uint8Array) {
        const blob = new Blob([src], { type: "image/webp" });
        src = URL.createObjectURL(blob);
      } else {
        const uint8Array = new Uint8Array(src["data"]);
        const blob = new Blob([uint8Array], { type: "image/webp" });
        src = URL.createObjectURL(blob);
      }
      break;
  }

  const stylesImage: React.CSSProperties = {
    clipPath: `${isCircle ? "circle()" : "none"}`,
    maxWidth: "100%",
  };

  if (width) {
    stylesImage.width = width + "px";
  } else {
    stylesImage.width = "auto";
  }

  if (height) {
    stylesImage.height = height + "px";
  } else {
    stylesImage.height = "auto";
  }

  return (
    <ImageNext
      style={stylesImage}
      src={src}
      blurDataURL={src}
      alt={alt}
      className={styles.image}
      width={width ? width : 200}
      height={height ? height : 200}
      priority={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default Image;
