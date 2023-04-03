import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDisplayerComponent } from './model-displayer.component';

describe('ModelDisplayerComponent', () => {
  let component: ModelDisplayerComponent;
  let fixture: ComponentFixture<ModelDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
