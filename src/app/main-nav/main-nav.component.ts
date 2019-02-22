import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocketDocumentService } from '../services/socket/socket-document.service';

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent{
	message: string;
	msg: string;

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);

	documents: Observable<string[]>;
	currentDoc: string;
	private _docSub: Subscription;


	constructor(private breakpointObserver: BreakpointObserver, private socketDoc: SocketDocumentService) { }

	sendMessage() {
		this.socketDoc.sendMessage(this.message);
		this.message = '';
		this.getMessage();
	}


	getMessage() {
		this.socketDoc.getMessage().subscribe( msg => {
			this.msg = msg;
		});
	}
	
	OnInit() {
		
	}
}
