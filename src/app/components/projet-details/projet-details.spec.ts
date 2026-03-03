import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetDetails } from './projet-details';

describe('ProjetDetails', () => {
  let component: ProjetDetails;
  let fixture: ComponentFixture<ProjetDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
