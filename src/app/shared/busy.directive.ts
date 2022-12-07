import {ComponentRef, Directive, Injector, Input, OnDestroy, ViewContainerRef} from '@angular/core';
import {BusyComponent} from "./busy/busy.component";

@Directive({
  selector: '[busySpinner]',
})
export class BusyDirective implements OnDestroy {
  private busyRef?: ComponentRef<BusyComponent>;

  constructor(private readonly vcRef: ViewContainerRef, private readonly injector: Injector) {
  }

  /**
   * Dieses Feld enthält Busy-Status.
   */
  @Input()
  set busySpinner(val: boolean) {
    if (val) {
      this.createBusy();
    } else {
      this.destroyComponents();
    }
  };

  ngOnDestroy(): void {
    this.destroyComponents();
  }

  private destroyComponents(): void {
    if (this.busyRef) {
      this.busyRef.destroy();
    }
  }

  private createBusy(): void {
    this.busyRef = this.vcRef.createComponent(BusyComponent, {injector: this.injector});
  }
}
