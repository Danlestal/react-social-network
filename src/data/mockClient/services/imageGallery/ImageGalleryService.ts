import { injectable } from "inversify"
import { IImageGalleryService } from "src/core/services"
import { Image, FileGallery } from "src/core/domain/imageGallery"
import { FileResult } from "src/models/files";
import { Photo } from "src/core/domain/imageGallery/photo";
import { Post } from "src/core/domain/posts";
import { Map } from "immutable"


@injectable()
export class ImageGalleryService implements IImageGalleryService {
  setPhotoAlbum: (userId: string, 
                  folderName: string,
                  albumPost: Post,
                  imageIds: Photo[]) => Promise<{ newAlbum: Map<string, any>; imageIds: Map<string, boolean>; images: Map<string, any>; }>;
  getGallery: (userId: string, folderName: string) => Promise<Image[]>;
  saveFile: <T extends FileGallery>(userId: string, file: T, folderName: string) => Promise<string>;
  uploadFile: ( folderName: string,
                file: any, 
                fileName: string, 
                onProgress: (percentage: number, status: boolean, fileName: string) => void,
                onSuccess: (fileResult: FileResult) => void, onFailure: (error: any) => void) => void;
  saveImages: (userId: string, folderName: string, photos: Photo[]) => Promise<Photo[]>;

  fetchAlbumImages: (userId: string, albumId: string, limit: number, lastPhotoId?: string | undefined) => Promise<{ mappedImages: Map<string, any>; ids: Map<string, boolean>; newLastImageId: string; }>;
  downloadFile: (fileName: string, folderName: string) => Promise<string>;
  deleteFile: (userId: string, imageId: string, folderName: string) => Promise<void>;
  deleteImage: (folderName: string, fileName: string) => Promise<void>;


}
