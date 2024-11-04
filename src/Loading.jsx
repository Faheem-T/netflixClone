export function Loading({ componentName }) {
  return (
    <div className="h-full w-full text-center text-4xl font-bold flex items-center content-center">
      <div className="m-auto">Loading {componentName}...</div>
    </div>
  );
}
