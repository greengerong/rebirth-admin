export interface PipelineLine {
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
}

export interface PipelinePosition {
  xLevel?: number;
  yLevel?: number;
  x?: number;
  y?: number;
}
export interface PipelineConfig {
  id: string;
  name: string;
  enterPoint?: boolean;
  triggers?: string[];
  position?: PipelinePosition;
  config?: { [key: string]: any } | any;
}

