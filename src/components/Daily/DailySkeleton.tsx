import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function DailySkeleton() {
  return (
    <Card
      width="22vh"
      height="20vh"
      backgroundColor={"none"}
      border={"1px solid #81aeca"}
    >
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default DailySkeleton;
