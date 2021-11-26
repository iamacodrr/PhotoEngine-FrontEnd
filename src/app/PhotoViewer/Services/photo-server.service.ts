import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PhotoServerService {
  constructor(private http: HttpClient){
  }

  PostFile(imageToUpload: File){
    const endpoint = 'https://localhost:44338/api/PhotoEditor/UploadPhotoToBlob';
    const formData: FormData = new FormData();
    formData.append('fileKey', imageToUpload, imageToUpload.name);
    return this.http.post(endpoint, formData);
  }
}
