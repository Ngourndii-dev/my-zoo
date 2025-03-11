import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { AnimalTemplateCreate, AnimalTemplateEdit, AnimalTemplateList, AnimalTemplateShow } from "./components/AnimalTemplate";
import { ReviewList, ReviewShow } from "./components/Review";
import customDataProvider from "./provider/dataProvider";
import { AnimalCreate, AnimalEdit, AnimalList, AnimalShow } from "./components/Animal";
import { ClientList, ClientShow } from "./components/Client";
import { EventCreate, EventEdit, EventList, EventShow } from "./components/Event";
import { OperationCreate, OperationEdit, OperationList, OperationShow } from "./components/Operation";
import { OrdersEdit, OrdersList, OrdersShow } from "./components/Orders";

export const App : React.FC = () => (
  <Admin
    layout={Layout}
    dataProvider={customDataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="animals"
      list={AnimalList}
      edit={AnimalEdit}
      show={AnimalShow}
      create={AnimalCreate}
    />
     <Resource
      name="animal-templates"
      list={AnimalTemplateList}
      edit={AnimalTemplateEdit}
      show={AnimalTemplateShow}
      create={AnimalTemplateCreate}
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
      show={EventShow}
      create={EventCreate}
    />
    <Resource
      name="operations"
      list={OperationList}
      edit={OperationEdit}
      show={OperationShow}
      create={OperationCreate}
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
