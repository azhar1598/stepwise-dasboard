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
import { tasks } from "@/apiData"; // Assuming tasks data is imported here

function TaskForm({ form }) {
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
        const newTask = {
          ...form.values,
          id: tasks.length + 1, // Adjusting for unique task ID
          date: new Date().toISOString(), // Adding date field dynamically
        };
        tasks.push(newTask);

        setTimeout(() => {
          notification.success(`Task added successfully`);
          router.push("/tasks");
          setLoading(false);
        }, 1000);
      })}
    >
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="Task Name"
            placeholder="Enter task name"
            required
            {...form.getInputProps("name")}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Category"
            placeholder="Select category"
            data={[
              { value: "social-skills", label: "Social Skills" },
              { value: "self-help", label: "Self-Help" },
              { value: "motor-skills", label: "Motor Skills" },
              { value: "communication", label: "Communication" },
            ]}
            required
            {...form.getInputProps("category")}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Difficulty"
            placeholder="Select difficulty"
            data={[
              { value: "easy", label: "Easy" },
              { value: "medium", label: "Medium" },
              { value: "hard", label: "Hard" },
            ]}
            required
            {...form.getInputProps("difficulty")}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <DateInput
            label="Date"
            valueFormat="YYYY MMM DD"
            placeholder="Task date"
            {...form.getInputProps("date")}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Textarea
            label="Description"
            placeholder="Task description"
            required
            {...form.getInputProps("description")}
          />
        </Grid.Col>
      </Grid>

      <Group justify="space-between" mt="xl">
        <Button type="submit" disabled={!form.isValid()} loading={loading}>
          {form.values.id ? "Update Task" : "Add Task"}
        </Button>
      </Group>
    </form>
  );
}

export default TaskForm;
