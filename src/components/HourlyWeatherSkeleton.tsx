import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function HourlyWeatherSkeleton() {
  return (
    <Card width={220} height={250}>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default HourlyWeatherSkeleton;
