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
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import React, { useState } from "react";
import { z } from "zod";

const storeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  categoryId: z.number(),
  tagLine: z.string(),
  description: z.string(),
  storeLogo: z.any(),
  licenseId: z.string(),
  address: z.string(),
  state: z.string(),
  pincode: z.number(),
  city: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  qrTheme: z.object({
    titleFontSize: z.number(),
    primaryColor: z.string(),
    secondaryColor: z.string(),
    primaryText: z.string(),
    ctaText: z.string(),
    ctaColor: z.string(),
    radius: z.number(),
  }),
  websiteTheme: z.object({
    primaryColor: z.string(),
    secondaryColor: z.string(),
  }),
  businessHours: z.array(
    z.object({
      openTime: z.string(),
      closeTime: z.string(),
      day: z.string(),
    })
  ),
});

function AccountForm() {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm({
    validate: zodResolver(storeSchema),
    initialValues: {
      name: "",
      categoryId: 1,
      tagLine: "",
      description:
        "We are dedicated to providing the best services to our customers. Your satisfaction is our priority.",
      storeLogo: "",
      licenseId: "",
      address: "",
      state: "",
      pincode: "",
      city: "",
      latitude: "",
      longitude: "",
      qrTheme: {
        titleFontSize: "24px",
        primaryColor: "#228be6",
        secondaryColor: "#ffffff",
        primaryText: "Scan Here",
        ctaText: "To View Our Menu",
        ctaColor: "#fab005",
        radius: 5,
      },
      websiteTheme: {
        primaryColor: "#fab005",
        secondaryColor: "#091151",
        backgroundImage: "",
        titleColor: "",
        taglineColor: "",
        socialLinks: {
          facebookUrl: "",
          instagramUrl: "",
          twitterUrl: "",
          reviewUrl: "",
          youtubeUrl: "",
        },
      },
      businessHours: [],
    },
  });

  // Check if required fields are filled
  const isFormValid = () => {
    return (
      form.values.fullName?.trim() &&
      form.values.email?.trim() &&
      form.values.phone?.trim()
    );
  };

  const handleSave = () => {
    if (isFormValid()) {
      // onSave(form.values);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    form.reset();
    setIsEditing(false);
  };

  return (
    <div className="bg-white w-fulal mt-5 page-main-wrapper p-[20px] mb-20">
      <Paper>
        <Stack gap="xl">
          <Group mb="md">
            <Avatar size="xl" radius="xl" color="blue">
              {form.values.fullName?.slice(0, 2).toUpperCase() || "U"}
            </Avatar>
            <Box>
              <Text size="xl" fw={700}>
                Account Settings
              </Text>
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
                  <Button type="submit" disabled={!isFormValid()}>
                    Save Changes
                  </Button>
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
