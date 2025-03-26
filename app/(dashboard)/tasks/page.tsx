"use client";

import { useState } from "react";
import CustomTable from "@/components/common/CustomTable";
import { PageHeader } from "@/components/common/PageHeader";
import { Group, Button, Stack, Badge } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { tasks } from "@/apiData"; // Assuming tasks data is imported here
import Link from "next/link";
import { FilterLayout } from "@/components/common/FilterLayout";
import { useRouter } from "next/navigation";

function Tasks() {
  const router = useRouter();
  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return (
          <Badge
            color="green"
            // size="10"
            className="text-xs py-2"
            style={{ padding: "5px 5px 5px 5px", fontSize: "10px" }}
          >
            Completed
          </Badge>
        );

      case "Failed":
        return <Badge color="red">Failed</Badge>;
      default:
        return <Badge color="gray">Unknown</Badge>;
    }
  };

  const columns = [
    {
      accessor: "name",
      title: "Task Name",
      align: "center",
    },
    {
      accessor: "category",
      title: "Category",
      align: "center",
    },

    {
      accessor: "difficulty",
      title: "Difficulty",
      align: "center",
    },

    {
      accessor: "timeSpent",
      title: "Time Spent (Minutes)",
      align: "center",
    },
    {
      accessor: "successRate",
      title: "Success Rate (%)",
      align: "center",
    },
    {
      accessor: "date",
      title: "Date",
      align: "center",
    },
    {
      accessor: "status",
      title: "Status",
      align: "center",
      render: ({ status }) => getStatusBadge(status), // Render the chip for status
    },
    {
      accessor: "actions",
      title: "Actions",
      align: "center",
      render: (record) => (
        <Group>
          <Button
            style={{ fontSize: "12px" }}
            variant="table-btn-primary"
            onClick={() => router.push(`/tasks/view-task-report/${record.id}`)}
            // Add logic to handle "Edit" button
          >
            View Report
          </Button>
          <Button
            style={{ fontSize: "12px" }}
            variant="table-btn-danger"
            // disabled={true}
            // Add logic to handle "Delete" button
          >
            Delete
          </Button>
        </Group>
      ),
    },
  ];

  const [page, setPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const filters = [
    {
      id: "type",
      label: "Patients",
      options: [
        { value: "all", label: "All" },
        { value: "1", label: "Patient 1" },
        { value: "2", label: "Patient 2" },
        { value: "3", label: "Patient 3" },
        { value: "4", label: "Patient 4" },
        { value: "5", label: "Patient 5" },
        { value: "6", label: "Patient 6" },
        { value: "7", label: "Patient 7" },
        { value: "8", label: "Patient 8" },
      ],
      // onChange: (value) => handleTypeChange(value),
    },

    // ... more filters
  ];

  return (
    <>
      <div className="mb-4">
        <PageHeader
          title={"Tasks"}
          rightSection={
            <Group>
              <Link href={`/tasks/133/add`}>
                <Button leftSection={<IconPlus size={16} />}>New Task</Button>
              </Link>
            </Group>
          }
        />
      </div>
      <Stack gap={20} mb={20} className="bg-white shadow-xl">
        <FilterLayout
          filters={filters}
          searchable={false}
          onSearch={() => {}}
          //   onSearch={handleSearch}
          // onRecordsPerPageChange={handleRecordsPerPage}
        />
        <CustomTable
          records={tasks}
          columns={columns}
          totalRecords={tasks.length}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </Stack>
    </>
  );
}

export default Tasks;
