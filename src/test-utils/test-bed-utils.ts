import { APP_BASE_HREF } from '@angular/common';
import { CoreModule } from '../app/core/core.module';
import { SharedModule } from '../app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TestBed, TestModuleMetadata } from '@angular/core/testing';

import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-test',
  template: ``
})

export class TestComponent {

}


export class TestBedUtils {

  static configureTestingModule(moduleDef: TestModuleMetadata, options?: {
    ignoreShareModule?: boolean,
    ignoreCoreModule?: boolean,
    routes?: Routes
  }): typeof TestBed {
    options = options || { ignoreCoreModule: false, ignoreShareModule: false, routes: [] };
    moduleDef.imports = [...(moduleDef.imports || []),
      NoopAnimationsModule,
      ...(options.ignoreCoreModule ? [] : [CoreModule]),
      ...(options.ignoreShareModule ? [] : [SharedModule]),
      RouterModule.forRoot(options.routes || [])
    ];
    moduleDef.providers = [...(moduleDef.providers || []),
      { provide: APP_BASE_HREF, useValue: '/' },
      HttpClientTestingModule
    ];
    moduleDef.declarations = [...(moduleDef.declarations || []), TestComponent];

    return TestBed.configureTestingModule(moduleDef);
  }
}


