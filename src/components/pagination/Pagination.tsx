import styles from "./Pagination.module.css";

type PaginationProps = {
  currentPage: number;
  onPrevPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNextPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  prevPage?: boolean;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onNextPage,
  onPrevPage,
  prevPage = true,
}) => {
  return (
    <>
      {
        <div className={styles.pagination}>
          <button
            className={styles.pagination_button_prev}
            onClick={onPrevPage}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            disabled={!prevPage}
            className={styles.pagination_button_next}
            onClick={onNextPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      }
    </>
  );
};

export default Pagination;
