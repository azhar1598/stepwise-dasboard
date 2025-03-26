"use client";
import React from "react";
import PatientAppSettings from "./CustomizeForm";
import { useForm } from "@mantine/form";
import PageMainWrapper from "@/components/common/PageMainWrapper";
import { PageHeader } from "@/components/common/PageHeader";
import { Stack } from "@mantine/core";
import { useParams } from "next/navigation";
import { patientData } from "@/apiData";

function page() {
  const form = useForm({
    initialValues: {
      voiceSpeed: 1,
      difficultyLevel: "beginner",
      voiceType: "female-clear",
      fontFamily: "arial",
    },
  });

  const params = useParams();

  const patientDetails = patientData.find(
    (patient) => patient.id === Number(params.id)
  );

  return (
    <Stack>
      {" "}
      <PageHeader
        title={`App Settings: ${patientDetails?.firstName} ${patientDetails?.lastName}`}
      />
      <PageMainWrapper>
        <PatientAppSettings form={form} saveSettings={() => {}} />
      </PageMainWrapper>
    </Stack>
  );
}

export default page;
