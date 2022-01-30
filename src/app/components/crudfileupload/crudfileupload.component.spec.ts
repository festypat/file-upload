import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudfileuploadComponent } from './crudfileupload.component';

describe('CrudfileuploadComponent', () => {
  let component: CrudfileuploadComponent;
  let fixture: ComponentFixture<CrudfileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudfileuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudfileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
