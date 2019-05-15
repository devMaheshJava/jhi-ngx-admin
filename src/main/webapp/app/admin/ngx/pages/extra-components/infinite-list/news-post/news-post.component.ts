import { Component, Input } from '@angular/core';

import { NewsPost } from '../../services/news.service';

@Component({
    selector: 'jhi-news-post',
    templateUrl: 'news-post.component.html'
})
export class NewsPostComponent {
    @Input() post: NewsPost;
}
