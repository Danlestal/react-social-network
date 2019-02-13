import { injectable } from "inversify";
import { IAuthorizeService } from "src/core/services";
import { LoginUser } from "src/core/domain/authorize/loginUser";
import { UserClaim } from "src/core/domain/authorize/userClaim";
import { UserRegisterModel } from "src/models/users";
import { RegisterUserResult } from "src/core/domain/authorize/registerUserResult";
import { OAuthType } from "src/core/domain/authorize/oauthType";


@injectable()
export class AuthorizeService implements IAuthorizeService {
  login: (email: string, password: string) => Promise<LoginUser>;  logout: () => Promise<void>;
  isUserUserVerified: () => boolean;
  getUserClaim: () => Promise<UserClaim>;
  updatePassword: (newPassword: string, confirmPassword: string) => Promise<void>;
  getUserRegisterToken: (user: UserRegisterModel) => Promise<string>;
  registerUser: (user: UserRegisterModel) => Promise<RegisterUserResult>;
  onAuthStateChanged: (callBack: (user: UserClaim) => void) => any;
  resetPassword: (email: string) => Promise<void>;
  sendEmailVerification: (value: any) => Promise<string>;
  loginWithOAuth: (type: OAuthType) => Promise<LoginUser>;
  sendSmsVerification: (phoneNumber: string, value: any) => Promise<string>;
  sendResetPasswordVerification: (email: string, value: any) => Promise<string>;
  confirmVerificationPhone: (code: string, verifyId: string, phoneNumber: string) => Promise<any>;
  confirmVerificationEmail: (code: string, verifyId: string) => Promise<any>;
  confirmResetPassword: (code: string, verifyId: string, email: string) => Promise<any>;
}
