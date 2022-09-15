import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() isOpen: boolean;

  @Output() closeModal: EventEmitter<void>;

  constructor() {
    this.isOpen = false;
    this.closeModal = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
