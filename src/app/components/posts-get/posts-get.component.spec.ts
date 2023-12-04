import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsGetComponent } from './posts-get.component';

describe('PostsGetComponent', () => {
  let component: PostsGetComponent;
  let fixture: ComponentFixture<PostsGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
