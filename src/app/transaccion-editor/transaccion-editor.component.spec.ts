import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionEditorComponent } from './transaccion-editor.component';

describe('TransaccionEditorComponent', () => {
  let component: TransaccionEditorComponent;
  let fixture: ComponentFixture<TransaccionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
