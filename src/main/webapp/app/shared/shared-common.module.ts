import { NgModule } from '@angular/core';

import { JhipsterDataBaseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterDataBaseSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterDataBaseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterDataBaseSharedCommonModule {}
