import { Component, inject } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { ButtonDirective } from 'primeng/button';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TranslatePipe } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { title } from 'process';
import { Region } from '../../../interfaces/regions/region';

@Component({
  selector: 'app-form-dailog',
  imports: [InputText, ButtonDirective, TranslatePipe, FormsModule],
  templateUrl: './form-dailog.html',
  styleUrl: './form-dailog.css',
})
export class FormDailog {
  ref = inject(DynamicDialogRef);
  conf = inject(DynamicDialogConfig);

  titleEn: string = '';

  ngOnInit() {
    const region = this.conf.data?.region;
    if (region) {
      this.titleEn = region.title;
    }
  }

  submit() {
    const newRegion: Region = {
      title: this.titleEn,
    };
    this.ref.close({ newRegion, sucess: true });
    console.log(newRegion);
  }
  cancel() {
    this.ref.close({ sucess: false });
  }
}
