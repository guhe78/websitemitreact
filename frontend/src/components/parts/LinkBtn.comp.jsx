export function LinkBtn({ title, className, link }) {
  return (
    <>
      <a className={className} href={link} target="_blank">
        {title}
      </a>
    </>
  );
}
