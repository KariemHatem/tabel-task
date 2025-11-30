import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDailog } from './form-dailog';

describe('FormDailog', () => {
  let component: FormDailog;
  let fixture: ComponentFixture<FormDailog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDailog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDailog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
