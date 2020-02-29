import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})

export class SuccessComponent implements OnInit{
    allowNewServer = false;
    serverCreateStatus = 'No servers found';
    serverStatus = "offline";
    printvalue = 'ServerOne';
    
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        /*setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);*/
    }

    ngOnInit(){}

    CreateServer(){
        /*this.allowNewServer = true;
        this.serverCreateStatus = 'Server Created Successfully';*/
    }
    getServerStauts(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
    username = '';
    PrintValue(event: any){
        this.printvalue = event.target.value; 
    }
    resetString(){
        this.username = '';
    }
}