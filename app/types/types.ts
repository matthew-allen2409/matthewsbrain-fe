export interface Post {
  post_id: number;
  title: string;
  content: string;
  created_at: string;
}

export interface Comment {
  post_id: number;
  name: string;
  email: string
  comment: string;
  created_at: string;
}

export interface CommentInput {
  post_id: number;
  name: string;
  email: string
  comment: string;
}
