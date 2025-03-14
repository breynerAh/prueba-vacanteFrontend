"use client";

import UserDetailComponent from "@/app/components/user/userDetail";
import { SkeletonUI } from "@/components/componentUI/eskeleton.ui";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function UserDetail() {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["getOneUser", id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
        res.json()
      ),
  });

  if (error) return "Ha ocurrido un error: " + error.message;

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      {isPending ? <SkeletonUI /> : <UserDetailComponent user={data} />}
    </div>
  );
}
