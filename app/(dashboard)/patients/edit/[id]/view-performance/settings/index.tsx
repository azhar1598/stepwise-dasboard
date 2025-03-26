"use client";
import React from "react";
import {
  Box,
  Title,
  Text,
  Grid,
  Select,
  Slider,
  Switch,
  Group,
  Button,
  Divider,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

function PatientAppSettings() {
  const form = useForm({
    initialValues: {
      difficultyLevel: "beginner",
      voiceSpeed: 1,
      voiceType: "default",
      fontFamily: "openDyslexic",
    },
  });

  const saveSettings = () => {
    console.log("form", form.values);
  };
  // Predefined options for various settings
  const difficultyLevels = [
    { value: "beginner", label: "Beginner (Simplest)" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced (Most Detailed)" },
  ];

  const fontFamilies = [
    { value: "openDyslexic", label: "OpenDyslexic (Dyslexia-Friendly)" },
    { value: "arial", label: "Arial (Clean & Simple)" },
    { value: "verdana", label: "Verdana (Large, Clear)" },
    { value: "comic-sans", label: "Comic Sans (Friendly)" },
  ];

  const voiceOptions = [
    { value: "default", label: "Default System Voice" },
    { value: "male-calm", label: "Male - Calm" },
    { value: "female-clear", label: "Female - Clear" },
    { value: "child-friendly", label: "Child-Friendly Voice" },
  ];

  const colorSchemes = [
    { value: "high-contrast", label: "High Contrast" },
    { value: "pastel", label: "Pastel Colors" },
    { value: "default", label: "Default" },
  ];

  return (
    <Box p={20}>
      <Title order={2} mb="xl">
        App Personalization Settings
      </Title>

      <Grid>
        {/* Difficulty Level */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Task Difficulty"
            placeholder="Select Difficulty"
            data={difficultyLevels}
            {...form.getInputProps("difficultyLevel")}
          />
          <Text size="xs" c="dimmed" mt={5}>
            Adjusts complexity of task breakdown and guidance
          </Text>
        </Grid.Col>

        {/* Speaking Speed */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Voice Speaking Speed"
            placeholder="Select Speed"
            data={[
              { value: "slow", label: "Slow" },
              { value: "medium", label: "Medium" },
              { value: "fast", label: "Fast" },
            ]}
            {...form.getInputProps("voiceSpeed")}
          />
        </Grid.Col>

        {/* Voice Options */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Voice Type"
            placeholder="Choose Voice"
            data={voiceOptions}
            {...form.getInputProps("voiceType")}
          />
        </Grid.Col>

        {/* Font Family */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Font Style"
            placeholder="Select Font"
            data={fontFamilies}
            {...form.getInputProps("fontFamily")}
          />
        </Grid.Col>

        {/* Font Size */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <NumberInput
            label="Font Size"
            allowDecimal={false}
            allowNegative={false}
            hideControls
            placeholder="Enter Font Size"
            {...form.getInputProps("fontSize")}
          />
        </Grid.Col>

        {/* Color Scheme */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Color Scheme"
            placeholder="Choose Color Scheme"
            data={colorSchemes}
            {...form.getInputProps("colorScheme")}
          />
        </Grid.Col>

        {/* Accessibility Toggles */}
        <Grid.Col span={{ base: 12 }}>
          <Divider
            my="md"
            label="Accessibility Features"
            labelPosition="center"
          />

          <Group>
            <Switch
              label="Text-to-Speech"
              description="Automatically read instructions aloud"
              {...form.getInputProps("textToSpeech", { type: "checkbox" })}
            />
            <Switch
              label="Visual Highlights"
              description="Highlight current step during tasks"
              {...form.getInputProps("visualHighlights", { type: "checkbox" })}
            />
            <Switch
              label="Simplified Interface"
              description="Reduce visual complexity"
              {...form.getInputProps("simplifiedInterface", {
                type: "checkbox",
              })}
            />
          </Group>
        </Grid.Col>
      </Grid>

      <Group justify="flex-end" mt="xl">
        <Button onClick={saveSettings}>Save Settings</Button>
      </Group>
    </Box>
  );
}

export default PatientAppSettings;
