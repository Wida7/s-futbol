"use client";

import DataTable from "@/components/shadcn-studio/data-table/data-table";
import { columns } from "./columns";

interface Props {
  data: any[];
}

export default function ScoreTable({ data }: Props) {
  return <DataTable
    data={data}
    columns={columns}
    initialSorting={[
      {
        id: 'posicion',
        desc: false,
      },
    ]}
  />;
}