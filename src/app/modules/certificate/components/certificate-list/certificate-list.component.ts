import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CertificateListViewModel, SearchParamCertificateList } from '../../models/certificate-list.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CertificateService } from '../../services/certificate.service';
import { catchError, finalize, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent {
  @ViewChild('importTemplate') importTemplate!: TemplateRef<any>;
  public param: SearchParamCertificateList = new SearchParamCertificateList();
  public modalRef!: BsModalRef;
  public fileToUpload: any;
  public millForUpload: string = '';
  public materialDataSource: any[] = [];
  public gradeDataSource = [
    {
      text: 'SS400',
      value: 'SS400'
    },
    {
      text: 'SS490',
      value: 'SS490'
    },
    {
      text: 'SM490YA',
      value: 'SM490YA'
    },
    {
      text: 'SM490A',
      value: 'SM490A'
    },
    {
      text: 'SM400',
      value: 'SM400'
    },
    {
      text: 'S275JR',
      value: 'S275JR'
    },
    {
      text: 'S335JR',
      value: 'S335JR'
    },
    {
      text: 'HR-1',
      value: 'HR-1'
    },
    {
      text: 'SPHC',
      value: 'SPHC'
    },
    {
      text: 'A36',
      value: 'A36'
    },
    {
      text: 'A516',
      value: 'A516'
    },
  ];
  public millDataSource = [
    {
      text: 'SSI',
      value: 'SSI'
    },
    {
      text: 'GJ',
      value: 'GJ'
    },
    {
      text: 'GJS',
      value: 'GJS'
    },
    {
      text: 'SYS',
      value: 'SYS'
    },


  ];
  public list: CertificateListViewModel[] = [];

  public dateDataSource: any[] = [
    {
      text: 'ภายใน 90 วัน',
      value: 90
    },
    {
      text: 'ภายใน 60 วัน',
      value: 60
    },
    {
      text: 'ภายใน 30 วัน',
      value: 30
    },
    {
      text: 'ภายใน 7 วัน',
      value: 7
    },
    {
      text: 'ระบุเอง',
      value: 0
    }
  ]

  constructor(private modalService: BsModalService,
    private router: Router,
    private service: CertificateService) {
      this.service.getMaterialDataSource().subscribe(res => {
        this.materialDataSource = res
      })

      this.service.initialCertificateList().subscribe(res => {
        this.list = res
      })
  }

  public handleFileInput($event: any): void {
    this.fileToUpload = $event?.target?.files[0];
  }

  public onClickSearch(): void {
  }

  public onClickClear(): void {
    this.param = new SearchParamCertificateList();
  }

  public onClickCertNo(cellData: any): void {
    let guid = !!cellData.guid ? cellData.guid : "0"
    this.router.navigate(["certificate-edit/"+cellData.certNo+"/"+guid])
  }

  public onClickUpload(): void {
    this.millForUpload = '';
    
    this.modalRef = this.modalService.show(this.importTemplate, {
      class: 'modal-lg'
    })
  }

  public onClickDelete(): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success"
        });
      }
    });
  }


  public onClickConfirmUpload(): void {
    this.service.uploadCertificate(this.fileToUpload, this.millForUpload)
    .pipe(catchError((httpErrorResponse: HttpErrorResponse) => {
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
        title: "Please upload corrected format file"
      });
      return throwError(httpErrorResponse);
    }))
    .subscribe(res => {
      this.router.navigate([`certificate-entry/${res}`]);
      this.modalRef.hide()
    });
  }

  public onUploadDateRangeChanged($event: any): void {
    const{startDate,endDate} = $event.value;
    this.param.uploadFrom = startDate;
    this.param.uploadTo = endDate;
  }

  public onCertDateRangeChanged($event: any): void {
    const{startDate,endDate} = $event.value;
    this.param.certFrom = startDate;
    this.param.certTo = endDate;
  }

}
