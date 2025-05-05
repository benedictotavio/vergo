export type ButtonProps = {
    children?: React.ReactNode;
    redirectUrl?: string;
    color: string;
    isExternal?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    noBackground?: boolean;
  };