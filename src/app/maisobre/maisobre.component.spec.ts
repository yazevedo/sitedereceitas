import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisobreComponent } from './maisobre.component';

describe('MaisobreComponent', () => {
  let component: MaisobreComponent;
  let fixture: ComponentFixture<MaisobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisobreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
