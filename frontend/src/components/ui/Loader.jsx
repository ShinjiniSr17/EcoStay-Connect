/**
 * Loader Component
 * Displays loading spinner.
 */

export default function Loader() {
  return (
    <div className="flex justify-center py-10">
      <div
        className="
        h-10
        w-10
        border-4
        border-green-500
        border-t-transparent
        rounded-full
        animate-spin
        "
      />
    </div>
  );
}