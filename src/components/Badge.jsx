export default function Badge({ status }) {
  return (
    <span className="ml-2 text-xs px-2 py-1 bg-green-500 text-white rounded">
      {status}
    </span>
  );
}