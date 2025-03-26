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
  TextInput,
  Textarea,
} from "@mantine/core";
import { HelpCircle, Mail, Phone, MessageSquare, Anchor } from "lucide-react";
import PageMainWrapper from "@/components/common/PageMainWrapper";
import { faqs, patientData } from "@/apiData";
import { useParams } from "next/navigation";
import Link from "next/link";

function HelpDeskPage() {
  const params = useParams();
  const patientDetails = patientData.find(
    (patient) => patient.id === Number(params.id)
  );

  // Placeholder for form submission (can be connected to an API)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log("Support Request:", { name, email, message });
    alert("Your request has been submitted! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div>
      <PageHeader title={`Help Desk`} />
      <PageMainWrapper>
        <Grid>
          {/* Welcome Section */}
          <Grid.Col span={12}>
            <Text mb="lg" c="gray">
              Find answers to common questions, access support resources, or
              contact our team for assistance.
            </Text>
          </Grid.Col>

          {/* Contact Options */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder radius="md" p="lg">
              <Title order={4} mb="md">
                Contact Us
              </Title>
              <Stack gap="md">
                <Group>
                  <Mail size={20} color="gray" />
                  <Stack gap={0}>
                    <Text fw={500}>Email Support</Text>
                    <Text size="sm" c="blue">
                      {/* <Anchor href="mailto:support@stepwisenow.com"> */}
                      support@stepwisenow.com
                      {/* </Anchor> */}
                    </Text>
                  </Stack>
                </Group>
                <Group>
                  <Phone size={20} color="gray" />
                  <Stack gap={0}>
                    <Text fw={500}>Phone Support</Text>
                    <Text size="sm">+1 (555) 8977-83556</Text>
                    <Text size="xs" c="dimmed">
                      Mon-Fri, 9 AM - 5 PM
                    </Text>
                  </Stack>
                </Group>
                <Group>
                  <MessageSquare size={20} color="gray" />
                  <Stack gap={0}>
                    <Text fw={500}>Live Chat</Text>
                    <Button
                      size="xs"
                      onClick={() => alert("Live chat coming soon!")}
                    >
                      Start Chat
                    </Button>
                  </Stack>
                </Group>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Support Form */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder radius="md" p="lg">
              <Title order={4} mb="md">
                Submit a Support Request
              </Title>
              <form onSubmit={handleSubmit}>
                <Stack gap="md">
                  <TextInput
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                  <Textarea
                    label="Message"
                    name="message"
                    placeholder="Describe your issue or question"
                    minRows={4}
                    required
                  />
                  <Button type="submit" leftSection={<HelpCircle size={16} />}>
                    Send Request
                  </Button>
                </Stack>
              </form>
            </Card>
          </Grid.Col>

          {/* FAQ Section */}
          <Grid.Col span={12}>
            <Card withBorder radius="md" p="lg">
              <Title order={4} mb="md">
                Frequently Asked Questions
              </Title>
              <Accordion variant="contained" radius="md">
                {faqs.map((faq, index) => (
                  <Accordion.Item key={index} value={faq.question}>
                    <Accordion.Control>
                      <Text fw={500}>{faq.question}</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm">{faq.answer}</Text>
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

export default HelpDeskPage;
