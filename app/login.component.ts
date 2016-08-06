import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'my-login',
	template: `
	<h1>Login is here</h1>
	`,
})

export class LoginComponent implements OnInit {
	title = "Login pose";
	ngOnInit() {
		alert("no login yet");
	}
}