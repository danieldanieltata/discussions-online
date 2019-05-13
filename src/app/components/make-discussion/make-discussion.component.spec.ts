import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDiscussionComponent } from './make-discussion.component';

describe('MakeDiscussionComponent', () => {
  let component: MakeDiscussionComponent;
  let fixture: ComponentFixture<MakeDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
