import { Directive, Input, TemplateRef, ViewContainerRef, Inject, ElementRef, Renderer2 } from '@angular/core';
import { MyServiceUserInjectionToken, IUserService } from '../services/iuser.service';
import { AuthGuard } from '../auth/auth';
import { UserService } from '../services/user.service';

@Directive({
    selector: '[appIsConnected]'
})
export class AppIsConnectedDirective {

    constructor(
        private auth: AuthGuard,
        @Inject(MyServiceUserInjectionToken) private userService: IUserService,
        private renderer: Renderer2,
        private el: ElementRef) {
            this.userService.getSubject().subscribe(r => {
                if (r) {
                    this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
                }
            });
    }

    @Input()
    set appIsConnected(string: String) {
        this.updateView();
    }

    public updateView(): void {
        if (localStorage.getItem('connected') === 'true') {
            console.log('connected');
        } else {
            console.log('On cache item');
            this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        }
    }
}

