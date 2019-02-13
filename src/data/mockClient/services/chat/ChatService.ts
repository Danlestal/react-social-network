import { IChatService } from "src/core/services/chat/IChatService";
import { injectable } from "inversify";
import { ChatRoom } from "src/core/domain/chat/chatRoom";
import { Map } from "immutable"
import { Message } from "src/core/domain/chat/message"


@injectable()
export class ChatService implements IChatService {
  createChatRoom: (chatRoom: ChatRoom) => Promise<Map<string, any>>;  
  getPeerChatRoom: (firstUserId: string, secondUserId: string) => Promise<Map<string, any>>;
  createChatMessage: (message: Message) => Promise<Map<string, any>>;
  setChatLangauge: (uid: string, input: string, output: string, roomId: string) => Promise<void>;
  subscribeChatMessages: (chatRoomId: string, callback: (messages:Map<string, any>) => void) => any;
  getChatMessages: (chatRoomId: string) => Promise<Map<string, any>>;
  removeHistoryRoom: (chatRoomId: string) => any;
}