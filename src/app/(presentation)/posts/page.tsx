"use client";
import { useQuery } from "@tanstack/react-query";
import PostsList from "@/app/components/posts/postsList";
import { SkeletonUI } from "@/components/componentUI/eskeleton.ui";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["getAllPosts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (error) return "Ha ocurrido un error: " + error.message;

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <p className="text-[18px] font-semibold text-[#737373]">
        Lista de publicaciones
      </p>
      {isPending ? <SkeletonUI /> : <PostsList posts={data} />}
    </div>
  );
}
