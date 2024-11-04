export function Loading({ componentName }) {
  return (
    <div className="h-full w-full text-center text-4xl font-thin flex items-center content-center text-gray-500">
      <div className="m-auto">Loading {componentName}...</div>
    </div>
  );
}
