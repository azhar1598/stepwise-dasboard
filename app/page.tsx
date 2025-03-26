"use client";
import React from "react";
import { Container, Grid, Title, Paper, Text } from "@mantine/core";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const Dashboard = () => {
  // Sample data for different charts
  const taskCompletionData = [
    { name: "Week 1", completed: 50, pending: 20 },
    { name: "Week 2", completed: 80, pending: 10 },
    { name: "Week 3", completed: 90, pending: 5 },
    { name: "Week 4", completed: 100, pending: 2 },
  ];

  const userEngagementData = [
    { name: "Mon", activeUsers: 120 },
    { name: "Tue", activeUsers: 150 },
    { name: "Wed", activeUsers: 180 },
    { name: "Thu", activeUsers: 200 },
    { name: "Fri", activeUsers: 220 },
  ];

  const successFailData = [
    { name: "Success", value: 400 },
    { name: "Failed", value: 100 },
  ];

  const timeSpentData = [
    { name: "Task 1", time: 30 },
    { name: "Task 2", time: 45 },
    { name: "Task 3", time: 60 },
    { name: "Task 4", time: 35 },
  ];

  const workflowUsageData = [
    { name: "Workflow A", users: 50 },
    { name: "Workflow B", users: 80 },
    { name: "Workflow C", users: 100 },
  ];

  const issueReportData = [
    { subject: "Navigation", difficulty: 70 },
    { subject: "Forms", difficulty: 50 },
    { subject: "Performance", difficulty: 90 },
    { subject: "UI", difficulty: 40 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="main-content">
      <Title order={1} ta="left" mb="xl" style={{ color: "#2c3e50" }}>
        Insights Overview
      </Title>

      <Grid>
        {/* Task Completion Rate - Line Chart */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper shadow="md" radius="md" p="md" withBorder>
            <Title order={4} mb="md">
              Task Completion Rate
            </Title>
            <LineChart width={400} height={250} data={taskCompletionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="#0088FE" />
              <Line type="monotone" dataKey="pending" stroke="#FF8042" />
            </LineChart>
          </Paper>
        </Grid.Col>

        {/* User Engagement - Bar Chart */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper shadow="md" radius="md" p="md" withBorder>
            <Title order={4} mb="md">
              User Engagement
            </Title>
            <BarChart width={400} height={250} data={userEngagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="activeUsers" fill="#00C49F" />
            </BarChart>
          </Paper>
        </Grid.Col>

        {/* Success vs Failed Attempts - Pie Chart */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper shadow="md" radius="md" p="md" withBorder>
            <Title order={4} mb="md">
              Success vs. Failed Attempts
            </Title>
            <PieChart width={400} height={250}>
              <Pie
                data={successFailData}
                cx={200}
                cy={125}
                outerRadius={80}
                dataKey="value"
              >
                {successFailData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid.Col>

        {/* Time Spent on Tasks - Area Chart */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper shadow="md" radius="md" p="md" withBorder>
            <Title order={4} mb="md">
              Time Spent on Tasks
            </Title>
            <AreaChart width={400} height={250} data={timeSpentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="time"
                stroke="#FFBB28"
                fill="#FFBB28"
              />
            </AreaChart>
          </Paper>
        </Grid.Col>

        {/* Issue Reports - Radar Chart */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper shadow="md" radius="md" p="md" withBorder>
            <Title order={4} mb="md">
              Issue Reports
            </Title>
            <RadarChart
              outerRadius={90}
              width={400}
              height={250}
              data={issueReportData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Difficulty"
                dataKey="difficulty"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Dashboard;
