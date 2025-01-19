import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Text,
  Group,
  Badge,
  Container,
  Title,
  Paper,
} from "@mantine/core";
import { ThumbsUp, ThumbsDown } from "@phosphor-icons/react";

const currentUser = {
  name: "John Doe",
};

const feedbacks = [
  {
    user: "John Doe",
    feedbacks: [
      {
        feedback: "The food quality has improved a lot this week. Great job!",
        date: "2025-01-12",
        sentiment: "positive",
      },
      {
        feedback: "Loved the desserts yesterday. Keep it up!",
        date: "2025-01-10",
        sentiment: "positive",
      },
    ],
  },
];

function FeedbackCard({ feedback, date, sentiment }) {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Group position="apart" mb="sm">
        <Badge
          color={sentiment === "positive" ? "green" : "red"}
          variant="light"
        >
          {sentiment === "positive" ? (
            <ThumbsUp size={16} weight="bold" />
          ) : (
            <ThumbsDown size={16} weight="bold" />
          )}
        </Badge>
      </Group>
      <Text size="sm" color="dimmed">
        {feedback}
      </Text>
      <Text size="xs" color="dimmed" align="right" mt="sm">
        {date}
      </Text>
    </Card>
  );
}

function UserFeedbacks({ userFeedbacks }) {
  return (
    <div>
      {userFeedbacks.map((feedback, index) => (
        <FeedbackCard
          key={index}
          feedback={feedback.feedback}
          date={feedback.date}
          sentiment={feedback.sentiment}
        />
      ))}
    </div>
  );
}

UserFeedbacks.propTypes = {
  userFeedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      feedback: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      sentiment: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function MessFeedbacks() {
  const userFeedback = feedbacks.find(
    (feedback) => feedback.user === currentUser.name,
  );

  return (
    <Container
      size="lg"
      style={{
        minWidth: "1100px",
        width: "1100px",
        marginTop: "25px",
      }}
    >
      <Paper shadow="md" radius="md" p="xl" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Previous Feedbacks
        </Title>
        {userFeedback ? (
          <UserFeedbacks
            user={userFeedback.user}
            userFeedbacks={userFeedback.feedbacks}
          />
        ) : (
          <Text align="center">You have not submitted any feedback yet.</Text>
        )}
      </Paper>
    </Container>
  );
}

FeedbackCard.propTypes = {
  feedback: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  sentiment: PropTypes.string.isRequired,
};

export default MessFeedbacks;
