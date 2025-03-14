"use client";
import { SkeletonUI } from "@/components/componentUI/eskeleton.ui";
import { useQuery } from "@tanstack/react-query";
import UserList from "../components/user/userList";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });

  if (error) return "Ha ocurrido un error: " + error.message;

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <p className="text-[18px] font-semibold text-[#737373]">
        Lista de usuarios
      </p>

      {isPending ? <SkeletonUI /> : <UserList users={data} />}
    </div>
  );
}
