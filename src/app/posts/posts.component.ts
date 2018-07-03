import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Post} from '../post.model';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('postState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      (data:any) => {
        this.posts = [];
        for (let post of data){
          this.posts.push(new Post(post.title,post.body));
        }
      }
    );
  }


}
