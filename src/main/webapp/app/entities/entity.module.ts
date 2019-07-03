import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#JhipsterDataBaseRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#JhipsterDataBaseCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#JhipsterDataBaseLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#JhipsterDataBaseDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#JhipsterDataBaseTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#JhipsterDataBaseEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#JhipsterDataBaseJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#JhipsterDataBaseJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterDataBaseEntityModule {}
