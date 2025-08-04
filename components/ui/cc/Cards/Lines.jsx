import { ResponsiveLine } from "@nivo/line";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const MyLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine /* or Line for fixed dimensions */
    data={data}
    colors={{ scheme: "nivo" }}
    // margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    axisBottom={{ legend: "transportation", legendOffset: 36 }}
    axisLeft={{ legend: "count", legendOffset: -40 }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "seriesColor" }}
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
     margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    // legends={[
    //   {
    //     anchor: "bottom-right",
    //     direction: "column",
    //     translateX: 100,
    //     itemWidth: 80,
    //     itemHeight: 22,
    //     symbolShape: "circle",
    //   },
    // ]}
  />
);

function Lines() {
  const data = [
    {
      id: "japan",
      data: [
        {
          x: "plane",
          y: 241,
        },
        {
          x: "helicopter",
          y: 219,
        },
        {
          x: "boat",
          y: 59,
        },
        {
          x: "train",
          y: 73,
        },
        {
          x: "subway",
          y: 146,
        },
        {
          x: "bus",
          y: 283,
        },
        {
          x: "car",
          y: 133,
        },
        {
          x: "moto",
          y: 254,
        },
        {
          x: "bicycle",
          y: 216,
        },
        {
          x: "horse",
          y: 156,
        },
        {
          x: "skateboard",
          y: 222,
        },
        {
          x: "others",
          y: 100,
        },
      ],
    },
    {
      id: "france",
      data: [
        {
          x: "plane",
          y: 51,
        },
        {
          x: "helicopter",
          y: 111,
        },
        {
          x: "boat",
          y: 68,
        },
        {
          x: "train",
          y: 247,
        },
        {
          x: "subway",
          y: 298,
        },
        {
          x: "bus",
          y: 165,
        },
        {
          x: "car",
          y: 288,
        },
        {
          x: "moto",
          y: 216,
        },
        {
          x: "bicycle",
          y: 119,
        },
        {
          x: "horse",
          y: 154,
        },
        {
          x: "skateboard",
          y: 201,
        },
        {
          x: "others",
          y: 168,
        },
      ],
    },
    {
      id: "us",
      data: [
        {
          x: "plane",
          y: 190,
        },
        {
          x: "helicopter",
          y: 162,
        },
        {
          x: "boat",
          y: 39,
        },
        {
          x: "train",
          y: 171,
        },
        {
          x: "subway",
          y: 181,
        },
        {
          x: "bus",
          y: 182,
        },
        {
          x: "car",
          y: 2,
        },
        {
          x: "moto",
          y: 254,
        },
        {
          x: "bicycle",
          y: 112,
        },
        {
          x: "horse",
          y: 111,
        },
        {
          x: "skateboard",
          y: 267,
        },
        {
          x: "others",
          y: 60,
        },
      ],
    },
    {
      id: "germany",
      data: [
        {
          x: "plane",
          y: 225,
        },
        {
          x: "helicopter",
          y: 216,
        },
        {
          x: "boat",
          y: 168,
        },
        {
          x: "train",
          y: 47,
        },
        {
          x: "subway",
          y: 132,
        },
        {
          x: "bus",
          y: 296,
        },
        {
          x: "car",
          y: 126,
        },
        {
          x: "moto",
          y: 270,
        },
        {
          x: "bicycle",
          y: 171,
        },
        {
          x: "horse",
          y: 97,
        },
        {
          x: "skateboard",
          y: 296,
        },
        {
          x: "others",
          y: 191,
        },
      ],
    },
    {
      id: "norway",
      data: [
        {
          x: "plane",
          y: 47,
        },
        {
          x: "helicopter",
          y: 76,
        },
        {
          x: "boat",
          y: 33,
        },
        {
          x: "train",
          y: 226,
        },
        {
          x: "subway",
          y: 239,
        },
        {
          x: "bus",
          y: 87,
        },
        {
          x: "car",
          y: 68,
        },
        {
          x: "moto",
          y: 190,
        },
        {
          x: "bicycle",
          y: 36,
        },
        {
          x: "horse",
          y: 55,
        },
        {
          x: "skateboard",
          y: 42,
        },
        {
          x: "others",
          y: 219,
        },
      ],
    },
  ];
  return (
    <Card className="rounded-[8px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="flex h-[250px] w-full">
        <MyLine data={data} />
      </CardContent>
    </Card>
  );
}

export default Lines;
