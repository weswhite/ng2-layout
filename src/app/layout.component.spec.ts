import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LayoutAppComponent } from 'layout.component.ts';

beforeEachProviders(() => [LayoutAppComponent]);

describe('App: Layout', () => {
  it('should create the app',
      inject([LayoutAppComponent], (app: LayoutAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'layout works!\'',
      inject([LayoutAppComponent], (app: LayoutAppComponent) => {
    expect(app.title).toEqual('layout works!');
  }));
});
