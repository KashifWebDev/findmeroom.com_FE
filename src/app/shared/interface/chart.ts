import {
  ApexChart,
  ApexMarkers,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ApexTooltip,
  ApexAxisChartSeries,
} from "ng-apexcharts";
import { BarChartConfiguration } from "ng-chartist";

export interface FullChartDetails extends BarChartConfiguration {
  title: string;
  number: string;
  widgetClass: string;
  chartClass: string;
}

export interface SalesOverviewChart {
  chart: ApexChart;
  series: ApexAxisChartSeries;
  markers: ApexMarkers;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
  fill: ApexFill;
  grid: ApexGrid;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  tooltip: ApexTooltip;
}

export interface SalesByAgentChart {
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  colors: string[];
  fill: ApexFill;
  series: ApexAxisChartSeries;
  xaxis: ApexXAxis;
}

export interface AvailablePropertyDataChart {
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  series: number[];
  labels: string[];
  colors: string[];
  stroke: ApexStroke;
}
