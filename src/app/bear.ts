import { Category } from './category';
import { Comment } from './comment';

export interface Bear {
    id: number;
    title: string;
    description: string;    
    likes: number;
    comments: string[];   
    category: Category;
}
