import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResponsiveChoropleth } from "@nivo/geo";

const MyChoropleth = ({ data }) => (
  <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
    data={data}
    features="Something"
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="greys"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#11361a"
    legends={[
      {
        anchor: "bottom-left",
        direction: "column",
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: "left-to-right",
        itemTextColor: "#444444",
        itemOpacity: 0.85,
        symbolSize: 18,
      },
    ]}
  />
);
export default function GlobalMap() {
  const data = [
    {
      id: "AFG",
      value: 917757,
    },
    {
      id: "AGO",
      value: 238845,
    },
    {
      id: "ALB",
      value: 710944,
    },
    {
      id: "ARE",
      value: 557452,
    },
    {
      id: "ARG",
      value: 62733,
    },
    {
      id: "ARM",
      value: 353976,
    },
    {
      id: "ATA",
      value: 619657,
    },
    {
      id: "ATF",
      value: 497647,
    },
    {
      id: "AUT",
      value: 331042,
    },
    {
      id: "AZE",
      value: 340627,
    },
    {
      id: "BDI",
      value: 983750,
    },
    {
      id: "BEL",
      value: 253116,
    },
    {
      id: "BEN",
      value: 252142,
    },
    {
      id: "BFA",
      value: 158603,
    },
    {
      id: "BGD",
      value: 997726,
    },
    {
      id: "BGR",
      value: 933252,
    },
    {
      id: "BHS",
      value: 780573,
    },
    {
      id: "BIH",
      value: 779381,
    },
    {
      id: "BLR",
      value: 24436,
    },
    {
      id: "BLZ",
      value: 780116,
    },
    {
      id: "BOL",
      value: 914813,
    },
    {
      id: "BRN",
      value: 984098,
    },
    {
      id: "BTN",
      value: 435120,
    },
    {
      id: "BWA",
      value: 309452,
    },
    {
      id: "CAF",
      value: 169343,
    },
    {
      id: "CAN",
      value: 626857,
    },
    {
      id: "CHE",
      value: 880730,
    },
    {
      id: "CHL",
      value: 826725,
    },
    {
      id: "CHN",
      value: 765698,
    },
    {
      id: "CIV",
      value: 797757,
    },
    {
      id: "CMR",
      value: 522993,
    },
    {
      id: "COG",
      value: 501450,
    },
    {
      id: "COL",
      value: 357088,
    },
    {
      id: "CRI",
      value: 432183,
    },
    {
      id: "CUB",
      value: 642218,
    },
    {
      id: "-99",
      value: 899384,
    },
    {
      id: "CYP",
      value: 723703,
    },
    {
      id: "CZE",
      value: 932049,
    },
    {
      id: "DEU",
      value: 559644,
    },
    {
      id: "DJI",
      value: 881343,
    },
    {
      id: "DNK",
      value: 595695,
    },
    {
      id: "DOM",
      value: 904514,
    },
    {
      id: "DZA",
      value: 884513,
    },
    {
      id: "ECU",
      value: 663832,
    },
    {
      id: "EGY",
      value: 504758,
    },
    {
      id: "ERI",
      value: 809434,
    },
    {
      id: "ESP",
      value: 302990,
    },
    {
      id: "EST",
      value: 603447,
    },
    {
      id: "ETH",
      value: 683154,
    },
    {
      id: "FIN",
      value: 16126,
    },
    {
      id: "FJI",
      value: 379421,
    },
    {
      id: "FLK",
      value: 469901,
    },
    {
      id: "FRA",
      value: 648732,
    },
    {
      id: "GAB",
      value: 25008,
    },
    {
      id: "GBR",
      value: 531771,
    },
    {
      id: "GEO",
      value: 702839,
    },
    {
      id: "GHA",
      value: 710981,
    },
    {
      id: "GIN",
      value: 556979,
    },
    {
      id: "GMB",
      value: 70567,
    },
    {
      id: "GNB",
      value: 874538,
    },
    {
      id: "GNQ",
      value: 163536,
    },
    {
      id: "GRC",
      value: 250143,
    },
    {
      id: "GTM",
      value: 163820,
    },
    {
      id: "GUY",
      value: 26977,
    },
    {
      id: "HND",
      value: 132057,
    },
    {
      id: "HRV",
      value: 82136,
    },
    {
      id: "HTI",
      value: 455808,
    },
    {
      id: "HUN",
      value: 398266,
    },
    {
      id: "IDN",
      value: 86812,
    },
    {
      id: "IND",
      value: 718199,
    },
    {
      id: "IRL",
      value: 809646,
    },
    {
      id: "IRN",
      value: 481599,
    },
    {
      id: "IRQ",
      value: 388857,
    },
    {
      id: "ISL",
      value: 688508,
    },
    {
      id: "ISR",
      value: 422396,
    },
    {
      id: "ITA",
      value: 771124,
    },
    {
      id: "JAM",
      value: 734803,
    },
    {
      id: "JOR",
      value: 443802,
    },
    {
      id: "JPN",
      value: 590506,
    },
    {
      id: "KAZ",
      value: 828051,
    },
    {
      id: "KEN",
      value: 110545,
    },
    {
      id: "KGZ",
      value: 948681,
    },
    {
      id: "KHM",
      value: 581862,
    },
    {
      id: "OSA",
      value: 681985,
    },
    {
      id: "KWT",
      value: 919547,
    },
    {
      id: "LAO",
      value: 419168,
    },
    {
      id: "LBN",
      value: 560242,
    },
    {
      id: "LBR",
      value: 313827,
    },
    {
      id: "LBY",
      value: 12048,
    },
    {
      id: "LKA",
      value: 633873,
    },
    {
      id: "LSO",
      value: 722362,
    },
    {
      id: "LTU",
      value: 260675,
    },
    {
      id: "LUX",
      value: 530631,
    },
    {
      id: "LVA",
      value: 991437,
    },
    {
      id: "MAR",
      value: 941620,
    },
    {
      id: "MDA",
      value: 190249,
    },
    {
      id: "MDG",
      value: 763291,
    },
    {
      id: "MEX",
      value: 401770,
    },
    {
      id: "MKD",
      value: 260807,
    },
    {
      id: "MLI",
      value: 861269,
    },
    {
      id: "MMR",
      value: 152302,
    },
    {
      id: "MNE",
      value: 758050,
    },
    {
      id: "MNG",
      value: 782090,
    },
    {
      id: "MOZ",
      value: 182879,
    },
    {
      id: "MRT",
      value: 97606,
    },
    {
      id: "MWI",
      value: 631090,
    },
    {
      id: "MYS",
      value: 531937,
    },
    {
      id: "NAM",
      value: 948437,
    },
    {
      id: "NCL",
      value: 165462,
    },
    {
      id: "NER",
      value: 938952,
    },
    {
      id: "NGA",
      value: 850901,
    },
    {
      id: "NIC",
      value: 282449,
    },
    {
      id: "NLD",
      value: 139818,
    },
    {
      id: "NOR",
      value: 157583,
    },
    {
      id: "NPL",
      value: 879649,
    },
    {
      id: "NZL",
      value: 777719,
    },
    {
      id: "OMN",
      value: 148204,
    },
    {
      id: "PAK",
      value: 975448,
    },
    {
      id: "PAN",
      value: 440714,
    },
    {
      id: "PER",
      value: 65576,
    },
    {
      id: "PHL",
      value: 177807,
    },
    {
      id: "PNG",
      value: 413394,
    },
    {
      id: "POL",
      value: 130007,
    },
    {
      id: "PRI",
      value: 48963,
    },
    {
      id: "PRT",
      value: 42737,
    },
    {
      id: "PRY",
      value: 21300,
    },
    {
      id: "QAT",
      value: 587688,
    },
    {
      id: "ROU",
      value: 786587,
    },
    {
      id: "RUS",
      value: 975004,
    },
    {
      id: "RWA",
      value: 297298,
    },
    {
      id: "ESH",
      value: 570980,
    },
    {
      id: "SAU",
      value: 255564,
    },
    {
      id: "SDN",
      value: 132723,
    },
    {
      id: "SDS",
      value: 610965,
    },
    {
      id: "SEN",
      value: 38556,
    },
    {
      id: "SLB",
      value: 913797,
    },
    {
      id: "SLE",
      value: 232589,
    },
    {
      id: "SLV",
      value: 625165,
    },
    {
      id: "ABV",
      value: 62361,
    },
    {
      id: "SOM",
      value: 745093,
    },
    {
      id: "SRB",
      value: 901668,
    },
    {
      id: "SUR",
      value: 245124,
    },
    {
      id: "SVK",
      value: 753962,
    },
    {
      id: "SVN",
      value: 818192,
    },
    {
      id: "SWZ",
      value: 818670,
    },
    {
      id: "SYR",
      value: 204010,
    },
    {
      id: "TCD",
      value: 807872,
    },
    {
      id: "TGO",
      value: 786451,
    },
    {
      id: "THA",
      value: 716942,
    },
    {
      id: "TJK",
      value: 408421,
    },
    {
      id: "TKM",
      value: 17993,
    },
    {
      id: "TLS",
      value: 318470,
    },
    {
      id: "TTO",
      value: 239835,
    },
    {
      id: "TUN",
      value: 565767,
    },
    {
      id: "TUR",
      value: 417461,
    },
    {
      id: "TWN",
      value: 623020,
    },
    {
      id: "TZA",
      value: 779233,
    },
    {
      id: "UGA",
      value: 759083,
    },
    {
      id: "UKR",
      value: 617405,
    },
    {
      id: "URY",
      value: 785679,
    },
    {
      id: "USA",
      value: 990871,
    },
    {
      id: "UZB",
      value: 298679,
    },
    {
      id: "VEN",
      value: 448669,
    },
    {
      id: "VNM",
      value: 849463,
    },
    {
      id: "VUT",
      value: 721363,
    },
    {
      id: "PSE",
      value: 789306,
    },
    {
      id: "YEM",
      value: 90060,
    },
    {
      id: "ZAF",
      value: 679984,
    },
    {
      id: "ZMB",
      value: 692572,
    },
    {
      id: "ZWE",
      value: 911496,
    },
    {
      id: "KOR",
      value: 716753,
    },
  ];
  return (
    <Card className="w-full rounded-[8px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 h-[400px]">
        <MyChoropleth data={data} />
      </CardContent>
    </Card>
  );
}
