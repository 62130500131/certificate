import { Component, Signal, TemplateRef, ViewChild, WritableSignal, computed, effect, signal } from '@angular/core';
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
  @ViewChild('selectTMTTemplate') selectTMTTemplate!: TemplateRef<any>;
  @ViewChild('addDetailTemplate') addDetailTemplate!: TemplateRef<any>;
  public isType3: boolean = false;
  public modalRef!: BsModalRef;
  public selected: DoShipmentDetail = new DoShipmentDetail();
  // public totalSelect: Signal<number> = computed(() =>
  //   this.calSelected(this.selectTMTDataSource().filter(x => {
  //     return x.isSelected()
  //   }).map(x => x.quantity))
  // );
  // 
  public canSelectTMT: Signal<boolean> = computed(() => {
    return this.totalSelectTMT() < this.selected.quantity
  })
  public canSelect: Signal<boolean> = computed(() => {
    return this.totalSelect() < this.selected.quantity
  })
  public totalSelectTMT: WritableSignal<number> = signal(0);
  public totalSelect: WritableSignal<number> = signal(0);
  public list: DoShipmentEntryViewModel[] = [
    {
      doNo: '210000001',
      dataSource: [
        {
          itemIndex: 1,
          materialCode: '2CTFB',
          materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
          sprayType: 'พ่น TMT',
          heatNo: 'DB1077',
          grade: 'SS400',
          quantity: 40,
          status: 'Select',
          weight : 2000,
          unit: 'PC'
        },
        {
          itemIndex: 2,
          materialCode: '1AK106-025-00062',
          materialDesc: 'เหล็กฉากSS400 25 x 25 x 3.00mm x 6.0M',
          sprayType: 'พ่น Heat',
          heatNo: 'DB1078',
          grade: 'SS400',
          quantity: 20,
          status: 'Select',
          weight : 1020,
          unit: 'PC'
        },
        {
          itemIndex: 3,
          materialCode: '1BP0200-045-1430',
          materialDesc: 'ท่อดำ 8" x 4.50mm x 6.0M',
          sprayType: 'พ่นรูปแบบที่ 3',
          heatNo: 'DB1079',
          grade: 'SS400',
          quantity: 40,
          status: 'Select',
          weight : 3500,
          unit: 'PC'
        },
        {
          itemIndex: 4,
          materialCode: '3UC00753223-0141',
          materialDesc: 'เหล็กตามแบบ 75x32x32x2.30mmx6.0M',
          sprayType: 'พ่นรูปแบบที่ 1',
          heatNo: 'DB1077',
          grade: 'SS400',
          quantity: 30,
          status: 'Select',
          weight : 2900,
          unit: 'PC'
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
          sprayType: 'พ่นรูปแบบที่ 2',
          heatNo: 'DB1077',
          grade: 'SS400',
          quantity: 22,
          status: 'Select',
          weight : 2000,
          unit: 'PC'
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
          sprayType: 'พ่นรูปแบบที่ 1',
          heatNo: 'DB1079',
          grade: 'SS400',
          quantity: 20,
          status: 'Select',
          weight : 2010,
          unit: 'PC'
        }
      ]
    },

  ]

  public selectTMTDataSource: SelectQuantity[] = [
    {
      isSelected: false,
      itemIndex: 1,
      material: '2CTFB',
      materialDesc: 'เหล็กดำ ตัดซอยตามขนาด',
      heatNo: 'DB1003',
      grade: 'SS400',
      yield: '290',
      tensile: '50',
      mill: 'SYS',
      remain: 20,
      quantity: 20,
      thickness: 0.1,
      width: 1.0
    },
    {
      isSelected: false,
      itemIndex: 2,
      material: '2CTFB',
      materialDesc: 'เหล็กดำ ตัดซอยตามขนาด',
      heatNo: 'DB1002',
      grade: 'SS400',
      yield: '290',
      tensile: '50',
      mill: 'SYS',
      remain: 20,
      quantity: 20,
      thickness: 0.1,
      width: 1.0
    },
    {
      isSelected: false,
      itemIndex: 3,
      material: '2CTFB',
      materialDesc: 'เหล็กดำ ตัดซอยตามขนาด',
      heatNo: 'DB1078',
      grade: 'SS400',
      yield: '290',
      tensile: '50',
      mill: 'SYS',
      remain: 20,
      quantity: 20,
      thickness: 0.1,
      width: 1.0
    }];

  public selectDataSource: SelectQuantity[] = [
    {
      isSelected: false,
      itemIndex: 1,
      material: '1AK106-025-00062',
      materialDesc: 'เหล็กฉากSS400 25 x 25 x 3.00mm x 6.0M',
      heatNo: 'DB1078',
      grade: 'SS400',
      yield: '290',
      tensile: '50',
      mill: 'SYS',
      remain: 20,
      quantity: 20,
      thickness: 0.1,
      width: 1.0
    },
    {
      isSelected: false,
      itemIndex: 2,
      material: '1AK106-025-00062',
      materialDesc: 'เหล็กฉากSS400 25 x 25 x 3.00mm x 6.0M',
      heatNo: 'DB1078',
      grade: 'SS400',
      yield: '290',
      tensile: '50',
      mill: 'SYS',
      remain: 20,
      quantity: 20,
      thickness: 0.1,
      width: 1.0
    },
    {
      isSelected: false,
      itemIndex: 3,
      material: '1AK106-025-00062',
      materialDesc: 'เหล็กฉากSS400 25 x 25 x 3.00mm x 6.0M',
      heatNo: 'DB1099',
      grade: 'SS400',
      yield: '290',
      tensile: '50',
      mill: 'SYS',
      remain: 20,
      quantity: 20,
      thickness: 0.1,
      width: 1.0
    }];

  constructor(private router: Router,
    private modalService: BsModalService) {
  }

  public onClickExit(): void {
    this.router.navigate(['mapping-certificate'])
  }

  public onClickEdit(cellData: DoShipmentDetail): void {
    this.selected = cellData;
    this.calTMTSelected();
    this.calSelected();
    const template = cellData.sprayType == 'พ่น TMT' ? this.selectTMTTemplate : this.selectTemplate
    this.modalRef = this.modalService.show(template, {
      class: 'modal-full'
    })
  }

  public calSelected(): void {
    let sum = 0;
    this.selectDataSource.filter(x => {
      return x.isSelected
    }).map(x => x.quantity).forEach((x: number) => {
      sum += x;
    })
    this.totalSelect.set(sum);
  }

  public calTMTSelected(): void {
    let sum = 0;
    this.selectTMTDataSource.filter(x => {
      return x.isSelected
    }).map(x => x.quantity).forEach((x: number) => {
      sum += x;
    })
    this.totalSelectTMT.set(sum);
  }
  public onClickSelect(cellData: DoShipmentDetail): void {
    this.selected = cellData;
    this.selectDataSource.forEach(x => {
      x.isSelected = false
      x.material = cellData.materialCode
      x.materialDesc = cellData.materialDesc
      x.quantity = cellData.quantity / 2
      x.heatNo = cellData.heatNo
    }
    )
    this.selectTMTDataSource.forEach(x => {
      x.isSelected = false
      x.material = cellData.materialCode
      x.materialDesc = cellData.materialDesc
      x.quantity = cellData.quantity / 2
      x.heatNo = cellData.heatNo
    }
    )
    this.calTMTSelected();
    this.calSelected();
    const template = cellData.sprayType == 'พ่น TMT' ? this.selectTMTTemplate : this.selectTemplate
    this.modalRef = this.modalService.show(template, {
      class: 'modal-full'
    })
  }

  public onClickConfirmSelect(isTMT: boolean): void {
    const canSelect = this.selected.quantity;
    const selected = isTMT ? this.totalSelectTMT() : this.totalSelect();

    if (canSelect == selected) {
      this.list[0].dataSource.forEach(x => {
        if (x.materialCode == this.selected.materialCode) {
          x.status = 'Edit'
        }
      });
    } else if (selected == 0) {
      this.list[0].dataSource.forEach(x => {
        if (x.materialCode == this.selected.materialCode) {
          x.status = 'Select'
        }
      });
    } else {
      return
    }


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

  public onCheckBoxChange(event: any, cellData: SelectQuantity) {
    cellData.isSelected = !cellData.isSelected;
    this.calTMTSelected();
    this.calSelected();
  }

  public onClickSentLink(): void {
    alert('Sent link success!')
  }
}
