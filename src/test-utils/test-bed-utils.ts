import { APP_BASE_HREF } from '@angular/common';
import { CoreModule } from '../app/core/core.module';
import { SharedModule } from '../app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TestBed, TestModuleMetadata } from '@angular/core/testing';

import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { setupTestBed } from './setup.spec';

@Component({
  selector: 'app-test',
  template: `<div>TestComponent</div>`,
})
export class TestComponent {
  props: { [key: string]: any } = {};
}

export class TestBedUtils {
  static configureTestingModule(
    moduleDef: TestModuleMetadata,
    options?: {
      ignoreShareModule?: boolean;
      ignoreCoreModule?: boolean;
      routes?: Routes;
    },
  ): void {
    options = options || {
      ignoreCoreModule: false,
      ignoreShareModule: false,
      routes: [],
    };
    moduleDef.imports = [
      ...(moduleDef.imports || []),
      NoopAnimationsModule,
      HttpClientTestingModule,
      ...(options.ignoreCoreModule ? [] : [CoreModule]),
      ...(options.ignoreShareModule ? [] : [SharedModule]),
      RouterModule.forRoot(options.routes || []),
    ];
    moduleDef.providers = [
      ...(moduleDef.providers || []),
      { provide: APP_BASE_HREF, useValue: '/' },
    ];
    moduleDef.declarations = [...(moduleDef.declarations || []), TestComponent];
    moduleDef.schemas = [NO_ERRORS_SCHEMA];
    setupTestBed(moduleDef);
  }

  static input($elm: DebugElement, value: string) {
    $elm.nativeElement.value = value;
    TestBedUtils.dispatchEvent($elm, 'input');
  }

  static dispatchEvent(
    $elm: DebugElement,
    event: string,
    eventInitDict?: EventInit,
  ) {
    $elm.nativeElement.dispatchEvent(new Event(event, eventInitDict));
  }
}
