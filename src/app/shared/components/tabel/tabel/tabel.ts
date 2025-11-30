import { ManageRegions } from './../../../../core/services/manage-regions/manage-regions';
import { Component, inject } from '@angular/core';
import { Region } from './../../../interfaces/regions/region';
import { TranslatePipe } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormDailog } from '../../dialog/form-dailog/form-dailog';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
@Component({
  selector: 'app-tabel',
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    SelectModule,
    FormsModule,
    DynamicDialogModule,
    TranslatePipe,
    ConfirmDialog,
  ],
  templateUrl: './tabel.html',
  styleUrl: './tabel.css',
  providers: [DialogService, ConfirmationService],
})
export class Tabel {
  // Reference to open dynamic dialog
  ref!: DynamicDialogRef;
  // Dialog Service
  private dialodService = inject(DialogService);
  // Manage Regions service
  private manageRegions = inject(ManageRegions);

  // Confirmation Service
  private confirmationService = inject(ConfirmationService);

  // Regions Tabel Setup
  regions: Region[] = [];
  entries: number[] = [2, 3, 5, 7, 10];
  selectedEntry: number = 3;
  currentPage: number = 1;

  // Open Dialog Function
  openDialog() {
    this.ref = this.dialodService.open(FormDailog, {
      width: '60vw',
      height: '100vh',
      modal: true,
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      position: 'right',
      style: { 'max-height': '100%' },
    }) as DynamicDialogRef<FormDailog>;
    this.ref.onClose.subscribe((res) => {
      if (res?.sucess) {
        this.manageRegions.addRegion(res.newRegion);
        this.regions = this.manageRegions.getAllRegions();
        console.log(this.regions);
      }
    });
  }

  //  Confirm Delete
  confirmDelete(region: Region) {
    this.confirmationService.confirm({
      message: 'Are you sure to delete this item',
      header: 'Delete Confirmation',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Back',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },
      accept: () => {
        this.manageRegions.deleteRegion(region);
        this.regions = this.manageRegions.getAllRegions();

        console.log('Item deleted');
      },
      reject: () => {
        console.log('Delete canceled');
      },
    });
  }

  ngOnInit() {
    this.regions = this.manageRegions.getAllRegions();
  }

  // Tabel Pagination
  get pagedRegions() {
    const start = (this.currentPage - 1) * this.selectedEntry;
    return this.regions.slice(start, start + this.selectedEntry);
  }

  //Handles changes in the number of rows per page
  onEntriesChanges() {
    this.currentPage = 1;
    this.pagedRegions;
  }

  // Handel Next Button
  nextPage() {
    const totalPage = Math.ceil(this.regions.length / this.selectedEntry);
    if (this.currentPage < totalPage) {
      this.currentPage++;
    }
  }

  // Handel Preevious Button
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
