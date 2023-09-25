import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  public showSuccess(message: string = ''): void{    
 
    if (message == '') {
      message = "Record added"
    }

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 3500
    })
  }

  public showInfo(message: string = ''): void {

    if (message == '') {
      message= "Record updated"
    }
    
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: message,
      showConfirmButton: false,
      timer: 3500
    })
  }

  public showError(message: string = ''): void{

    if (message == '') {
      message= "Record deleted"
    }

    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Error',
      html: message,
      showConfirmButton: false,
      timer: 3500
    })
  }
}
