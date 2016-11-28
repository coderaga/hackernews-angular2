import { Comment } from './comments';
export interface ItemDetail {
    id:             number,
    title:          string,
    points:         string,
    user:           string,
    time:           string,
    type:           string,
    url:            string,
    domain:         string,
    comments:       Comment[],
    comments_count: number,
}