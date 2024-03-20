import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRenderComponent } from './header-render.component';

describe('HeaderRenderComponent', () => {
  let component: HeaderRenderComponent;
  let fixture: ComponentFixture<HeaderRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
