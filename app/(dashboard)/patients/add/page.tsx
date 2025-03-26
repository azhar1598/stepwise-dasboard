"use client";
import { useForm, zodResolver } from "@mantine/form";
import { TimeInput } from "@mantine/dates";
import { z } from "zod";
import { PageHeader } from "@/components/common/PageHeader";
import PageMainWrapper from "@/components/common/PageMainWrapper";
import PatientForm from "./PatientForm";
import { Stack } from "@mantine/core";
import { Suspense } from "react";

const patientSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  dateOfBirth: z.date(),

  diagnosedWith: z.enum(["down-syndrome", "autism", "other"], {
    required_error: "Please select a diagnosis",
  }),

  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .number()
    .min(10, { message: "Phone number must be at least 10 digits" }),

  gender: z.enum(["male", "female", "other", "prefer-not-to-say"]),
  preferredLanguage: z.enum(["english", "spanish", "mandarin", "other"]),

  address: z.string().min(5, { message: "Address is required" }),

  additionalNotes: z.string().optional(),

  accessibilitySettings: z
    .object({
      textToSpeech: z.boolean().optional(),
      fontSize: z.number().min(12).max(24).optional(),
      colorScheme: z.enum(["high-contrast", "pastel", "default"]).optional(),
    })
    .optional(),
});

const StoreRegistrationContent = () => {
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
      <PageHeader title={`Add Patient `} />
      <PageMainWrapper>
        <PatientForm form={form} />
      </PageMainWrapper>
    </Stack>
  );
};

const StoreRegistration = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StoreRegistrationContent />
    </Suspense>
  );
};

export default StoreRegistration;
