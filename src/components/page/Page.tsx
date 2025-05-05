import { Metadata } from "next";
import styles from "./Page.module.css";

interface PageProps {
  children: React.ReactNode;
  name: string;
  description: string;
}

export async function generateMetadata({
  name,
  description,
}: PageProps): Promise<Metadata> {
  return {
    title: `${name}`,
    description,
  };
}

const Page: React.FC<PageProps> = ({ children, name, description }) => {
  return (
    <div
      className={styles.page}
      id={`page-${name}`}
      aria-description={description}
      aria-label={description}
    >
      {children}
    </div>
  );
};

export default Page;
