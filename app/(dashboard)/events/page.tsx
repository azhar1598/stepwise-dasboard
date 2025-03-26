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
  Image,
} from "@mantine/core";
import { Calendar, Clock, MapPin } from "lucide-react";
import PageMainWrapper from "@/components/common/PageMainWrapper";
import { patientData } from "@/apiData";
import { useParams } from "next/navigation";
import Link from "next/link";

function EventsPage() {
  const params = useParams();
  const patientDetails = patientData.find(
    (patient) => patient.id === Number(params.id)
  );

  // Example event data (can be fetched from an API)
  const events = [
    {
      id: 1,
      title: "Social Skills Workshop",
      image:
        "https://cdn.growtha.dev/656b574d4c3db5a4d0ef52fa/65ab7274607437e164990eff_38%20(12).png",
      date: "April 5, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center",
      description: "A group session to practice social interactions.",
    },
    {
      id: 2,
      title: "Motor Skills Training",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yplqMIH5AjBpXCwAjeEc_giJuQTpXWX37Q&s",
      date: "April 7, 2025",
      time: "2:00 PM - 3:30 PM",
      location: "Therapy Room B",
      description: "Hands-on exercises to improve coordination.",
    },
    {
      id: 3,
      title: "Communication Seminar",
      image:
        "https://img.freepik.com/premium-photo/person-with-down-syndrome-attending-workshop-communication-skills_1218867-10766.jpg",
      date: "April 10, 2025",
      time: "1:00 PM - 2:30 PM",
      location: "Online (Zoom)",
      description: "Learn techniques for effective communication.",
    },
    {
      id: 4,
      title: "World Autism Day",
      image:
        "https://img.jagranjosh.com/images/2024/April/142024/autism-awareness.webp",
      date: "April 22, 2025",
      time: "1:00 PM - 2:30 PM",
      location: "Online (Zoom)",
      description: "Learn techniques for effective communication.",
    },
  ];

  return (
    <div>
      <PageHeader title={`Events`} />
      <PageMainWrapper>
        <Grid>
          <Grid.Col span={12}>
            <Title order={3} mb="md">
              Upcoming Events
            </Title>
            <Text mb="lg" c="gray">
              Stay updated with events tailored to your development goals.
            </Text>
          </Grid.Col>

          {events.map((event) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={event.id}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={event.image}
                    height={150}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      maxHeight: "200px",
                    }}
                  />
                </Card.Section>

                <Stack mt="md" gap="xs">
                  <Title order={4}>{event.title}</Title>
                  <Group gap="xs">
                    <Calendar size={16} color="gray" />
                    <Text size="sm" c="dimmed">
                      {event.date}
                    </Text>
                  </Group>
                  <Group gap="xs">
                    <Clock size={16} color="gray" />
                    <Text size="sm" c="dimmed">
                      {event.time}
                    </Text>
                  </Group>
                  <Group gap="xs">
                    <MapPin size={16} color="gray" />
                    <Text size="sm" c="dimmed">
                      {event.location}
                    </Text>
                  </Group>
                  <Text size="sm" c="gray" mt="xs">
                    {event.description}
                  </Text>
                  <Button variant="" color="blue" mt="md">
                    Add to Calendar
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </PageMainWrapper>
    </div>
  );
}

export default EventsPage;
