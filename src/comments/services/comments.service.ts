import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dto/comments.create.dto';

@Injectable()
export class CommentsService {
  async getAllComments() {
    return 'hello all comments';
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    return 'hello comment';
  }

  async plusLike(id: string) {
    return 'hello Like';
  }
}
