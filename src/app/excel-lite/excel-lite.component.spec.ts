import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelLiteComponent } from './excel-lite.component';

describe('ExcelLiteComponent', () => {
  let component: ExcelLiteComponent;
  let fixture: ComponentFixture<ExcelLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelLiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcelLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
