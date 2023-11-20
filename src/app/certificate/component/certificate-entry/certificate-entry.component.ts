import { Component, OnInit } from '@angular/core';
import { certificateEntryListViewModel } from '../../models/certificate-list.model';

@Component({
  selector: 'app-certificate-entry',
  templateUrl: './certificate-entry.component.html',
  styleUrls: ['./certificate-entry.component.css']
})
export class CertificateEntryComponent implements OnInit {

  // public today = new Date();
  public today = '20-Nov-2023';
  public list: certificateEntryListViewModel[] = [{
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: '',
    remark: '',
  },
  {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: '',
    remark: '',
  },
  {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: '',
    remark: '',
  }, {
    millDesc: 'H 148x100x6x12.00M',
    tmtMaterial: '',
    tmtDesc: '',
    grade: 'SS400',
    heatNo: 'DB1077',
    quantity: 20,
    unit: '',
    remark: '',
  }];
  constructor() { }

  ngOnInit() {
  }

}
