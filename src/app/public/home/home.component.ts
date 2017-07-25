import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  pipelines: any[];
  lines: any[];
  pipelinesWidth: number;
  pipelinesHeight: number;

  ngOnInit(): void {
    const data: any[] = [
      {
        id: "1",
        name: '构建',
        enterPoint: true,
        triggers: ['2', '3', '4']
      },
      {
        id: "2",
        name: 'HUB扫描1',
        triggers: ['6', '7']
      },
      {
        id: "3",
        name: 'Sonar'
      },
      {
        id: "4",
        name: '入库',
        triggers: ['5']
      },
      {
        id: "5",
        name: '部署'
      },
      {
        id: "6",
        name: 'HUB扫描2'
      },
      {
        id: "7",
        name: 'HUB扫描3'
      },
      // {
      //   id: "8",
      //   name: 'HUB扫描4'
      // },
    ];

    // this.pipelines = data.map((item, index) => {
    //   item.x = 10 + index * 120 + index * 60;
    //   return item;
    // });

    const enterPoint = data.find((item) => item.enterPoint);
    this.constructionPaths(data, enterPoint, 0, 0);
    console.log(data, 'data-----');

    this.pipelines = data.map((pipeline) => {
      pipeline.x = 10 + pipeline.xLevel * 120 + pipeline.xLevel * 60;
      pipeline.y = 20 + pipeline.yLevel * 60 + pipeline.yLevel * 60;
      return pipeline;
    });

    this.lines = [].concat(...data.map((pipeline) => {
      pipeline.triggers = pipeline.triggers || [];
      return pipeline.triggers.map((trigger) => {
        const triggerPipeline = data.find((item) => item.id === trigger);
        return { x1: pipeline.x, y1: pipeline.y, x2: triggerPipeline.x, y2: triggerPipeline.y }
      });
    }));

    console.log(this.pipelines, this.lines, 'result result result result');
    this.pipelinesWidth = Math.max(...this.pipelines.map((item) => item.x)) + 120 + 60;
    this.pipelinesHeight = Math.max(...this.pipelines.map((item) => item.y)) + 60;
    console.log(this.pipelines);
  }

  private constructionPaths(data: any[], enterPoint: any, xLevel: number, yLevel: number) {
    if (!enterPoint) {
      return { pipelines: [], lines: [] };
    }

    // enterPoint.x = 10 + xLevel * 120 + xLevel * 60;
    // enterPoint.y = 20 + yLevel * 60 + yLevel * 60;
    enterPoint.xLevel = xLevel;
    enterPoint.yLevel = yLevel;
    enterPoint.triggers = enterPoint.triggers || [];
    enterPoint.triggers.forEach((trigger, index) => {
      const pipeline = data.find((item) => item.id === trigger);
      this.constructionPaths(data, pipeline, xLevel + 1, index + yLevel);
    });
  }

  pipelineClick(pipeline) {
    console.log(pipeline, 'clicked');
  }

  addTopPipeline($event, pipeline) {
    $event.stopPropagation();
    pipeline.triggers = pipeline.triggers || [];
    if (pipeline.triggers.length > 0) {
      return;
    }
    const newPipeline = { id: `${pipeline.id}-${pipeline.triggers.length + 1}`, name: '请选择', x: pipeline.x + 180 };
    this.pipelines = [...this.pipelines, newPipeline];
    pipeline.trigger = [...pipeline.triggers, (newPipeline.id)];
  }


}
