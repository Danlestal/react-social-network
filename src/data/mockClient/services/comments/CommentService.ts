import { injectable } from "inversify";
import { ICommentService } from "src/core/services";
import { Comment } from "src/core/domain/comments"
import { postComments } from "src/models/comments/commentTypes"

@injectable()
export class CommentService implements ICommentService {
  addComment: (comment: Comment) => Promise<string>;
  getComments: (postId: string,
  next: (resultComments: postComments) => void) => () => void;
  updateComment: (comment: Comment) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;


}
