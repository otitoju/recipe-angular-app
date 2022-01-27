import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipesService } from './recipes.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { InputfieldComponent } from './components/inputfield/inputfield.component';
import { IndexComponent } from './components/index/index.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AddrecipeComponent } from './components/addrecipe/addrecipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    InputfieldComponent,
    IndexComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    RecipesComponent,
    RecipeComponent,
    AddrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
