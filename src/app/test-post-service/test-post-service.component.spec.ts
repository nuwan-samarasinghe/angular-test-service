import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPostServiceComponent } from './test-post-service.component';

describe('TestPostServiceComponent', () => {
  let component: TestPostServiceComponent;
  let fixture: ComponentFixture<TestPostServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPostServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPostServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
