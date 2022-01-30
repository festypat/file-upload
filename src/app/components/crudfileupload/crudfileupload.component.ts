import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { FileuploadserviceService } from 'src/app/services/fileuploadservice.service';

@Component({
  selector: 'app-crudfileupload',
  templateUrl: './crudfileupload.component.html',
  styleUrls: ['./crudfileupload.component.scss']
})
export class CrudfileuploadComponent implements OnInit {
  @ViewChild('resumeInput', {  
    static: true  
}) resumeInput;  
@ViewChild('logoInput', {  
    static: true  
}) logoInput;  
  selectedFile: File = null;  
  imageUrl: string;  
  fileToUpload: File = null;  
  saveFileForm: any;  
  lstFileDetails: any;
  myusername: string = "";
  fileInfos?: Observable<any>;
  dataDisplay: any;
  dt: any;
  public load = false;
  constructor(private service: FileuploadserviceService, 
    private formBuilder: FormBuilder, private SpinnerService: NgxSpinnerService) {}  
    ngOnInit(): void {  
        
        this.saveFileForm = this.formBuilder.group({  
          filename: '',
            UserName: ['', [Validators.required]]  
        });  
        this.service.getFiles().subscribe(Response => {
          this.load = true;
                // If Response comes function
                // hideloader() is called
                if (Response) {
                  
                }
                console.log(Response)
                this.dt = Response;
                this.lstFileDetails = Response;  
                this.load = false;
        })  
    }  
     
    onSelectFile(file: FileList) {  
        this.fileToUpload = file.item(0);  
        var reader = new FileReader();  
        reader.onload = (event: any) => {  
            this.imageUrl = event.target.result;  
        }  
        reader.readAsDataURL(this.fileToUpload);  
    }  

    onExpSubmit() {  
        debugger;  
       
        let formData = new FormData();  
        formData.append('excelDocument', this.logoInput.nativeElement.files[0]);     
        this.service.UploadDocument(formData).subscribe(result => {});  
    }   
       
  }

  

