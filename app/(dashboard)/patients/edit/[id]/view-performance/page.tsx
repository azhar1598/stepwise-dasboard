"use client";
import React, { useRef, useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import {
  Card,
  Grid,
  Text,
  Title,
  Badge,
  Group,
  Stack,
  Select,
  Tabs,
  Button,
} from "@mantine/core";
import {
  Trophy,
  Clock,
  Target,
  CheckCircle,
  XCircle,
  Award,
  Zap,
  TrendingUp,
  Download,
  Settings,
} from "lucide-react";
import PageMainWrapper from "@/components/common/PageMainWrapper";
import { patientData } from "@/apiData";
import { useParams } from "next/navigation";
import { IconDeviceMobile, IconPlus, IconPrinter } from "@tabler/icons-react";
import Link from "next/link";
import PatientAppSettings from "./settings";

function PatientPerformanceDashboard() {
  const [timePeriod, setTimePeriod] = useState("weekly");

  const dashboardRef = useRef(null);

  // Expanded Performance Data
  const taskPerformanceData = [
    {
      sector: "Social Skills",
      successRate: 75,
      averageTime: 15,
      totalTasks: 40,
      progress: 10,
      complexity: 7,
    },
    {
      sector: "Self-Help Tasks",
      successRate: 65,
      averageTime: 20,
      totalTasks: 35,
      progress: 8,
      complexity: 6,
    },
    {
      sector: "Motor Skills",
      successRate: 85,
      averageTime: 10,
      totalTasks: 25,
      progress: 12,
      complexity: 5,
    },
    {
      sector: "Communication",
      successRate: 60,
      averageTime: 25,
      totalTasks: 30,
      progress: 6,
      complexity: 8,
    },
  ];

  const dailyProgressData = [
    { day: "Mon", tasks: 5, timeSpent: 45, progress: 75 },
    { day: "Tue", tasks: 7, timeSpent: 60, progress: 80 },
    { day: "Wed", tasks: 6, timeSpent: 50, progress: 70 },
    { day: "Thu", tasks: 8, timeSpent: 70, progress: 85 },
    { day: "Fri", tasks: 5, timeSpent: 40, progress: 65 },
  ];

  const taskBreakdownData = [
    { name: "Completed", value: 75 },
    { name: "In Progress", value: 15 },
    { name: "Failed", value: 10 },
  ];

  const skillProgressData = [
    { subject: "Social Interaction", A: 120, B: 100, fullMark: 150 },
    { subject: "Self-Care", A: 98, B: 80, fullMark: 150 },
    { subject: "Communication", A: 86, B: 70, fullMark: 150 },
    { subject: "Motor Skills", A: 99, B: 85, fullMark: 150 },
    { subject: "Cognitive Skills", A: 85, B: 75, fullMark: 150 },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF6384"];

  const performanceColors = {
    high: "#00C49F",
    medium: "#FFBB28",
    low: "#FF6384",
  };

  const handleDownloadPDF = async () => {
    const input = dashboardRef.current;

    if (!input) {
      console.error("Could not find dashboard element");
      return;
    }

    // try {
    //   // Use html2canvas to capture the dashboard
    //   const canvas = await html2canvas(input, {
    //     scale: 2, // Increases resolution
    //     useCORS: true, // Handles cross-origin images
    //     logging: false, // Reduces console logs
    //   });

    //   // Convert canvas to image
    //   const imgData = canvas.toDataURL("image/png");

    //   // Create PDF document
    //   const pdf = new jsPDF({
    //     orientation: "landscape",
    //     unit: "px",
    //     format: [canvas.width, canvas.height],
    //   });

    //   // Add image to PDF
    //   pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    //   // Save PDF
    //   pdf.save(
    //     `Patient_Performance_Dashboard_${
    //       new Date().toISOString().split("T")[0]
    //     }.pdf`
    //   );
    // } catch (error) {
    //   console.error("Error generating PDF:", error);
    // }
  };

  const params = useParams();

  const patientDetails = patientData.find(
    (patient) => patient.id === Number(params.id)
  );

  return (
    <div ref={dashboardRef}>
      <PageHeader
        title={`Performance Dashboard: ${patientDetails?.firstName} ${patientDetails?.lastName}`}
        rightSection={
          <Group>
            <Button
              leftSection={<Download size={16} />}
              variant="outline"
              onClick={handleDownloadPDF}
            >
              Download PDF
            </Button>
            <Link href={`/tasks/add/${params.id}`}>
              <Button leftSection={<IconPlus size={16} />}>Add Task</Button>
            </Link>
          </Group>
        }
      />
      <PageMainWrapper>
        <Group mb="xl" justify="space-between">
          <Select
            label="Time Period"
            value={timePeriod}
            onChange={setTimePeriod}
            data={[
              { value: "weekly", label: "Weekly" },
              { value: "monthly", label: "Monthly" },
              { value: "quarterly", label: "Quarterly" },
            ]}
          />
          <Badge color="blue" variant="">
            Last Updated: March 26, 2024
          </Badge>
        </Group>

        <Tabs defaultValue="overview">
          <Tabs.List>
            <Tabs.Tab value="overview" leftSection={<Trophy size={16} />}>
              Performance Overview
            </Tabs.Tab>
            <Tabs.Tab value="detailed" leftSection={<TrendingUp size={16} />}>
              Detailed Analysis
            </Tabs.Tab>
            <Tabs.Tab value="goals" leftSection={<Zap size={16} />}>
              Goal Tracking
            </Tabs.Tab>
            <Tabs.Tab
              value="app-settings"
              leftSection={<IconDeviceMobile size={16} />}
            >
              App Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview">
            <Grid mt="md">
              {/* Overview Cards */}
              <Grid.Col span={4}>
                <Card shadow="sm" padding="lg">
                  <Group>
                    <Trophy />
                    <Stack gap={0}>
                      <Text fw={700}>Total Tasks</Text>
                      <Text size="xl" color="blue">
                        130
                      </Text>
                    </Stack>
                  </Group>
                </Card>
              </Grid.Col>

              <Grid.Col span={4}>
                <Card shadow="sm" padding="lg">
                  <Group>
                    <CheckCircle color={performanceColors.high} />
                    <Stack gap={0}>
                      <Text fw={700}>Completion Rate</Text>
                      <Text size="xl" color="green">
                        75%
                      </Text>
                    </Stack>
                  </Group>
                </Card>
              </Grid.Col>

              <Grid.Col span={4}>
                <Card shadow="sm" padding="lg">
                  <Group>
                    <Clock />
                    <Stack gap={0}>
                      <Text fw={700}>Avg. Task Time</Text>
                      <Text size="xl" color="orange">
                        18 min
                      </Text>
                    </Stack>
                  </Group>
                </Card>
              </Grid.Col>

              {/* Performance Charts */}
              <Grid.Col span={6}>
                <Card>
                  <Title order={4} mb="md">
                    Daily Progress
                  </Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dailyProgressData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="tasks"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="progress"
                        stroke="#82ca9d"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </Grid.Col>

              <Grid.Col span={6}>
                <Card>
                  <Title order={4} mb="md">
                    Task Breakdown
                  </Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={taskBreakdownData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {taskBreakdownData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </Grid.Col>

              <Grid.Col span={12}>
                <Card>
                  <Title order={4} mb="md">
                    Task Performance by Sector
                  </Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={taskPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sector" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="successRate"
                        fill="#8884d8"
                        name="Success Rate"
                      />
                      <Bar
                        dataKey="averageTime"
                        fill="#82ca9d"
                        name="Avg Time (min)"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>

          <Tabs.Panel value="detailed">
            <Grid mt="md">
              {/* Skill Progression Radar Chart */}
              <Grid.Col span={6}>
                <Card>
                  <Title order={4} mb="md">
                    Skill Progression Radar
                  </Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart outerRadius={90} data={skillProgressData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 150]} />
                      <Radar
                        name="Actual Progress"
                        dataKey="A"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                      <Radar
                        name="Target Progress"
                        dataKey="B"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                      />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </Card>
              </Grid.Col>

              {/* Additional Detailed Insights */}
              <Grid.Col span={6}>
                <Card>
                  <Title order={4} mb="md">
                    Detailed Performance Insights
                  </Title>
                  <Stack>
                    <Group>
                      <Award color={performanceColors.high} />
                      <Text>Learning Consistency: 85% (Excellent)</Text>
                    </Group>
                    <Group>
                      <TrendingUp color={performanceColors.medium} />
                      <Text>Skill Improvement Rate: +12% this quarter</Text>
                    </Group>
                    <Group>
                      <Zap color={performanceColors.low} />
                      <Text>Areas Needing Focused Intervention</Text>
                    </Group>
                    <Group>
                      <Target color={performanceColors.high} />
                      <Text>Task Complexity Distribution</Text>
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>

          <Tabs.Panel value="goals">
            <Grid mt="md">
              <Grid.Col span={12}>
                <Card>
                  <Title order={4} mb="md">
                    Goal Tracking
                  </Title>
                  <Text>
                    Upcoming feature: Personalized goal setting and tracking!
                  </Text>
                </Card>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>

          <Tabs.Panel value="app-settings">
            <Grid mt="md">
              <Grid.Col span={12}>
                <Card>
                  <PatientAppSettings />
                </Card>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>
        </Tabs>
      </PageMainWrapper>
    </div>
  );
}

export default PatientPerformanceDashboard;
