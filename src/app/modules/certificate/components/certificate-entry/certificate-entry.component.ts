import { Component, OnInit } from '@angular/core';
import { CertificateEntryListViewModel, ReadResult } from '../../models/certificate-list.model';
import { Router } from '@angular/router';
import { CertificateService } from '../../services/certificate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-certificate-entry',
  templateUrl: './certificate-entry.component.html',
  styleUrls: ['./certificate-entry.component.css']
})
export class CertificateEntryComponent implements OnInit {

  public certificateResultInfo = new ReadResult();
  public isFound:boolean = false;
  public src = '/assets/pdfs/20.pdf'
  // public src = 'https://webcert.siamyamato.com/webcert/ViewPDF.aspx?certNo=y6frUhKCC2N2ky7j5AGPeA%3d%3d'
  public materialDataSource: any[] = []
  public today = (new Date()).toString();
  public isEdit: boolean = false;
  public certType:string = "";
  public certNo: any = "";
  public certDate: string = (new Date()).toString();
  public list: CertificateEntryListViewModel[] = [];
  constructor(private router: Router,
    private service: CertificateService) {
    this.service.initial().subscribe(res => {
      this.list = res
    })

    this.service.getMaterialDataSource().subscribe(res => {
      this.materialDataSource = res
    })
    this.isEdit = router.url.includes('certificate-edit');
    if (this.isEdit) {
      const split = router.url.split("/");
      this.certNo = split[split.length - 2]
      let guid = split[split.length - 1]
      if(guid != "0"){
        this.service.getCertificateInfo(guid).subscribe(res => {
          console.log(res)
          this.src = `https://localhost:7130/api/Pdf/File/${res.file?.fileName}`
          this.certificateResultInfo = res;
          if(!!res.guid){
            this.certNo = res.certificateNo;
            this.certDate = res.certificateDate ?? "";
            this.certType = res.certificateType;
            this.isFound = true;
          }
        })
      }
    } else {
      const split = router.url.split("/");
      let guid = split[split.length - 1];
      this.service.getCertificateInfo(guid).subscribe(res => {
        this.src = `https://localhost:7130/api/Pdf/File/${res.file?.fileName}`
        this.certificateResultInfo = res;
        this.certNo = res.certificateNo;
        this.certDate = res.certificateDate ?? "";
        this.certType = res.certificateType;
        this.isFound = true;
      })
    }
  }

  ngOnInit() {

  }


  public onClickExit(): void {
    this.router.navigate(['certificate-list']);
  }

  public onClickSave(): void {
    let isErrorGrade = this.certificateResultInfo.results.some(x => {
      return !x.grade 
    })
    let isErrorMaterial = this.certificateResultInfo.results.some(x => {
      return !x.tmtMaterial 
    })
    let errMessageMaterial = isErrorMaterial ? "Please Select Material \n" : ""
    let errMessageGrade = isErrorGrade ? "Please Enter Grade \n" : ""
    let errMessageMain = !this.certNo ? "Please Enter Certificate No. \n" : ""
    if(!this.certNo || isErrorGrade || isErrorMaterial){
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      
      
      Toast.fire({
        icon: "warning",
        title: errMessageMain+errMessageMaterial+errMessageGrade
      });
      return
    }
    if(this.isFound){
      this.certificateResultInfo.certificateNo = this.certNo;
      this.certificateResultInfo.certificateDate = this.certDate;
      this.service.saveCertificateWithPdf(this.certificateResultInfo,this.isEdit).subscribe()
    }else{
      this.service.saveCertificate(this.list).subscribe()
    }
    this.router.navigate(['certificate-list']);
  }

  public onClickDelete(item: any): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      heightAuto: false,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          heightAuto: false,
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success"
        });
      }
    });
  }

}
