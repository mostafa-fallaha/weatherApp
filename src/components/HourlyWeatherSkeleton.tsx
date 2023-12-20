import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function HourlyWeatherSkeleton() {
  return (
    <Card width={220} height={230} backgroundColor={"#3b779f"}>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default HourlyWeatherSkeleton;
