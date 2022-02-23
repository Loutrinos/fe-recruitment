import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';
import { Character } from "../sdk/character.model";

@Component({
	selector: "app-thumbnail",
	templateUrl: "./thumbnail.component.html",
	styleUrls: ["./thumbnail.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class ThumbnailComponent implements OnInit {

	@Input() items: Character[] | undefined;

	constructor(
		private router: Router
	) { }

	ngOnInit(): void {
	}

	navigate(path: string | undefined) {
		if (!path) {
			return;
		}

		this.router.navigate(["/list", path]);
	}

}
