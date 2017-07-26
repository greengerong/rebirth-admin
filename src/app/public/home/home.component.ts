import { Component } from '@angular/core';
import { PipelineConfig } from './pipeline-config/pipeline-config.model';

@Component({
  selector: 'app-public-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  types = ['构建配置', 'Sonar扫描', 'HUB扫描', '发布', '部署'];

  pipelineConfig: PipelineConfig[] = [
    {
      id: '1',
      name: '构建',
      enterPoint: true,
      triggers: ['2', '3', '4'],
      config: {
        batch: 'mvn clean install'
      }
    },
    {
      id: '2',
      name: 'HUB扫描1',
      triggers: ['6', '7', '8'],
      config: {
        batch: 'hub plugin'
      }
    },
    {
      id: '3',
      name: 'Sonar',
      config: {
        language: 'java',
        encoding: 'utf-8',
        batch: 'sonarqueryable -xxx'
      },
      triggers: ['9'],
    },
    {
      id: '4',
      name: '入库',
      triggers: ['5'],
      config: {}
    },
    {
      id: '5',
      name: '部署',
      config: {}
    },
    {
      id: '6',
      name: 'HUB扫描2',
      config: {}
    },
    {
      id: '7',
      name: 'HUB扫描3',
      config: {}
    },
    {
      id: '8',
      name: 'HUB扫描4'
    },
    {
      id: '9',
      name: 'Sonar1'
    },
  ];

  configClick($event) {
    console.log('configClick', $event);
  }

}
