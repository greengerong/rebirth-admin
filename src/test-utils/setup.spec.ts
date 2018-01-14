import { inject, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { StorageService } from 'rebirth-storage';
import { LoadingService } from '../app/core/loading/loading.service';
import { TestComponent } from './test-bed-utils';

const resetTestingModule = TestBed.resetTestingModule;
const preventAngularFromResetting = () =>
  (TestBed.resetTestingModule = () => TestBed);
const allowAngularToReset = () =>
  (TestBed.resetTestingModule = resetTestingModule);

export const setupTestBed = (moduleDef: TestModuleMetadata) => {
  const cache = {};
  const providers = moduleDef.providers.filter(p => p instanceof Function);
  const sharedProviders = [StorageService, LoadingService];

  beforeAll(done =>
    (async () => {
      resetTestingModule();
      preventAngularFromResetting();

      TestBed.configureTestingModule(moduleDef);
      await TestBed.compileComponents();

      [...providers, ...sharedProviders].forEach(provider => {
        if (provider instanceof Function) {
          const name = provider.name;
          cache[name] = Reflect.construct(provider, []);
        }
      });

      // preventing angular from resetting
      TestBed.resetTestingModule = () => TestBed;
    })()
      .then(done)
      .catch(done.fail),
  );

  afterEach(
    inject([...providers, ...sharedProviders], (...services) => {
      services.forEach(service => {
        const cached = cache[service.constructor.name] || {};
        for (const i of Object.getOwnPropertyNames(service)) {
          if ((jasmine as any).isSpy(service[i]) && cached[i]) {
            service[i] = cached[i];
          }
        }
      });
    }),
  );

  afterAll(allowAngularToReset);
};
