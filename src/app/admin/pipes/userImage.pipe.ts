import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/auth/interfaces/users.interfaces';

@Pipe({
  name: 'userImage',
})
export class UserImagePipe implements PipeTransform {
  transform(user: User): string {
    if (!user.id && !user.alt_img) {
      return 'assets/no-image.png';
    }
    return user.alt_img ? user.alt_img : user.image;
  }
}
