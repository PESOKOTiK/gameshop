import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersTabComponent } from './developers-tab.component';

describe('DevelopersTabComponent', () => {
  let component: DevelopersTabComponent;
  let fixture: ComponentFixture<DevelopersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopersTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
