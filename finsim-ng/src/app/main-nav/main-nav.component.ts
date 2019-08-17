import { Component, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { map, share, tap } from 'rxjs/operators';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.media.media$.pipe(
    map(
      () =>
        this.media.isActive('xs') ||
        this.media.isActive('sm') ||
        this.media.isActive('lt-md')
    ),
    tap(() => this.changeDetectorRef.detectChanges())
  );
    

  constructor(private media: MediaObserver, private changeDetectorRef: ChangeDetectorRef) {}

}
