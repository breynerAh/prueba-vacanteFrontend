import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "../../domain/user/user.interface";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface UserDetailProps {
  user: User;
}

export default function UserDetailComponent({ user }: UserDetailProps) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="w-[80%]">
      <Button className="cursor-pointer" onClick={() => handleRedirect()}>
        Volver a la lista
      </Button>
      <Separator className="my-4" />
      <Card>
        <CardHeader>
          <CardTitle>Información de usuario</CardTitle>
          <CardContent>
            <CardDescription className="text-[16px] font-semibold">
              Información personal
            </CardDescription>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="truncate text-[16px] font-semibold">Nombre</div>
              <div className="truncate text-[16px] font-semibold">Usuario</div>
              <div className="truncate text-[16px] font-semibold">Correo</div>
              <div className="truncate text-[16px] font-semibold">Teléfono</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="truncate">{user?.name}</div>
              <div className="truncate">{user?.username}</div>
              <div className="truncate">{user?.email}</div>
              <div className="truncate">{user?.phone}</div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="truncate text-[16px] font-semibold">
                Sitio web
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="truncate">{user?.website}</div>
            </div>
            <Separator className="my-4" />
            <CardDescription className="text-[16px] font-semibold">
              Información residencial
            </CardDescription>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="truncate text-[16px] font-semibold">Calle</div>
              <div className="truncate text-[16px] font-semibold">
                Habitación
              </div>
              <div className="truncate text-[16px] font-semibold">Ciudad</div>
              <div className="truncate text-[16px] font-semibold">Código</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="truncate">{user?.address?.street}</div>
              <div className="truncate">{user?.address?.suite}</div>
              <div className="truncate">{user?.address?.city}</div>
              <div className="truncate">{user?.address?.zipcode}</div>
            </div>
            <Separator className="my-4" />
            <CardDescription className="text-[16px] font-semibold">
              Información compañía
            </CardDescription>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="truncate text-[16px] font-semibold">Nombre</div>
              <div className="truncate text-[16px] font-semibold">
                Frase clave
              </div>
              <div className="truncate text-[16px] font-semibold">Bs</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="truncate">{user?.company?.name}</div>
              <div className="truncate">{user?.company?.catchPhrase}</div>
              <div className="truncate">{user?.company?.bs}</div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
