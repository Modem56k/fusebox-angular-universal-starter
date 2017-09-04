import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core'
import { Meta } from '@angular/platform-browser'
import { EnvironmentService } from './shared/services/environment.service'
import { Angulartics2GoogleAnalytics } from 'angulartics2'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'

@Component({
  selector: 'pm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public modalRef: BsModalRef

  constructor(env: EnvironmentService, meta: Meta, analytics: Angulartics2GoogleAnalytics,
    private modalService: BsModalService) {
    meta.addTag({ property: 'fb:app_id', content: env.config.og.facebookAppId })
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }
}
