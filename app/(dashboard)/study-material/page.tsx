"use client";
import React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import {
  Card,
  Grid,
  Text,
  Title,
  Badge,
  Group,
  Stack,
  Button,
  Accordion,
  Anchor,
} from "@mantine/core";
import { Book, Download, FileText, Video } from "lucide-react";
import PageMainWrapper from "@/components/common/PageMainWrapper";
import { patientData, studyMaterials } from "@/apiData";
import { useParams } from "next/navigation";
import Link from "next/link";

function StudyMaterialPage() {
  const params = useParams();
  const patientDetails = patientData.find(
    (patient) => patient.id === Number(params.id)
  );

  // Example study material data (can be fetched from an API)

  const getIconForType = (type) => {
    switch (type) {
      case "PDF":
        return <FileText size={16} />;
      case "Video":
        return <Video size={16} />;
      case "Text":
        return <Book size={16} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <PageHeader title={`Study Material`} />
      <PageMainWrapper>
        <Grid>
          <Grid.Col span={12}>
            <Card>
              <Text mb="lg" c="gray">
                Explore these materials to support skill development and enhance
                performance in key areas.
              </Text>

              <Accordion variant="contained" radius="md">
                {studyMaterials.map((category, index) => (
                  <Accordion.Item key={index} value={category.category}>
                    <Accordion.Control>
                      <Group>
                        <Text fw={700}>{category.category}</Text>
                        <Badge color="blue" variant="">
                          {category.items.length}{" "}
                          {category.items.length === 1 ? "item" : "items"}
                        </Badge>
                      </Group>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="md">
                        {category.items.map((item, idx) => (
                          <Card key={idx} withBorder radius="md" p="sm">
                            <Group align="apart">
                              <Group>
                                {getIconForType(item.type)}
                                <Stack gap={0}>
                                  <Text fw={500}>{item.title}</Text>
                                  <Text size="sm" c="gray">
                                    {item.description}
                                  </Text>
                                  {item.size && (
                                    <Text size="xs" c="dimmed">
                                      Size: {item.size}
                                    </Text>
                                  )}
                                  {item.duration && (
                                    <Text size="xs" c="dimmed">
                                      Duration: {item.duration}
                                    </Text>
                                  )}
                                  {item.content && (
                                    <Text size="sm" mt="xs">
                                      {item.content}
                                    </Text>
                                  )}
                                </Stack>
                              </Group>
                              {item.link && (
                                <Anchor href={item.link} target="_blank">
                                  <Button
                                    variant=""
                                    leftSection={<Download size={16} />}
                                  >
                                    Download/View
                                  </Button>
                                </Anchor>
                              )}
                            </Group>
                          </Card>
                        ))}
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Card>
          </Grid.Col>
        </Grid>
      </PageMainWrapper>
    </div>
  );
}

export default StudyMaterialPage;
