import { injectable, inject } from "inversify";
import { IPostService } from "src/core/services";
import { IHttpService } from "src/core/services/webAPI";
import { SocialProviderTypes } from "src/core/socialProviderTypes";
import { Post } from "src/core/domain/posts";

@injectable()
export class PostService implements IPostService {

}
