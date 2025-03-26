import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Radio,
  Text,
  TextInput,
  Select,
  Textarea,
  NumberInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { usePageNotifications } from "@/lib/hooks/useNotifications";
import { useRouter } from "next/navigation";
import { patientData } from "@/apiData";

function EditPatientForm({ form }) {
  // Validate form fields

  console.log(form.values, form, form.isValid(), form.errors, "check");

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const notification = usePageNotifications();

  return (
    <form
      onSubmit={form.onSubmit(() => {
        console.log(form.values);
        setLoading(true);
        const newData = {
          ...form.values,
          id: patientData.length + 1,
          dateOfBirth: form.values.dateOfBirth.toISOString(),
        };
        patientData.push(newData);

        setTimeout(() => {
          notification.success(`Patient added successfully`);
          router.push("/patients");
          setLoading(false);
        }, 1000);
      })}
    >
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="First Name"
            placeholder="Enter first name"
            required
            {...form.getInputProps("firstName")}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="Last Name"
            placeholder="Enter last name"
            required
            {...form.getInputProps("lastName")}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Diagnosed With"
            placeholder="Select diagnosed with"
            data={[
              { value: "down-syndrome", label: "Down Syndrome" },
              { value: "autism", label: "Autism" },
              { value: "other", label: "Other" },
            ]}
            required
            {...form.getInputProps("diagnosedWith")}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <DateInput
            label="Date of Birth"
            valueFormat="YYYY MMM DD"
            placeholder="Date input"
            {...form.getInputProps("dateOfBirth")}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Gender"
            placeholder="Select gender"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
              { value: "prefer-not-to-say", label: "Prefer not to say" },
            ]}
            {...form.getInputProps("gender")}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="Email Address"
            placeholder="you@example.com"
            required
            {...form.getInputProps("email")}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <NumberInput
            label="Phone Number"
            placeholder="(555) 555-5555"
            required
            allowDecimal={false}
            allowNegative={false}
            hideControls
            {...form.getInputProps("phone")}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Preferred Language"
            placeholder="Select language"
            data={[
              { value: "english", label: "English" },
              { value: "spanish", label: "Spanish" },
              { value: "mandarin", label: "Mandarin" },
              { value: "other", label: "Other" },
            ]}
            {...form.getInputProps("preferredLanguage")}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Textarea
            label="Home Address"
            placeholder="Enter full address"
            required
            {...form.getInputProps("address")}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Textarea
            label="Additional Notes"
            placeholder="Any additional information (optional)"
            {...form.getInputProps("additionalNotes")}
          />
        </Grid.Col>
      </Grid>

      <Group justify="space-between" mt="xl">
        <Button
          type="submit"
          disabled={!form.isValid() || !form.isDirty()}
          loading={loading}
        >
          {form.values.id ? "Update Patient" : "Add Patient"}
        </Button>
      </Group>
    </form>
  );
}

export default EditPatientForm;
