import { Component, OnInit } from '@angular/core';
import { PhotoServerService } from "../Services/photo-server.service";

@Component({
  selector: 'app-photo-dash',
  templateUrl: './photo-dash.component.html',
  styleUrls: ['./photo-dash.component.scss']
})
export class PhotoDashComponent implements OnInit {

  fileToUpload: File | null = null;

  constructor(private photoSvc: PhotoServerService) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList){
    this.fileToUpload = files.item(0);
    this.photoSvc.PostFile(this.fileToUpload).subscribe(res=>{console.log(res)});
  }


}
