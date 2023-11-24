import { Component, OnInit } from '@angular/core';
import { CertificateEntryListViewModel } from '../../models/certificate-list.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-certificate-entry',
  templateUrl: './certificate-entry.component.html',
  styleUrls: ['./certificate-entry.component.css']
})
export class CertificateEntryComponent implements OnInit {

  public src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
  // public src = 'https://webcert.siamyamato.com/webcert/ViewPDF.aspx?certNo=y6frUhKCC2N2ky7j5AGPeA%3d%3d'
  public today = (new Date()).toString();
  public certDate: string = (new Date()).toString();
  public list: CertificateEntryListViewModel[] = [{
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: 'Kg.',
    yield: '250',
    tensile: '56',
    remark: '',
  },
  {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    yield: '250',
    unit: 'Kg.',
    tensile: '56',
    remark: '',
  },
  {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: 'Kg.',
    yield: '250',
    tensile: '56',
    remark: '',
  }, {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    yield: '250',
    unit: 'Kg.',
    tensile: '56',
    remark: '',
  }];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onClickExit(): void {
    this.router.navigate(['certificate-list']);
  }

  public onClickSave(): void {
    this.router.navigate(['certificate-list']);
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

}
