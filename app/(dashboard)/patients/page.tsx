"use client";
import CustomTable from "@/components/common/CustomTable";
import { FilterLayout } from "@/components/common/FilterLayout";
import MainLayout from "@/components/common/MainLayout";
import { PageHeader } from "@/components/common/PageHeader";
import callApi from "@/services/apiService";
import QRCode from "react-qr-code";

import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconDownload,
  IconEdit,
  IconEye,
  IconPlus,
  IconQrcode,
  IconTrash,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "mantine-datatable";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import PreviewQR from "./add/PreviewQR";
// import { PrintLayout } from "./PrintLayout";
import { checkStatus } from "@/lib/constants";
import { useTableQuery } from "@/lib/hooks/useTableQuery";
import PreviewQR from "../stores/add/PreviewQR";
import { PrintLayout } from "../stores/PrintLayout";
import { patientData } from "@/apiData";
import { useRouter } from "next/navigation";

function Patients() {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  // const [storeId, setStoreId] = useState();
  const [qrCode, setQrCode] = useState("");
  const [storeInfo, setStoreInfo] = useState();

  const handleModal = (id, record) => {
    // console.log("siteurl", process.env.NEXT_PUBLIC_SITE_URL);
    // setStoreId(id);
    // setQrCode(`${process.env.NEXT_PUBLIC_SITE_URL}/stores/${id}`);
    // setStoreInfo(record);
  };

  useEffect(() => {
    if (!qrCode) return;
    open();
  }, [qrCode]);

  const columns = [
    {
      accessor: "name",
      title: "Name",
      render: ({ firstName }: any) => firstName || "N/A",
    },

    {
      accessor: "diagnosedWith",
      title: "Diagnosed With",
      render: ({ diagnosedWith }: any) => diagnosedWith || "N/A",
    },
    {
      accessor: "dateOfBirth",
      title: "Date of Birth",
      render: ({ dateOfBirth }: any) => dateOfBirth || "N/A",
    },
    {
      accessor: "gender",
      title: "Gender",
      render: ({ gender }: any) => gender || "N/A",
    },
    {
      accessor: "email",
      title: "Email Address",
      render: ({ email }: any) => email || "N/A",
    },
    {
      accessor: "phone",
      title: "Phone Number",
      render: ({ phone }: any) => phone || "N/A",
    },

    {
      accessor: "actions",
      title: <Box mr={6}>Actions</Box>,
      textAlign: "right",
      render: (record: any) => (
        <Button
          style={{ fontSize: "12px" }}
          variant="table"
          onClick={() => router.push(`/patients/customize/${record.id}`)}
          leftSection={<IconQrcode size={16} />}
        >
          App Settings
        </Button>
      ),
    },
  ];

  const records = [{ id: 1, name: "azhar", city: "kmm", state: "telangana" }];

  const handleTypeChange = () => {};
  const handleSearch = () => {};

  const handleRecordsPerPage = () => {};

  const filters = [
    {
      id: "type",
      label: "Merchants",
      options: [{ value: "1", label: "Type 1" }],
      // onChange: (value) => handleTypeChange(value),
    },
    // ... more filters
  ];

  const [page, setPage] = useState(1);
  const pageSize = 10;

  const queryFilters = {
    url: "/v1/stores",
    key: "get-stores",
    page,
    pageSize,
  };

  //   const getStoresQuery = useTableQuery(queryFilters);
  const getStoresQuery = {
    totalResults: [],
    currentPage: 1,
    pageSize: 1,
    isLoading: false,
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Generate QR data based on merchant info

  // Function to download QR code as SVG
  const downloadQRCode = () => {
    const svg = document.getElementById("merchant-qr-code");
    const svgData = new XMLSerializer()?.serializeToString(svg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    // downloadLink.download = `store-${storeId}-qr.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  return (
    <>
      <div className="mb-4">
        <PageHeader
          title={"Patients"}
          rightSection={
            <Group>
              <Link href={"/patients/add"}>
                <Button leftSection={<IconPlus size={16} />}>
                  New Patient
                </Button>
              </Link>
            </Group>
          }
        />
      </div>
      <Stack gap={20} mb={20} className=" bg-white shadow-xl">
        <FilterLayout
          filters={filters}
          onSearch={handleSearch}
          // onRecordsPerPageChange={handleRecordsPerPage}
        />
        <CustomTable
          // getStoresQuery?.tableData ||
          records={patientData}
          columns={columns}
          // totalRecords={getStoresQuery?.totalResults || 0}
          totalRecords={patientData.length}
          currentPage={getStoresQuery?.currentPage || 1}
          pageSize={getStoresQuery?.pageSize || 0}
          onPageChange={handlePageChange}
          isLoading={getStoresQuery.isLoading}
        />
      </Stack>

      <Modal
        opened={opened}
        onClose={() => {
          setQrCode("");
          close();
        }}
        title="Store QR Code"
        size="md"
        centered
      >
        <Stack className="items-center p-4">
          <PreviewQR storeInfo={storeInfo} qrCode={qrCode} />
          <Button
            onClick={downloadQRCode}
            leftSection={<IconDownload size={16} />}
            className="mt-4"
          >
            Download QR Code
          </Button>
          <PrintLayout qrCode={qrCode} storeInfo={storeInfo} />
        </Stack>
      </Modal>
    </>
  );
}

export default Patients;
