import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-get',
  templateUrl: './posts-get.component.html',
  styleUrl: './posts-get.component.css'
})
export class PostsGetComponent implements OnInit {


  miFormulario: FormGroup = new FormGroup({});
  http = inject(HttpClient);
  posts: Map<number, string> = new Map();

  constructor(private fb: FormBuilder) { }

  onPostIdChange(event: any) {
    const selectedId = event.target.value;
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${selectedId}`)
      .subscribe((data: any) => {
        this.miFormulario.patchValue({
          title: data.title,
          body: data.body,
          postId: selectedId
        });
      });
  }
  updatePost() {
    //get the values from the form
    const formData = this.miFormulario.value;
    //send the request
    this.http.put(`https://jsonplaceholder.typicode.com/posts/${formData.postId}`, formData)
      .subscribe((response: any) => {
        alert("Post actualizado: " + JSON.stringify(response));
        this.miFormulario.reset(); // Resetear el formulario
      }, (error: any) => {
        // Manejar el error en caso de que ocurra
        alert("error" + error.status);
      });
  }
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: any) => {
        data.forEach((post: any) => {
          this.posts.set(post.id, post.title);
        });
      });
    //initialize the form
    this.miFormulario = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      postId: [null, [Validators.required]]
    });
  }
}