import { injectable } from "inversify"
import { IStorageService } from "src/core/services"
import { FileResult } from "src/models/files/fileResult"

@injectable()
export class StorageService implements IStorageService {
  uploadFile: (folderName: string, 
                file: any, 
                fileName: string,
                onProgress: (percentage: number, status: boolean, fileName: string) => void, 
                onSuccess: (fileResult: FileResult, meta?: any) => void, 
                onFailure: (error: any) => void) => void;  
  
  deleteFile: (folderName: string, fileName: string) => Promise<void>;
}
