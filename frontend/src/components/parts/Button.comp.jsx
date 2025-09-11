export default function Button({ title, className, link }) {
  return (
    <>
      <a
        className={className}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </>
  );
}
