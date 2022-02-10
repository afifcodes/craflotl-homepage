export default function SpanLabel({ children }) {
  return (
    <span className="font-eudoxus tracking-tight bg-blue-100 dark:bg-neutral-800 font-semibold px-4 py-1 rounded-full text-blue-600 dark:text-neutral-200 text-sm">
      {children}
    </span>
  );
}
