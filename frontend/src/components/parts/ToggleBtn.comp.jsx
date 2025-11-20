export function ToggleBtn({ toggleHandler, className, title }) {
  return (
    <>
      <button
        className={`btn ${className}`}
        aria-label="toggle button"
        onClick={toggleHandler}
      >
        {title}
      </button>
    </>
  );
}
