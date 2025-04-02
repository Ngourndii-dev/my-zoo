import { Admin, Resource } from 'react-admin';
import customDataProvider from './provider/dataProvider';
import { AnimalList, AnimalEdit, AnimalCreate, AnimalShow } from './components/Animal';
import { AnimalTemplateList, AnimalTemplateEdit, AnimalTemplateCreate, AnimalTemplateShow } from './components/AnimalTemplate';
import { ClientList, ClientShow } from './components/Client';
import { EventCreate, EventEdit, EventList, EventShow } from './components/Event';
import { OperationCreate, OperationEdit, OperationList, OperationShow } from './components/Operation';
import { OrdersEdit, OrdersList, OrdersShow } from './components/Orders';
import { ReviewList, ReviewShow } from './components/Review';

const App = () => (
  <Admin dataProvider={customDataProvider}>
    <Resource
      name="animals"
      list={AnimalList}
      edit={AnimalEdit}
      create={AnimalCreate}
      show={AnimalShow}
    />
    <Resource
      name="animal-templates"
      list={AnimalTemplateList}
      edit={AnimalTemplateEdit}
      create={AnimalTemplateCreate}
      show={AnimalTemplateShow}
    />
     <Resource
      name="clients"
      list={ClientList}
      show={ClientShow}
    />
     <Resource
      name="events"
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
      show={EventShow}
    />
     <Resource
      name="operations"
      list={OperationList}
      edit={OperationEdit}
      create={OperationCreate}
      show={OperationShow}
    />
     <Resource
      name="orders"
      list={OrdersList}
      edit={OrdersEdit}
      show={OrdersShow}
    />
     <Resource
      name="reviews"
      list={ReviewList}
      show={ReviewShow}
    />
  </Admin>
);

export default App;