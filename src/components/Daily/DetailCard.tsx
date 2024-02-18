import { Card, Text, CardBody, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  content: string;
  children: ReactNode;
}

function DetailCard({ title, content, children }: Props) {
  return (
    <Card width="15%" height="20vh" alignItems="center">
      <Box marginTop="10%">{children}</Box>
      <CardBody textAlign="center">
        <Text fontWeight={700}>{title}</Text>
        <Text fontWeight={600}>{content}</Text>
      </CardBody>
    </Card>
  );
}

export default DetailCard;
