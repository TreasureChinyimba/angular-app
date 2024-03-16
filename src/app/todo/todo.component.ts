import { TmplAstTextAttribute } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  //add Button
btn() {



  const list = document.querySelector('input')as HTMLInputElement;

  if (list.value === '') {
  alert('add in an item')
  } else {
    const item = document.createElement('p');
    item.textContent = list.value;
    const back = document.querySelector('.app');
    back?.appendChild(item);
    list.value = '';
  
    //delete Button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    back?.appendChild(delBtn);
    delBtn.addEventListener('click', ()=> {
      back?.removeChild(item);
      back?.removeChild(delBtn);
    })
  }
  }


}
