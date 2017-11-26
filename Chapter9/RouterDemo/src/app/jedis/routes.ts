import { JedisShellComponent } from "./jedis.shell.component";
import { JediHeaderComponent } from "./jedi.header.component";
import { JediComponent } from "./jedi.component";

const routes = [{
  path: 'jedis',
  component: JedisShellComponent,
  children: [{
    path: '',
    component: JediHeaderComponent,
    outlet: 'header'
  },
  {
    path: '',
    component: JediComponent,
    outlet: 'body'
  }]
}];

export default routes;
