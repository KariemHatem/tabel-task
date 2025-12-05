import { Component, inject } from '@angular/core';
import { PostItems } from '../../../../../core/services/post-items/post-items';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { HelpButton } from '../../../../../shared/components/need-help/need-help-button/help-button/help-button';

@Component({
  selector: 'app-addtimeline-post',
  standalone: true,
  imports: [FormsModule, TranslatePipe, HelpButton],
  templateUrl: './addtimeline-post.html',
  styleUrl: './addtimeline-post.css',
})
export class AddtimelinePost {
  // Help Videos
  videos = [
    {
      title: 'How to disable 2FA',
      videoUrl: 'assets/videos/How to disable 2FA.webm',
    },
    {
      title: 'How to prevent duplicates in the leades',
      videoUrl: 'assets/videos/How to prevent duplicates in the leads.webm',
    },
  ];
  //hold text value
  text = '';
  // hold filess
  files: string[] = [];

  private postItems = inject(PostItems);

  // Hadling file formate
  onFielSelected(event: any) {
    const selected = event.target.files;

    Array.from(selected).forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = () => this.files.push(reader.result as string);
      reader.readAsDataURL(file);
    });
  }

  // publish post method
  publish() {
    if (!this.text.trim() && this.files.length === 0) return;

    this.postItems.addPost({
      text: this.text,
      files: this.files,
      date: new Date(),
    });

    this.text = '';
    this.files = [];
  }
}
