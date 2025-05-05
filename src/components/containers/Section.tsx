import styles from "./Section.module.css";

type SectionProps = {
  children?: React.ReactNode;
  height?: number;
  bgColor?: string;
  name: string;
  isAlignCenter?: boolean;
  noSpaceTop?: boolean;
  container?: boolean | number;
  direction?: "row" | "column";
};

const Section: React.FC<SectionProps> = ({
  children,
  height,
  bgColor,
  name,
  isAlignCenter = false,
  noSpaceTop = false,
  container = false,
  direction = "row",
}: SectionProps) => {
  const sectionStyle: React.CSSProperties = {
    minHeight: `${height}vh` || "auto",
    backgroundColor: bgColor || "transparent",
    width: "100%",
  };

  if (!noSpaceTop) {
    sectionStyle.marginTop = "20px";
  }

  if (isAlignCenter) {
    sectionStyle.display = "flex";
    sectionStyle.justifyContent = "center";
    sectionStyle.alignItems = "center";
    sectionStyle.flexDirection = direction;
  }

  if (container) {
    if (typeof container === "number") {
      sectionStyle.padding = `${container}px`;
    } else {
      sectionStyle.padding = "20px";
    }
  }

  return (
    <section style={sectionStyle} className={styles.section} id={name}>
      {children}
    </section>
  );
};

export default Section;
