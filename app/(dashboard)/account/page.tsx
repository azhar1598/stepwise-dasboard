"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Avatar,
  Text,
  TextInput,
  Textarea,
  PasswordInput,
  Switch,
  Stack,
  Paper,
  Badge,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import React, { useState } from "react";
import { z } from "zod";

const accountSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  currentPassword: z.string().optional(),
  newPassword: z.string().optional(),
  emailNotifications: z.boolean(),
  smsNotifications: z.boolean(),
});

function AccountForm() {
  const [isEditing, setIsEditing] = useState(false);

  const form: any = useForm({
    validate: zodResolver(accountSchema),
    initialValues: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 555-5555",
      address: "123 Main St, Anytown, USA",
      currentPassword: "",
      newPassword: "",
      emailNotifications: true,
      smsNotifications: false,
    },
  });

  const handleSave = () => {
    if (form.validate().hasErrors) return; // Validate form before saving
    console.log("Form saved:", form.values); // Replace with actual save logic
    setIsEditing(false);
  };

  const handleCancel = () => {
    form.reset();
    setIsEditing(false);
  };

  // Example subscription plan (can be dynamic)
  const subscriptionPlan = "Standard Plan";

  return (
    <div className="bg-white w-full mt-5 page-main-wrapper p-[20px] mb-20">
      <Paper>
        <Stack gap="xl">
          <Group mb="md" align="flex-start">
            <Avatar size="xl" radius="xl" color="blue">
              {form.values.fullName?.slice(0, 2).toUpperCase() || "U"}
            </Avatar>
            <Box>
              <Group>
                <Text size="xl" fw={700}>
                  Account Settings
                </Text>
                <Badge color="orange" variant="light" size="lg">
                  {subscriptionPlan}
                </Badge>
              </Group>
              <Text size="sm" c="dimmed">
                Manage your personal information and preferences
              </Text>
            </Box>
          </Group>

          <Divider mb="xl" />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <Grid>
              <Grid.Col span={12}>
                <Text fw={600} mb="md">
                  Personal Information
                </Text>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  label="Full Name"
                  placeholder="Your name"
                  {...form.getInputProps("fullName")}
                  disabled={!isEditing}
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  label="Email Address"
                  placeholder="your.email@example.com"
                  {...form.getInputProps("email")}
                  disabled={!isEditing}
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                  label="Phone Number"
                  placeholder="(555) 555-5555"
                  {...form.getInputProps("phone")}
                  disabled={!isEditing}
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Textarea
                  label="Address"
                  placeholder="Your address"
                  {...form.getInputProps("address")}
                  disabled={!isEditing}
                />
              </Grid.Col>

              <Grid.Col span={12} mt="lg">
                <Divider mb="md" />
                <Text fw={600} mb="md">
                  Account Security
                </Text>
              </Grid.Col>

              {isEditing && (
                <>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <PasswordInput
                      label="Current Password"
                      placeholder="Enter current password"
                      {...form.getInputProps("currentPassword")}
                    />
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <PasswordInput
                      label="New Password"
                      placeholder="Enter new password"
                      {...form.getInputProps("newPassword")}
                    />
                  </Grid.Col>
                </>
              )}

              <Grid.Col span={12} mt="lg">
                <Divider mb="md" />
                <Text fw={600} mb="md">
                  Notification Preferences
                </Text>
              </Grid.Col>

              <Grid.Col span={12}>
                <Switch
                  label="Email notifications"
                  description="Receive updates and alerts via email"
                  {...form.getInputProps("emailNotifications", {
                    type: "checkbox",
                  })}
                  disabled={!isEditing}
                />
              </Grid.Col>

              <Grid.Col span={12} mt="sm">
                <Switch
                  label="SMS notifications"
                  description="Receive updates and alerts via text message"
                  {...form.getInputProps("smsNotifications", {
                    type: "checkbox",
                  })}
                  disabled={!isEditing}
                />
              </Grid.Col>
            </Grid>

            <Group justify="flex-start" mt="xl">
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              ) : (
                <>
                  <Button type="submit">Save Changes</Button>
                  <Button variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </>
              )}
            </Group>
          </form>
        </Stack>
      </Paper>
    </div>
  );
}

export default AccountForm;
