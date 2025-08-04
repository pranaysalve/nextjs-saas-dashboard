import { ResponsiveChoropleth } from "@nivo/geo";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import worldCountries from "../../../../utils/world_countries.json";

const MyChoropleth = ({ data /* see data tab */ }) => (
  <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
    data={data}
    features={worldCountries.features}
    // margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="greys"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    // legends={[
    //   {
    //     anchor: "bottom-left",
    //     direction: "column",
    //     justify: true,
    //     translateX: 20,
    //     translateY: -100,
    //     itemsSpacing: 0,
    //     itemWidth: 94,
    //     itemHeight: 18,
    //     itemDirection: "left-to-right",
    //     itemTextColor: "#444444",
    //     itemOpacity: 0.85,
    //     symbolSize: 18,
    //   },
    // ]}
  />
);

function GlobalGeoMap() {
  const data = [
    {
      id: "AFG",
      value: 141361,
    },
    {
      id: "AGO",
      value: 785922,
    },
    {
      id: "ALB",
      value: 801185,
    },
    {
      id: "ARE",
      value: 300935,
    },
    {
      id: "ARG",
      value: 572717,
    },
    {
      id: "ARM",
      value: 254663,
    },
    {
      id: "ATA",
      value: 392643,
    },
    {
      id: "ATF",
      value: 413463,
    },
    {
      id: "AUT",
      value: 815703,
    },
    {
      id: "AZE",
      value: 446159,
    },
    {
      id: "BDI",
      value: 487112,
    },
    {
      id: "BEL",
      value: 523344,
    },
    {
      id: "BEN",
      value: 667139,
    },
    {
      id: "BFA",
      value: 729215,
    },
    {
      id: "BGD",
      value: 39002,
    },
    {
      id: "BGR",
      value: 958790,
    },
    {
      id: "BHS",
      value: 331149,
    },
    {
      id: "BIH",
      value: 961778,
    },
    {
      id: "BLR",
      value: 476221,
    },
    {
      id: "BLZ",
      value: 154533,
    },
    {
      id: "BOL",
      value: 310902,
    },
    {
      id: "BRN",
      value: 624988,
    },
    {
      id: "BTN",
      value: 273852,
    },
    {
      id: "BWA",
      value: 313541,
    },
    {
      id: "CAF",
      value: 459577,
    },
    {
      id: "CAN",
      value: 794303,
    },
    {
      id: "CHE",
      value: 577805,
    },
    {
      id: "CHL",
      value: 628985,
    },
    {
      id: "CHN",
      value: 577988,
    },
    {
      id: "CIV",
      value: 91776,
    },
    {
      id: "CMR",
      value: 549052,
    },
    {
      id: "COG",
      value: 585398,
    },
    {
      id: "COL",
      value: 178326,
    },
    {
      id: "CRI",
      value: 836597,
    },
    {
      id: "CUB",
      value: 490196,
    },
    {
      id: "-99",
      value: 326510,
    },
    {
      id: "CYP",
      value: 937825,
    },
    {
      id: "CZE",
      value: 709997,
    },
    {
      id: "DEU",
      value: 491241,
    },
    {
      id: "DJI",
      value: 377277,
    },
    {
      id: "DNK",
      value: 226305,
    },
    {
      id: "DOM",
      value: 702136,
    },
    {
      id: "DZA",
      value: 615124,
    },
    {
      id: "ECU",
      value: 177609,
    },
    {
      id: "EGY",
      value: 794982,
    },
    {
      id: "ERI",
      value: 414886,
    },
    {
      id: "ESP",
      value: 434565,
    },
    {
      id: "EST",
      value: 799514,
    },
    {
      id: "ETH",
      value: 608531,
    },
    {
      id: "FIN",
      value: 878510,
    },
    {
      id: "FJI",
      value: 793504,
    },
    {
      id: "FLK",
      value: 795236,
    },
    {
      id: "FRA",
      value: 353676,
    },
    {
      id: "GAB",
      value: 395895,
    },
    {
      id: "GBR",
      value: 187521,
    },
    {
      id: "GEO",
      value: 383265,
    },
    {
      id: "GHA",
      value: 206523,
    },
    {
      id: "GIN",
      value: 590459,
    },
    {
      id: "GMB",
      value: 143551,
    },
    {
      id: "GNB",
      value: 921711,
    },
    {
      id: "GNQ",
      value: 823533,
    },
    {
      id: "GRC",
      value: 774409,
    },
    {
      id: "GTM",
      value: 456451,
    },
    {
      id: "GUY",
      value: 127477,
    },
    {
      id: "HND",
      value: 103453,
    },
    {
      id: "HRV",
      value: 373294,
    },
    {
      id: "HTI",
      value: 210313,
    },
    {
      id: "HUN",
      value: 747277,
    },
    {
      id: "IDN",
      value: 829002,
    },
    {
      id: "IND",
      value: 144098,
    },
    {
      id: "IRL",
      value: 183589,
    },
    {
      id: "IRN",
      value: 733490,
    },
    {
      id: "IRQ",
      value: 753707,
    },
    {
      id: "ISL",
      value: 596910,
    },
    {
      id: "ISR",
      value: 912663,
    },
    {
      id: "ITA",
      value: 839960,
    },
    {
      id: "JAM",
      value: 821310,
    },
    {
      id: "JOR",
      value: 972364,
    },
    {
      id: "JPN",
      value: 283442,
    },
    {
      id: "KAZ",
      value: 230085,
    },
    {
      id: "KEN",
      value: 550690,
    },
    {
      id: "KGZ",
      value: 914923,
    },
    {
      id: "KHM",
      value: 955144,
    },
    {
      id: "OSA",
      value: 644589,
    },
    {
      id: "KWT",
      value: 394514,
    },
    {
      id: "LAO",
      value: 886018,
    },
    {
      id: "LBN",
      value: 584348,
    },
    {
      id: "LBR",
      value: 326848,
    },
    {
      id: "LBY",
      value: 888059,
    },
    {
      id: "LKA",
      value: 257419,
    },
    {
      id: "LSO",
      value: 166071,
    },
    {
      id: "LTU",
      value: 249931,
    },
    {
      id: "LUX",
      value: 593329,
    },
    {
      id: "LVA",
      value: 758444,
    },
    {
      id: "MAR",
      value: 167723,
    },
    {
      id: "MDA",
      value: 995128,
    },
    {
      id: "MDG",
      value: 74031,
    },
    {
      id: "MEX",
      value: 10533,
    },
    {
      id: "MKD",
      value: 613012,
    },
    {
      id: "MLI",
      value: 354873,
    },
    {
      id: "MMR",
      value: 574147,
    },
    {
      id: "MNE",
      value: 213120,
    },
    {
      id: "MNG",
      value: 815439,
    },
    {
      id: "MOZ",
      value: 246804,
    },
    {
      id: "MRT",
      value: 430269,
    },
    {
      id: "MWI",
      value: 129503,
    },
    {
      id: "MYS",
      value: 949885,
    },
    {
      id: "NAM",
      value: 169776,
    },
    {
      id: "NCL",
      value: 409048,
    },
    {
      id: "NER",
      value: 464353,
    },
    {
      id: "NGA",
      value: 757035,
    },
    {
      id: "NIC",
      value: 27098,
    },
    {
      id: "NLD",
      value: 705926,
    },
    {
      id: "NOR",
      value: 554558,
    },
    {
      id: "NPL",
      value: 980154,
    },
    {
      id: "NZL",
      value: 951785,
    },
    {
      id: "OMN",
      value: 426793,
    },
    {
      id: "PAK",
      value: 665528,
    },
    {
      id: "PAN",
      value: 468538,
    },
    {
      id: "PER",
      value: 429084,
    },
    {
      id: "PHL",
      value: 562430,
    },
    {
      id: "PNG",
      value: 129814,
    },
    {
      id: "POL",
      value: 321629,
    },
    {
      id: "PRI",
      value: 749745,
    },
    {
      id: "PRT",
      value: 233026,
    },
    {
      id: "PRY",
      value: 593286,
    },
    {
      id: "QAT",
      value: 874976,
    },
    {
      id: "ROU",
      value: 253317,
    },
    {
      id: "RUS",
      value: 70970,
    },
    {
      id: "RWA",
      value: 576779,
    },
    {
      id: "ESH",
      value: 556594,
    },
    {
      id: "SAU",
      value: 675333,
    },
    {
      id: "SDN",
      value: 144380,
    },
    {
      id: "SDS",
      value: 415969,
    },
    {
      id: "SEN",
      value: 912468,
    },
    {
      id: "SLB",
      value: 53218,
    },
    {
      id: "SLE",
      value: 85707,
    },
    {
      id: "SLV",
      value: 667150,
    },
    {
      id: "ABV",
      value: 963549,
    },
    {
      id: "SOM",
      value: 1028,
    },
    {
      id: "SRB",
      value: 959139,
    },
    {
      id: "SUR",
      value: 233606,
    },
    {
      id: "SVK",
      value: 313558,
    },
    {
      id: "SVN",
      value: 448226,
    },
    {
      id: "SWZ",
      value: 414752,
    },
    {
      id: "SYR",
      value: 680006,
    },
    {
      id: "TCD",
      value: 61127,
    },
    {
      id: "TGO",
      value: 776974,
    },
    {
      id: "THA",
      value: 834924,
    },
    {
      id: "TJK",
      value: 682487,
    },
    {
      id: "TKM",
      value: 869242,
    },
    {
      id: "TLS",
      value: 646893,
    },
    {
      id: "TTO",
      value: 862110,
    },
    {
      id: "TUN",
      value: 982038,
    },
    {
      id: "TUR",
      value: 727161,
    },
    {
      id: "TWN",
      value: 210886,
    },
    {
      id: "TZA",
      value: 162233,
    },
    {
      id: "UGA",
      value: 311829,
    },
    {
      id: "UKR",
      value: 182605,
    },
    {
      id: "URY",
      value: 435541,
    },
    {
      id: "USA",
      value: 624771,
    },
    {
      id: "UZB",
      value: 399730,
    },
    {
      id: "VEN",
      value: 438113,
    },
    {
      id: "VNM",
      value: 750144,
    },
    {
      id: "VUT",
      value: 525692,
    },
    {
      id: "PSE",
      value: 105513,
    },
    {
      id: "YEM",
      value: 566377,
    },
    {
      id: "ZAF",
      value: 328170,
    },
    {
      id: "ZMB",
      value: 37656,
    },
    {
      id: "ZWE",
      value: 977554,
    },
    {
      id: "KOR",
      value: 513150,
    },
  ];
  return (
    <Card className="rounded-[8px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="flex h-full w-full">
        <MyChoropleth data={data} />
      </CardContent>
    </Card>
  );
}

export default GlobalGeoMap;
