import { Comments } from "@/app/domain/comments/comments.interface";
import { ModalUI } from "@/components/componentUI/modal.ui";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Posts } from "../../domain/posts/posts.interface";

interface PostsDetailProps {
  posts: Posts;
  comments: Comments[];
}

export default function PostsDetailComponent({
  posts,
  comments,
}: PostsDetailProps) {
  const [newComment, setNewComment] = useState("");
  const [open, setOpen] = useState(false);
  const [updateComments, setUpdateComments] = useState<Comments[]>([]);

  const router = useRouter();

  const handleRedirect = () => {
    router.push("/posts");
  };

  const handleSubmit = () => {
    if (newComment !== "") {
      const newCommentUpdate = {
        id: updateComments?.length + 1,
        postId: posts?.id,
        email: "userPrueba1@gmail.com",
        name: "user prueba perez",
        body: newComment,
      };

      setUpdateComments([...updateComments, newCommentUpdate]);
      setNewComment("");
      setOpen(false);
    }
  };

  useEffect(() => {
    setUpdateComments(comments);
  }, [comments]);

  return (
    <div className="w-[80%]">
      <div className="flex justify-end">
        <Button
          className="cursor-pointer mr-[8px]"
          onClick={() => handleRedirect()}
        >
          Volver a la lista
        </Button>
        <ModalUI
          title="Agregar comentario"
          subtitle="Ingrese su comentario."
          setNewComment={setNewComment}
          handleSubmit={handleSubmit}
          open={open}
          setOpen={setOpen}
        />
      </div>

      <Separator className="my-4" />
      <Card>
        <CardHeader>
          <CardTitle>Publicación del usuario</CardTitle>
          <CardDescription>Id usuario: {posts?.userId}</CardDescription>
          <CardContent>
            <Separator className="my-4" />
            <h1 className="text-[14px] text-[#777777]">Titulo</h1>
            <p>{posts?.title}</p>
            <Separator className="my-4" />
            <h1 className="text-[14px] text-[#777777]">Contenido</h1>
            <p>{posts?.body}</p>
          </CardContent>
        </CardHeader>
      </Card>
      <Separator className="my-4" />
      <Card className="overflow-y-auto h-[400px]">
        <CardHeader>
          <CardTitle>Comentarios</CardTitle>
          {updateComments?.map((comment) => {
            return (
              <div key={`key-${comment?.id}`}>
                <CardContent>
                  <Separator className="my-4" />
                  <div className="flex items-center">
                    <h1 className="text-[14px] text-[#777777] mr-[8px]">
                      Nombre:{" "}
                    </h1>
                    <p>{comment?.name}</p>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-[14px] text-[#777777] mr-[8px]">
                      Correo:
                    </h1>
                    <p>{comment?.email}</p>
                  </div>
                  <div className="border-b-1 border-b-[#d9d9d9]">
                    <h1 className="text-[14px] text-[#777777]">Contenido:</h1>
                    <p>{comment?.body}</p>
                  </div>
                </CardContent>
              </div>
            );
          })}
        </CardHeader>
      </Card>
    </div>
  );
}
