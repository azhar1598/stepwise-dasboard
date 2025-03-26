"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { patientData } from "@/apiData";
import { Button, Group, Stack } from "@mantine/core";
import { PageHeader } from "@/components/common/PageHeader";
import PageMainWrapper from "@/components/common/PageMainWrapper";

import { useForm, zodResolver } from "@mantine/form";
import { patientSchema } from "@/lib/schema";
import EditPatientForm from "./EditPatientForm";
import Link from "next/link";
import { IconChartBar } from "@tabler/icons-react";
function page() {
  const form = useForm({
    validate: zodResolver(patientSchema),
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      diagnosedWith: "",
      email: "",
      phone: "",
      gender: "",
      preferredLanguage: "",
      address: "",
      additionalNotes: "",
    },
    validateInputOnChange: true,
  });
  const params = useParams();
  const id = params.id;
  const patient = patientData.find((patient) => patient.id == Number(id));

  useEffect(() => {
    if (patient) {
      form.setValues({
        ...patient,
        dateOfBirth: new Date(patient.dateOfBirth),
      });
    }
    form.resetDirty();
  }, [patient]);

  console.log("patient", patient);

  return (
    <Stack>
      {" "}
      <PageHeader
        title={`Edit Patient: ${patient?.firstName} ${patient?.lastName}`}
        rightSection={
          <Group>
            <Link href={`/patients/edit/${id}/view-performance`}>
              <Button leftSection={<IconChartBar size={16} />}>
                View Performance
              </Button>
            </Link>
          </Group>
        }
      />
      <PageMainWrapper>
        <EditPatientForm form={form} />
      </PageMainWrapper>
    </Stack>
  );
}

export default page;
