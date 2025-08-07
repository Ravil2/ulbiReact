import cl from './Loader.module.css';

export default function Loader({ size, variant, className }) {
  const loaderClasses = [
    cl.loader,
    size && cl[size],
    variant && cl[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={loaderClasses} aria-label="Loading">
      <div className={cl.inner}></div>
    </div>
  );
}