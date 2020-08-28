import { v4 as uuidv4 } from 'uuid';
import { BlogPost, BlogData } from '../types/blog';

const BlogPosts: Array<BlogPost> = [
  {
    id: uuidv4(),
    title: 'Currently under construction.',
    subtitle: '',
    body: '',
  },
];

export const ContentfulBlogData: BlogData = {
  posts: BlogPosts,
  count: () => BlogPosts.length,
};
