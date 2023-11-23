import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DoShipmentDetail, DoShipmentEntryViewModel, SelectQuantity } from '../../models/do.model';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'do-shipment-entry',
  templateUrl: './do-shipment-entry.component.html',
  styleUrls: ['./do-shipment-entry.component.css']
})
export class DoShipmentEntryComponent {
  @ViewChild('selectTemplate') selectTemplate!: TemplateRef<any>;
  @ViewChild('addDetailTemplate') addDetailTemplate!: TemplateRef<any>;
  public isType3: boolean = false;
  public modalRef!: BsModalRef;
  public list: DoShipmentEntryViewModel[] = [
    {
      doNo: '210000001',
      dataSource: [
        {
          itemIndex: 1,
          materialCode: '2CTFB',
          materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
          heatNo: 'DB1077',
          quantity: 40,
          status: 'Select'
        },
        {
          itemIndex: 2,
          materialCode: '1AK106-025-00062',
          materialDesc: 'เหล็กฉากSS400 25 x 25 x 3.00mm x 6.0M',
          heatNo: 'DB1078',
          quantity: 20,
          status: 'Edit'
        },
        {
          itemIndex: 3,
          materialCode: '1BP0200-045-1430',
          materialDesc: 'ท่อดำ 8" x 4.50mm x 6.0M',
          heatNo: 'DB1079',
          quantity: 40,
          status: 'Select'
        },
        {
          itemIndex: 4,
          materialCode: '3UC00753223-0141',
          materialDesc: 'เหล็กตามแบบ 75x32x32x2.30mmx6.0M',
          heatNo: 'DB1077',
          quantity: 30,
          status: 'Select'
        }
      ]
    },
    {
      doNo: '210000002',
      dataSource: [
        {
          itemIndex: 1,
          materialCode: '1AK106-030-00081',
          materialDesc: 'เหล็กฉากSS400 30 x 30 x 3.00mm x 6.0M',
          heatNo: 'DB1077',
          quantity: 22,
          status: 'Select'
        }
      ]
    },
    {
      doNo: '210000003',
      dataSource: [
        {
          itemIndex: 1,
          materialCode: '2CTFB',
          materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
          heatNo: 'DB1079',
          quantity: 20,
          status: 'Select'
        }
      ]
    },

  ]

  public editDataSource: SelectQuantity[] = [

  ]

  public selectDataSource: SelectQuantity[] = [
    {
      isSelected: false,
      itemIndex: 1,
      material: '2CTFB',
      materialDesc: 'เหล็กดำ ตัดซอยตามขนาด',
      heatNo: 'DB1077',
      grade: 'SS400',
      yield: '290',
      tensile: '50',
      mill: 'SYS',
      remain: 20,
      quantity: 20
    },
    {
      isSelected: false,
      itemIndex: 2,
      material: '2CTFB',
      materialDesc: 'เหล็กดำ ตัดซอยตามขนาด',
      heatNo: 'DB1077',
      grade: 'SS400',
      yield: '290',
      tensile: '50',
      mill: 'SYS',
      remain: 20,
      quantity: 20
    },
    {
      isSelected: false,
      itemIndex: 3,
      material: '2CTFB',
      materialDesc: 'เหล็กดำ ตัดซอยตามขนาด',
      heatNo: 'DB1099',
      grade: 'SS400',
      yield: '290',
      tensile: '50',
      mill: 'SYS',
      remain: 20,
      quantity: 20
    }];

  constructor(private router: Router,
    private modalService: BsModalService) {

  }

  public onClickExit(): void {
    this.router.navigate(['do-page'])
  }

  public onClickEdit(): void {
    this.modalRef = this.modalService.show(this.selectTemplate, {
      class: 'modal-full'
    })
  }
  
  public onClickSelect(): void {
    this.selectDataSource.forEach(x => x.isSelected = false)
    this.modalRef = this.modalService.show(this.selectTemplate, {
      class: 'modal-full'
    })
  }

  public onClickConfirmSelect(): void {
    this.list[0].dataSource[0].status = 'Edit';
    this.modalRef.hide();
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
  }

  public onCheckBoxChange(event: any, cellData: any) {
    cellData.isSelected = !cellData.isSelected;
  }

  public onClickSentLink(): void {
    alert('Sent link success!')
  }
}
