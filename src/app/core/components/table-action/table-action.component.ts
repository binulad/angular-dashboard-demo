import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.scss'],
})
export class TableActionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('tableRef') public tableRef: ElementRef;

  contentWrapper: any = document.querySelector('#tableActionContentWrapper');

  constructor(private ElRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.contentWrapper.append(this.ElRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.ElRef.nativeElement.remove();
  }
}
