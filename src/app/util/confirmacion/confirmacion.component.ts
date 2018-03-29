import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiRequestService} from '../../servicios/api-request.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css'],
    styles: [`
    .dark-modal .modal-content  {
      background-color: #292b2c;
      color: red;
    }
    .dark-modal .close {
        color: white;
    }    
  `]
})
export class ConfirmacionComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, public api: ApiRequestService,
              public toastr: ToastrService, public modal: NgbModal) { }

    open(content) {
        this.modal.open(content, { windowClass: 'dark-modal' });
    }

  ngOnInit() {

  }

}
