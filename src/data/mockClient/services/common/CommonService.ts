import { ICommonService } from "src/core/services";
import { injectable, inject } from "inversify";
import { SocialProviderTypes } from "src/core/socialProviderTypes";
import { IHttpService } from "src/core/services/webAPI/IHttpService";
import { Feed } from "src/core/domain/common/feed";

@injectable()
export class CommonService implements ICommonService {

  @inject(SocialProviderTypes.Httpervice) private _httpService: IHttpService
  constructor() {
  }

  getTwitterMedia: (accessToken: string) => Promise<import("immutable").Map<string, any>>;
  addFeed: (feed: Feed) => Promise<string>;
}
