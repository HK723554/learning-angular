import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListComponentComponent } from './content-list-component.component';

describe('ContentListComponentComponent', () => {
  let component: ContentListComponentComponent;
  let fixture: ComponentFixture<ContentListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
