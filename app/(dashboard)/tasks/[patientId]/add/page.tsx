"use client";
import { useForm, zodResolver } from "@mantine/form";
import { TimeInput } from "@mantine/dates";
import { z } from "zod";
import { PageHeader } from "@/components/common/PageHeader";
import PageMainWrapper from "@/components/common/PageMainWrapper";
import PatientForm from "./TaskForm";
import { Stack } from "@mantine/core";
import { Suspense } from "react";
import { patientSchema } from "@/lib/schema";
import TaskForm from "./TaskForm";

const AddTask = () => {
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

  return (
    <Stack>
      {" "}
      <PageHeader title={`Add Task `} />
      <PageMainWrapper>
        <TaskForm form={form} />
      </PageMainWrapper>
    </Stack>
  );
};

export default AddTask;
