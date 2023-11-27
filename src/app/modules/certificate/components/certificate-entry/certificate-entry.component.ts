import { Component, OnInit } from '@angular/core';
import { CertificateEntryListViewModel } from '../../models/certificate-list.model';
import { Router } from '@angular/router';
import { CertificateService } from '../../services/certificate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-certificate-entry',
  templateUrl: './certificate-entry.component.html',
  styleUrls: ['./certificate-entry.component.css']
})
export class CertificateEntryComponent implements OnInit {

  public src = '/assets/pdfs/20.pdf'
  // public src = 'https://webcert.siamyamato.com/webcert/ViewPDF.aspx?certNo=y6frUhKCC2N2ky7j5AGPeA%3d%3d'
  public materialDataSource: any[] = []
  public today = (new Date()).toString();
  public isEdit: boolean = false;
  public certNo: any = "";
  public certDate: string = (new Date()).toString();
  public list: CertificateEntryListViewModel[] = [];
  constructor(private router: Router,
    private service: CertificateService) {
    this.isEdit = router.url.includes('certificate-edit');
    if (this.isEdit) {
      const split = router.url.split("/");
      this.certNo = split[split.length - 1]
    }
  }

  ngOnInit() {
    this.service.initial().subscribe(res => {
      this.list = res
    })

    this.service.getMaterialDataSource().subscribe(res => {
      this.materialDataSource = res
    })
  }


  public onClickExit(): void {
    this.router.navigate(['certificate-list']);
  }

  public onClickSave(): void {
    this.service.saveCertificate(this.list).subscribe()
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
