import { v4 as uuidv4 } from 'uuid';

import { TSiteData } from '../types/site';
import { BlogPost, BlogData } from '../types/pages/blog';

export const SiteData: TSiteData = {
  profile: {
    name: `Lorenzo Faivre`,
    tag: `Software Engineer & Artist`,
  },
};

const BlogPosts: Array<BlogPost> = [
  {
    id: uuidv4(),
    title: `Currently under construction.`,
    subtitle: '',
    body: '',
  },
];

export const ContentfulBlogData: BlogData = {
  posts: BlogPosts,
  count: () => BlogPosts.length,
};
