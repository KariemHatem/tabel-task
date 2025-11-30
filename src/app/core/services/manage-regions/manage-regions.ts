import { Injectable } from '@angular/core';
import { Region } from '../../../shared/interfaces/regions/region';

@Injectable({
  providedIn: 'root',
})
export class ManageRegions {
  regions: Region[] = [
    { title: 'Kariem' },
    { title: 'Ahmed' },
    { title: 'Mahmoud' },
    { title: 'Khaled' },
    { title: 'Mona' },
    { title: 'Ali' },
    { title: 'Samer' },
    { title: 'Nader' },
    { title: 'Raouf' },
    { title: 'Skoko' },
    { title: 'Youssef' },
    { title: 'Hassan' },
    { title: 'Omar' },
    { title: 'Salma' },
    { title: 'Amr' },
    { title: 'Sara' },
    { title: 'Maged' },
    { title: 'Rania' },
    { title: 'Tamer' },
    { title: 'Laila' },
    { title: 'Adham' },
    { title: 'Nada' },
    { title: 'Mohamed' },
    { title: 'Fatma' },
    { title: 'Ziad' },
    { title: 'Dina' },
    { title: 'Yassin' },
    { title: 'Nour' },
    { title: 'Heba' },
    { title: 'Maher' },
    { title: 'Ramy' },
    { title: 'Manal' },
    { title: 'Fady' },
    { title: 'Aya' },
    { title: 'Othman' },
    { title: 'Nadia' },
    { title: 'Karim' },
    { title: 'Salim' },
    { title: 'Hany' },
    { title: 'Farah' },
    { title: 'Amira' },
    { title: 'Sherif' },
    { title: 'Ramy' },
    { title: 'Dalia' },
    { title: 'Walid' },
    { title: 'Alaa' },
    { title: 'Mina' },
    { title: 'Yara' },
    { title: 'Hazem' },
    { title: 'Reem' },
  ];

  getAllRegions(): Region[] {
    return this.regions;
  }

  addRegion(region: Region) {
    this.regions.push(region);
  }

  deleteRegion(region: Region) {
    const index = this.regions.indexOf(region);
    if (index > -1) {
      this.regions.splice(index, 1);
    }
  }
}
