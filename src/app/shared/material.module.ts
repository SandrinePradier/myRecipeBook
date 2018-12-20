import { NgModule } from "@angular/core";
import { MatButtonModule, 
        MatToolbarModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule, 
        MatCardModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatMenuModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LayoutModule } from "@angular/cdk/layout";


@NgModule({
imports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FlexLayoutModule,
    LayoutModule,
],
exports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FlexLayoutModule,
    LayoutModule,
]
})
export class MaterialModule {}