import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleChildComponent } from './sample-child.component';

describe('SampleChildComponent', () => {
  let component: SampleChildComponent;
  let fixture: ComponentFixture<SampleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
