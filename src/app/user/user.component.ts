import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  constructor(private service: UserService, private route: ActivatedRoute) {}

  private username: string;
  private user404: boolean;

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("user");
    if (this.username !== this.service.getUserName()) this.user404 = true;
  }
}
