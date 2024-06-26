import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellRenderComponent } from './cell-render.component';

describe('CellRenderComponent', () => {
  let component: CellRenderComponent;
  let fixture: ComponentFixture<CellRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CellRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
