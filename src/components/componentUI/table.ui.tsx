"use client";
import { Dispatch, SetStateAction } from "react";
import { Table, TableBody, TableHeader } from "../ui/table";
import { Input } from "../ui/input";

interface TableUIProps {
  header: React.ReactNode;
  body: React.ReactNode;
  searchTerm: string;
  height?: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function TableUI({
  header,
  body,
  searchTerm,
  setSearchTerm,
  height,
}: TableUIProps) {
  return (
    <div
      className="p-4 rounded border-1 border-gray-200 overflow-y-auto"
      style={{ maxHeight: height || "500px" }}
    >
      <Input
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 mb-4 border rounded"
      />
      <Table className="border-1 border-gray-200">
        <TableHeader>{header}</TableHeader>
        <TableBody>{body}</TableBody>
      </Table>
    </div>
  );
}
