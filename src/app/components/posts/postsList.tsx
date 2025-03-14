import { Posts } from "@/app/domain/posts/posts.interface";
import TableUI from "@/components/componentUI/table.ui";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { redirect } from "next/navigation";
import { useState } from "react";

interface PostsListProps {
  posts: Posts[];
}

export default function PostsList({ posts }: PostsListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = posts?.filter((item) =>
    item?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const tableHeader = (
    <>
      <TableRow>
        <TableHead className="w-[100px]">Id</TableHead>
        <TableHead className="w-[30%]">Id usuario</TableHead>
        <TableHead className="w-[30%]">Titulo</TableHead>
        <TableHead>Contenido</TableHead>
      </TableRow>
    </>
  );

  const handleClickActionTable = (id: number) => {
    redirect(`/posts/${id}`);
  };

  const tableBody = (
    <>
      {filteredData?.map((post) => (
        <TableRow
          key={post?.id}
          className="cursor-pointer"
          onClick={() => handleClickActionTable(post?.id)}
        >
          <TableCell className="font-medium">{post.id}</TableCell>
          <TableCell>{post.userId}</TableCell>
          <TableCell className="max-w-[400px] truncate">{post.title}</TableCell>
          <TableCell className="max-w-[400px] truncate">{post.body}</TableCell>
        </TableRow>
      ))}
    </>
  );

  return (
    <div className="w-[80%]">
      <TableUI
        header={tableHeader}
        body={tableBody}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
