export function ToggleBtn({ toggleHandler, className, title }) {
  return (
    <>
      <button className={`btn ${className}`} onClick={toggleHandler}>
        {title}
      </button>
    </>
  );
}
