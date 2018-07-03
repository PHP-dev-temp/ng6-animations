export class Post {
  title: string;
  body: string;
  state: string;

  constructor(title, body, state = 'inactive'){
    this.title = title;
    this.body = body;
    this.state = state;
  }
}
