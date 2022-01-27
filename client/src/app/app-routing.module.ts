import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AddrecipeComponent } from './components/addrecipe/addrecipe.component';

const routes: Routes = [
    { path: 'index', component: IndexComponent },
    { path: 'recipe/:id', component: RecipeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'register', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'addrecipe', component: AddrecipeComponent },
    { path: '', redirectTo: '/index', pathMatch: 'full'},
    //{ path: '**', component: PageNotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
