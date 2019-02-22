import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class SocketDocumentService {

	private socket;

	constructor() { 
		this.socket = io.connect('http://localhost:4000')
	}
 
    sendMessage(message: string){
        this.socket.emit("msg", message);
    }
    
    getMessage() {
        
        // return Observable.create((observer) => {
        //     this.socket.on('msg', (message) => {
        //         observer.next(message);
        //     });
        // });

        return this.socket.fromEvent("msg");
    }
  
}