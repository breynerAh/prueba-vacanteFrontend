"use client";

import PostsDetailComponent from "@/app/components/posts/postDetail";
import { SkeletonUI } from "@/components/componentUI/eskeleton.ui";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function PostsDetail() {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["getOnePost", id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
        res.json()
      ),
  });

  const { data: dataComments } = useQuery({
    queryKey: ["getComments", id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(
        (res) => res.json()
      ),
  });

  if (error) return "Ha ocurrido un error: " + error.message;

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      {isPending ? (
        <SkeletonUI />
      ) : (
        <PostsDetailComponent posts={data} comments={dataComments} />
      )}
    </div>
  );
}
