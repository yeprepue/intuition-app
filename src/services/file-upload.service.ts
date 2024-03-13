import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  async uploadImage(archivo: File, userId: number): Promise<boolean> {
    try {
      const url = `${base_url}/user/${userId}/image`;
      const formData = new FormData();


      formData.append('imagen', archivo);

      const resp = await fetch(url, {
        method: 'POST',
        body: formData
      });
      const data = await resp.json();

      console.log(  data)

      if (resp.ok) {
        return true;
      } else {
        throw new Error('Error al subir la imagen');
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
