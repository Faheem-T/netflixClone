import { useQuery } from "@tanstack/react-query";
import { fetchVideo } from "./utils/apiRequests";
import { Loading } from "./Loading";

export function TitleVideo({ id, type }) {
  const videoQuery = useQuery({
    queryKey: [id],
    queryFn: () => fetchVideo(id, type),
  });

  if (videoQuery.isError) return <div>{videoQuery.error.json}</div>;
  if (videoQuery.isLoading) return <Loading componentName="Trailer" />;

  console.log(videoQuery.data);
  return (
    <>
      <div className="font-black text-5xl mt-20 mb-4 self-center">Trailer</div>
      <iframe
        className="w-3/4 aspect-video self-center"
        src={"https://www.youtube.com/embed/" + videoQuery.data[0].key}
      />
    </>
  );
}
