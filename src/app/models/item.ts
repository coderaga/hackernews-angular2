// { "id": 13051611,
//  "title": "Ask HN: I am 30yrs and never had a fulltime job,now suicidal.Any Life advice?", 
//  "points": 40, 
//  "user": "tevlon",
//   "time": 1480281806,
//    "time_ago": "8 hours ago",
//     "comments_count": 32,
//      "type": "ask",
//       "url": "item?id=13051611" }

export interface Item {
    id:             number,
    title:          string,
    user:           string,
    time:           number,
    time_ago:       string,
    comments_count: number,
    type:           string,
    url:            string
}