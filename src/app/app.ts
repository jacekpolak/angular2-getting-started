import {bootstrap, Component, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice"},
    { "id": 12, "name": "Narco"},
    { "id": 13, "name": "Some person1"},
    { "id": 14, "name": "Some person..."},
    { "id": 15, "name": "Some person..."},
    { "id": 16, "name": "Some person..."},
    { "id": 17, "name": "Some person..."},
    { "id": 18, "name": "Some person..."},
];

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>

        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ng-for="#hero of heroes">
                <!-- each hero goes here -->
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>

        <h2>{{hero.name}} details!</h2>
        <div>
            <label for="id">id: </label> {{hero.id}}
        </div>
        <div>
            <label for="name">name: </label>
            <input type="text" id="name" [(ng-model)]="hero.name" placeholder="name" /> 
        </div>  
    `,
    directives: [FORM_DIRECTIVES, NgFor],
    styles:[`
        .heroes { list-style-type: none; margin-left: 1em; padding: 0; width: 10em; }
        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        .heroes li:hover { color: #369; background-color: #EEE; left: .2em;}
        .heroes .badge {
            font-size: small;
            color: white;
            padding: 0.1em 0.7em;
            background-color: #369;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -1px;
        }
        .selected { background-color: #EEE; color: #369; }
    `],
})

class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    public heroes = HEROES;
}

class Hero {
    id: number;
    name: string;
}

bootstrap(AppComponent);