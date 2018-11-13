import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesingleComponent } from './recipesingle.component';

describe('RecipesingleComponent', () => {
  let component: RecipesingleComponent;
  let fixture: ComponentFixture<RecipesingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
