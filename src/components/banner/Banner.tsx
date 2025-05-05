import { StaticImageData } from 'next/image';
import styles from './Banner.module.css';

type BannerProps = {
  backgroundImage?: StaticImageData;
  children?: React.ReactNode;
};

const Banner: React.FC<BannerProps> = ({ backgroundImage, children }) => {

  const bannerStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage?.src})`,
  };

  return (
    <div className={styles.banner} style={bannerStyle}>
      {children}
    </div>
  );
};

export default Banner;