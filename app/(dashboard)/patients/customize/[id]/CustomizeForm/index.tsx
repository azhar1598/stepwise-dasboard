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
} from "@mantine/core";

function PatientAppSettings({ form, saveSettings }) {
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
        <Grid.Col span={12}>
          <Text fw={500} mb={10}>
            Task Difficulty Level
          </Text>
          <Select
            placeholder="Select Difficulty"
            data={difficultyLevels}
            {...form.getInputProps("difficultyLevel")}
          />
          <Text size="xs" c="dimmed" mt={5}>
            Adjusts complexity of task breakdown and guidance
          </Text>
        </Grid.Col>

        {/* Speaking Speed */}
        <Grid.Col span={12}>
          <Text fw={500} mb={10}>
            Voice Speaking Speed
          </Text>
          <Slider
            min={0.5}
            max={2}
            step={0.25}
            label={(value) => `${value}x Speed`}
            // {...form.getInputProps("voiceSpeed")}
          />
        </Grid.Col>

        {/* Voice Options */}
        <Grid.Col span={12}>
          <Text fw={500} mb={10}>
            Voice Type
          </Text>
          <Select
            placeholder="Choose Voice"
            data={voiceOptions}
            // {...form.getInputProps("voiceType")}
          />
        </Grid.Col>

        {/* Font Family */}
        <Grid.Col span={12}>
          <Text fw={500} mb={10}>
            Font Style
          </Text>
          <Select
            placeholder="Select Font"
            data={fontFamilies}
            // {...form.getInputProps("fontFamily")}
          />
        </Grid.Col>

        {/* Font Size */}
        <Grid.Col span={12}>
          <Text fw={500} mb={10}>
            Font Size
          </Text>
          <Slider
            min={12}
            max={24}
            step={2}
            label={(value) => `${value}px`}
            // {...form.getInputProps("fontSize")}
          />
        </Grid.Col>

        {/* Color Scheme */}
        <Grid.Col span={12}>
          <Text fw={500} mb={10}>
            Color Scheme
          </Text>
          <Select
            placeholder="Choose Color Scheme"
            data={colorSchemes}
            // {...form.getInputProps("colorScheme")}
          />
        </Grid.Col>

        {/* Accessibility Toggles */}
        <Grid.Col span={12}>
          <Divider
            my="md"
            label="Accessibility Features"
            labelPosition="center"
          />

          <Group>
            <Switch
              label="Text-to-Speech"
              description="Automatically read instructions aloud"
              //   {...form.getInputProps("textToSpeech", { type: "checkbox" })}
            />
            <Switch
              label="Visual Highlights"
              description="Highlight current step during tasks"
              //   {...form.getInputProps("visualHighlights", { type: "checkbox" })}
            />
            <Switch
              label="Simplified Interface"
              description="Reduce visual complexity"
              //   {...form.getInputProps("simplifiedInterface", {
              //     type: "checkbox",
              //   })}
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
