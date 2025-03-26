import { Admin, Resource } from 'react-admin';
import customDataProvider from './provider/dataProvider';
import { AnimalList, AnimalEdit, AnimalCreate, AnimalShow } from './components/Animal';
import { AnimalTemplateList, AnimalTemplateEdit, AnimalTemplateCreate, AnimalTemplateShow } from './components/AnimalTemplate';

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
  </Admin>
);

export default App;