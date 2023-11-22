import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { CertificateData } from '../../models/qa-status.model';

@Component({
  selector: 'nac-certificate-entry',
  templateUrl: './nac-certificate-entry.component.html',
  styleUrls: ['./nac-certificate-entry.component.css']
})
export class NacCertificateEntryComponent implements OnInit {

  public today = '20-Nov-2023';

  public dataSourceCeritificate: CertificateData[] = [
    {
      dimention: "เหล็กฉากขาเท่ากัน 40x40x3.20 x6000mm",
      c: 0.107,
      si: 0.0097,
      mn: 0.484,
      p: 0.0126,
      s: 0.0076,
      ys: 319,
      ts: 440,
      elongation: 36,
      hardness: "-",
      bendTest: "-",
      compression: "-",
      impactEnergy: 0,
    }
  ];

  constructor(private router: Router,
    private pdfService: NgxExtendedPdfViewerService) { }

  ngOnInit() {
  }

  public onClickCancel(): void {
    this.router.navigate(['quality-assurance-status']);
  }

  public onClickConfrim(): void {
    this.router.navigate(['quality-assurance-status']);
  }

}


