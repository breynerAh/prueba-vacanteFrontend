import TableUI from "@/components/componentUI/table.ui";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { User } from "../../domain/user/user.interface";
import { useState } from "react";
import { redirect } from "next/navigation";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = users?.filter(
    (item) =>
      item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      item?.username?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const tableHeader = (
    <>
      <TableRow>
        <TableHead className="w-[100px]">Id</TableHead>
        <TableHead className="w-[30%]">Nombre</TableHead>
        <TableHead className="w-[30%]">Usuario</TableHead>
        <TableHead>Correo</TableHead>
      </TableRow>
    </>
  );

  const handleClickActionTable = (id: number) => {
    redirect(`/users/${id}`);
  };

  const tableBody = (
    <>
      {filteredData?.map((user) => (
        <TableRow
          key={user?.id}
          className="cursor-pointer"
          onClick={() => handleClickActionTable(user?.id)}
        >
          <TableCell className="font-medium">{user.id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
        </TableRow>
      ))}
    </>
  );

  return (
    <div className="w-[80%]">
      <TableUI
        height="500px"
        header={tableHeader}
        body={tableBody}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
