import Title from "@/app/components/layouts/text/title/Title";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${styles.footer} py-3 my-2 text-center`}>
      <Title heading="h3" title="Mayara Vieira" fontSize={24} />
      <ul className="flex justify-center border-b pt-4 pb-4 mb-3 gap-4 text-gray-600">
        <li className="nav-item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="https://www.linkedin.com/in/mayara-vieira-705728166/">
            Linkedin
          </Link>
        </li>
        <li className="nav-item">
          <Link href="https://www.instagram.com/mayasvieira/profilecard/?igsh=MXQzbDBrYzFmcXhybw==">
            Instagram
          </Link>
        </li>
      </ul>
      <p className="text-center text-gray-600">
        © {new Date().getFullYear()} Company, Inc&nbsp;|&nbsp;
        <span className="text-gray-600 hover:text-gray-900">
          <Link href="https://github.com/benedictotavio">Created BY</Link>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
