export function Button({ children, onClick, variant = 'default' }) {
  const base = 'px-4 py-2 rounded font-medium';
  const style =
    variant === 'outline'
      ? base + ' border border-gray-400 text-gray-700 bg-white'
      : base + ' bg-blue-600 text-white';
  return <button onClick={onClick} className={style}>{children}</button>;
}
