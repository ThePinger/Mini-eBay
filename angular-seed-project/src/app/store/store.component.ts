import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from'ng2-smart-table'; 
import { AddDataService } from '../add-data.service';
import { ButtonRenderComponent } from '../button-render/button-render.component';
import {SearchFieldsComponent} from '../search-fields/search-fields.component';
//import { NbBadgeComponent } from '../../../framework/theme/components/badge/badge.component';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    
    columns: {
      ID: {
        title: 'ID',
        type: 'number',
      },
      Name: {
        title: 'Name',
        type: 'string',
      },
      Price: {
        title: 'Price',
        type: 'number',
      },
      Created_at: {
        title: 'Created at',
        type: 'date',
      },
      Updated_at: {
        title: 'Updated at',
        type: 'date',
      },  
      Seller_Name: {
        title: 'Seller Name',
        type: 'string',
      },
      button: {
        title: 'Add to Cart',
        type: 'custom',
        renderComponent: ButtonRenderComponent,
        defaultValue: 'Item is successfully added to your shopping cart!'
    
      },
    },
  };
  source:LocalDataSource = new LocalDataSource();
  constructor(private service: AddDataService) { }

  ngOnInit() {
   const data = this.service.getData();
   this.source.load(data);
  
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
