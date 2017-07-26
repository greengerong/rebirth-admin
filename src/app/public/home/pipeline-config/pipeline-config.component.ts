import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { GuidService } from '../../../core';
import { PositionService } from 'rebirth-ng';
import { PipelineConfig, PipelineLine } from './pipeline-config.model';

@Component({
  selector: 'app-pipeline-config',
  templateUrl: './pipeline-config.component.html',
  styleUrls: ['./pipeline-config.component.scss'],
  exportAs: 'pipelineConfig'
})
export class PipelineConfigComponent implements OnChanges {
  @Input() pipelineConfig: PipelineConfig[];
  @Input() types: string[] = [];
  @Output() pipelineConfigChange = new EventEmitter<PipelineConfig[]>();
  @Output() configClick = new EventEmitter<PipelineConfig>();
  @ViewChild('dropmenu') dropmenu: ElementRef;
  currentPipeline: PipelineConfig;
  pipelines: PipelineConfig[];
  lines: PipelineLine[];
  pipelinesWidth: number;
  pipelinesHeight: number;

  constructor(private guidService: GuidService,
              private positionService: PositionService,
              private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pipelineConfig']) {
      this.constructionPipeline();
    }
  }

  chooseType($event, pipeline) {
    $event.stopPropagation();
    this.currentPipeline = pipeline;
    const targetElement = this.dropmenu.nativeElement;

    this.renderer.setStyle(targetElement, 'display', 'block');
    setTimeout(() => {
      const pos = this.positionService.positionElements($event.target, targetElement, 'bottom', true);
      this.renderer.setStyle(targetElement, 'top', `${pos.top - 10}px`);
      this.renderer.setStyle(targetElement, 'left', `${pos.left}px`);
    })
  }

  configType(type) {
    this.currentPipeline.name = type;
    this.pipelineConfigChange.emit(this.pipelineConfig);
    this.hideDropmenu();
  }

  @HostListener('document:click', [])
  onDocumentClick() {
    this.hideDropmenu();
  }

  pipelineClick(pipeline) {
    this.configClick.emit(pipeline);
  }

  addTopPipeline($event, pipeline) {
    $event.stopPropagation();
    if (pipeline.triggers.length > 0) {
      return;
    }

    this.addNewConfig(pipeline);
  }

  addBottomPipeline($event, pipeline) {
    $event.stopPropagation();
    this.addNewConfig(pipeline);
  }

  private hideDropmenu() {
    this.currentPipeline = null;
    this.renderer.setStyle(this.dropmenu.nativeElement, 'display', 'none');
  }

  private constructionPipeline() {
    const pipelineData = this.pipelineConfig.map((pipeline) => {
      pipeline.position = null;
      return pipeline;
    });

    const enterPoint = pipelineData.find((item) => item.enterPoint);
    this.constructionPaths(pipelineData, enterPoint, 0, 0);

    this.pipelines = pipelineData.map((pipeline) => {
      const level = pipeline.position;
      level.x = 10 + level.xLevel * 120 + level.xLevel * 60;
      level.y = 20 + level.yLevel * 60 + level.yLevel * 60;
      return pipeline;
    });

    this.lines = [].concat(...pipelineData.map((pipeline) => {
      pipeline.triggers = pipeline.triggers || [];
      return pipeline.triggers.map((trigger) => {
        const triggerPipeline = pipelineData.find((item) => item.id === trigger);
        const pipelineLevel = pipeline.position;
        const triggerPipelineLevel = triggerPipeline.position;
        return { x1: pipelineLevel.x, y1: pipelineLevel.y, x2: triggerPipelineLevel.x, y2: triggerPipelineLevel.y }
      });
    }));

    this.pipelinesWidth = Math.max(...this.pipelines.map((item) => item.position.x)) + 120 + 60;
    this.pipelinesHeight = Math.max(...this.pipelines.map((item) => item.position.y)) + 60;
  }

  private constructionPaths(pipelineData: PipelineConfig[], enterPoint: PipelineConfig, xLevel: number, yLevel: number) {
    if (!enterPoint) {
      return { pipelines: [], lines: [] };
    }

    enterPoint.position = { xLevel, yLevel };
    enterPoint.triggers = enterPoint.triggers || [];
    enterPoint.triggers.forEach((trigger, index) => {
      const pipeline = pipelineData.find((item) => item.id === trigger);
      const level = this.getRightLevel(pipelineData, { xLevel: xLevel + 1, yLevel: index + yLevel });
      this.constructionPaths(pipelineData, pipeline, level.xLevel, level.yLevel);
    });
  }

  private getRightLevel(pipelineData: PipelineConfig[], level: { xLevel: number; yLevel: number }) {
    const hasConflict = pipelineData.some((pipeline) =>
    pipeline.position &&
    pipeline.position.xLevel === level.xLevel &&
    pipeline.position.yLevel === level.yLevel);

    if (hasConflict) {
      return this.getRightLevel(pipelineData, { xLevel: level.xLevel, yLevel: level.yLevel + 1 });
    }
    return level;
  }

  private addNewConfig(pipeline) {
    pipeline.triggers = pipeline.triggers || [];
    const newPipeline = { id: this.guidService.newId(), name: '请选择' };
    this.pipelineConfig = [...this.pipelineConfig, newPipeline];
    pipeline.triggers = [...pipeline.triggers, newPipeline.id];
    this.pipelineConfigChange.emit(this.pipelineConfig);
  }


}
