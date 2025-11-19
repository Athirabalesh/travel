import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import React from "react";

type ChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

type ChartPayload = {
  color?: string;
  value?: number;
  name?: string;
  dataKey?: string;
  payload?: Record<string, any>;
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: ChartPayload[];
  label?: string | number;
};

type CustomLegendProps = {
  payload?: {
    value?: string;
    color?: string;
  }[];
};

export function ChartTooltip({ active, payload, label }: CustomTooltipProps) {
  const safePayload = Array.isArray(payload) ? payload : [];

  if (!active || safePayload.length === 0) return null;

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid gap-1">
        <div className="font-medium">{label}</div>
        {safePayload.map((item: ChartPayload, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color || "#8884d8" }}
            />
            <span className="text-muted-foreground">
              {item.name}
            </span>
            {item.value !== undefined && (
              <span className="font-mono font-medium tabular-nums text-foreground">
                {Number(item.value).toLocaleString()}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChartLegendContent({ payload }: CustomLegendProps) {
  const safePayload = Array.isArray(payload) ? payload : [];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {safePayload.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: item?.color || "#8884d8" }}
          />
          <span className="text-muted-foreground text-sm">{item?.value}</span>
        </div>
      ))}
    </div>
  );
}

export function ChartContainer({
  data,
  config,
  type = "line",
}: {
  data: Record<string, any>[];
  config: ChartConfig;
  type?: "line" | "bar" | "area";
}) {
  const ChartComponent =
    type === "bar" ? BarChart : type === "area" ? AreaChart : LineChart;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <ChartComponent data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Tooltip content={<ChartTooltip />} />
        <Legend content={<ChartLegendContent />} />

        {Object.entries(config).map(([key, value]) => {
          if (type === "bar") {
            return (
              <Bar
                key={key}
                dataKey={key}
                stroke={value.color}
                fill={value.color}
                fillOpacity={0.3}
              />
            );
          }

          if (type === "area") {
            return (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stroke={value.color}
                fill={value.color}
                fillOpacity={0.3}
              />
            );
          }

          return (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={value.color}
              fill={value.color}
              fillOpacity={0.3}
            />
          );
        })}
      </ChartComponent>
    </ResponsiveContainer>
  );
}