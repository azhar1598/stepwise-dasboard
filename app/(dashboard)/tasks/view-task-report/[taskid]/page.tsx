"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/common/PageHeader";
import { Stack, Grid, Text, Card, Badge } from "@mantine/core";
import { tasks } from "@/apiData"; // Assuming task data is available here
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import PageMainWrapper from "@/components/common/PageMainWrapper";

const TaskReport = () => {
  const router = useRouter();
  const params = useParams();
  const taskId = params.taskid;

  const [task, setTask] = useState(null);

  useEffect(() => {
    if (taskId) {
      // Find the task from the tasks array
      const selectedTask = tasks.find((task) => task.id === Number(taskId));
      setTask(selectedTask);
    }
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  // Dummy data for visualization, replace with actual data from task
  const timeSpentData = [
    { name: "Week 1", timeSpent: 30 },
    { name: "Week 2", timeSpent: 45 },
    { name: "Week 3", timeSpent: 60 },
    { name: "Week 4", timeSpent: 40 },
  ];

  const successRateData = [
    { name: "Week 1", successRate: 70 },
    { name: "Week 2", successRate: 80 },
    { name: "Week 3", successRate: 90 },
    { name: "Week 4", successRate: 85 },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return <Badge color="green">Completed</Badge>;
      case "Failed":
        return <Badge color="red">Failed</Badge>;
      default:
        return <Badge color="gray">Unknown</Badge>;
    }
  };

  return (
    <>
      <PageHeader title="Task Report" />
      <PageMainWrapper>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm">
              <Text size="lg" fw={500}>
                Task Name
              </Text>
              <Text>{task.name}</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm">
              <Text size="lg" fw={500}>
                Category
              </Text>
              <Text>{task.category}</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm">
              <Text size="lg" fw={500}>
                Status
              </Text>
              {getStatusBadge(task.status)}
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm">
              <Text size="lg" fw={500}>
                Time Spent (Minutes)
              </Text>
              <Text>{task.timeSpent}</Text>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Success Rate and Time Spent Charts */}
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm">
              <Text size="lg" fw={500}>
                Success Rate Over Time
              </Text>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={successRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="successRate"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm">
              <Text size="lg" fw={500}>
                Time Spent Over Time
              </Text>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={timeSpentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="timeSpent" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Grid.Col>
        </Grid>
      </PageMainWrapper>
    </>
  );
};

export default TaskReport;
