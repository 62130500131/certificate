import { Component, OnInit, Signal, TemplateRef, ViewChild, WritableSignal, computed, effect, signal } from '@angular/core';
import { DoShipmentDetail, DoShipmentEntryViewModel, SaveMapCertificateParam, SelectQuantity, ShipmentInfoViewModel } from '../../models/do.model';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { MapCertificateService } from '../../services/map-certificate.sevice';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'do-shipment-entry',
  templateUrl: './do-shipment-entry.component.html',
  styleUrls: ['./do-shipment-entry.component.css']
})
export class DoShipmentEntryComponent implements OnInit {
  @ViewChild('selectTemplate') selectTemplate!: TemplateRef<any>;
  @ViewChild('selectTMTTemplate') selectTMTTemplate!: TemplateRef<any>;
  @ViewChild('addDetailTemplate') addDetailTemplate!: TemplateRef<any>;
  public canSent: boolean = false;
  public isStamp: boolean = true;
  public isType3: boolean = false;
  public selectStemp: string = 'isStamp';
  public fileToUploads: any[] = [];
  public modalRef!: BsModalRef;
  public selected: DoShipmentDetail = new DoShipmentDetail();
  public shipmentInfo: ShipmentInfoViewModel = new ShipmentInfoViewModel();
  public canSelectTMT: Signal<boolean> = computed(() => {
    return this.totalSelectTMT() < this.selected.quantity
  })
  public canSelect: Signal<boolean> = computed(() => {
    return this.totalSelect() < this.selected.quantity
  })
  public totalSelectTMT: WritableSignal<number> = signal(0);
  public totalSelect: WritableSignal<number> = signal(0);
  public list: DoShipmentEntryViewModel[] = []

  public selectTMTDataSource: SelectQuantity[] = [];

  public selectDataSource: SelectQuantity[] = [];
  public shipmentNo!: string;
  public shiptoCode!: string;
  constructor(private router: Router,
    private modalService: BsModalService,
    private service: MapCertificateService,
    private sharedService: SharedService) {
    const split = this.router.url.split('/');
    this.shipmentNo = split[split.length - 2];
    this.shiptoCode = split[split.length - 1];
  }

  public ngOnInit(): void {

    this.sharedService.showLoading()
    this.service.initial().subscribe(res => {
      this.list = res
      this.checkCanSentLink();
      this.sharedService.hideLoading()
    })

    this.service.getShipmentInfo({
      shipmentNo: this.shipmentNo,
      shiptoCode: this.shiptoCode
    })
      .subscribe(res => {
        this.shipmentInfo = res
        this.checkCanSentLink();
      })

  }

  public handleFileInput($event: any): void {
    this.fileToUploads.push({ file:$event?.target?.files[0].name, uploadTime: new Date()});
  }

  public onClickExit(): void {
    this.router.navigate(['mapping-certificate'])
  }

  public onClickEdit(cellData: DoShipmentDetail): void {
    this.selected = cellData;
    this.service.getCertificationList(cellData, false).subscribe(res => {
      this.selectDataSource = res;
      this.selectTMTDataSource = res;
    })
    this.calTMTSelected();
    this.calSelected();
    const template = cellData.sprayType == 'พ่น TMT' ? this.selectTMTTemplate : this.selectTemplate
    this.modalRef = this.modalService.show(template, {
      class: 'modal-full'
    })
  }

  public calSelected(): void {
    let sum = this.selectDataSource
      .filter(p => p.isSelected === true)
      .map(p => p.quantity ?? 0)
      .reduce((acc, one) => acc + one, 0)
    if (sum > this.selected.quantity) {
      sum = this.selected.quantity
    }
    this.totalSelect.set(sum);
  }

  public calTMTSelected(): void {
    let sum = this.selectTMTDataSource
      .filter(p => p.isSelected === true)
      .map(p => p.quantity ?? 0)
      .reduce((acc, one) => acc + one, 0)
    if (sum > this.selected.quantity) {
      sum = this.selected.quantity
    }
    this.totalSelectTMT.set(sum);
  }

  public onClickSelect(cellData: DoShipmentDetail): void {
    this.selected = cellData;
    this.service.getCertificationList(cellData, true).subscribe(res => {
      this.selectDataSource = res;
      this.selectTMTDataSource = res;
    })
    this.calTMTSelected();
    this.calSelected();
    const template = cellData.sprayType == 'พ่น TMT' ? this.selectTMTTemplate : this.selectTemplate
    this.modalRef = this.modalService.show(template, {
      class: 'modal-full'
    })
  }

  public checkCanSentLink() {
    let haveSelect = false;
    this.list.forEach(x => {
      x.dataSource.forEach(x=> {
        if(x.status == 'Select'){
          haveSelect = true
        }
      })
    })
    this.canSent = !haveSelect
  }

  public onClickConfirmSelect(isTMT: boolean): void {
    const canSelect = this.selected.quantity;
    const selected = isTMT ? this.totalSelectTMT() : this.totalSelect();

    if (canSelect == selected) {
      this.list[0].dataSource.forEach(x => {
        if (x.materialCode == this.selected.materialCode) {
          x.status = 'Edit'
          this.checkCanSentLink()
        }
      });
    } else if (selected == 0) {
      this.list[0].dataSource.forEach(x => {
        if (x.materialCode == this.selected.materialCode) {
          x.status = 'Select'
          this.checkCanSentLink()
        }
      });
    } else {
      return
    }


    this.modalRef.hide();
    // Swal.fire({
    //   position: "top",
    //   icon: "success",
    //   title: "Select Certificate Success!",
    //   showConfirmButton: false,
    //   timer: 1500
    // });

  }

  public onClickAddDetail(cellData: DoShipmentDetail): void {
    this.isType3 = false;
    if (cellData.materialCode.substring(0, 1) == '3') {
      this.isType3 = true;
    }
    this.modalRef = this.modalService.show(this.addDetailTemplate, {
      class: 'modal-xl'
    })
  }
  public onClickConfirmAddDetail(): void {
    this.modalRef.hide();
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Add Detail Success!",
      showConfirmButton: false,
      timer: 1500
    });
  }

  public onCheckBoxChange(event: any, cellData: SelectQuantity) {
    cellData.isSelected = !cellData.isSelected;
    this.calTMTSelected();
    this.calSelected();
  }

  public onClickSentLink(): void {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Sent Link Success!",
      showConfirmButton: false,
      timer: 1500
    });
    const param = new SaveMapCertificateParam()
    param.shipmentNo = this.shipmentNo;
    param.shiptoCode = this.shiptoCode;
    this.service.sentLinkCertificate(param).subscribe()
    this.router.navigate(['mapping-certificate'])
  }

  public onClickSave(): void {
    const param = new SaveMapCertificateParam()
    param.shipmentNo = this.shipmentNo;
    param.shiptoCode = this.shiptoCode;
    this.service.saveMapCertificate(param).subscribe()
    this.router.navigate(['mapping-certificate'])
  }


  public upload(fileInput: any): void {
    fileInput?.click()
  }

}
