export default function Card({ children }) {
  return (
    <div className="rounded-xl shadow border bg-white dark:bg-gray-800">
      {children}
    </div>
  );
}