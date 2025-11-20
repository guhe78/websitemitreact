export function LinkBtn({ title, className, link, arialabeltext }) {
  return (
    <>
      <a
        className={className}
        href={link}
        aria-label={arialabeltext}
        target="_blank"
      >
        {title}
      </a>
    </>
  );
}
