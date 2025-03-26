import {
  List,
  Edit,
  Create,
  Show,
  SimpleForm,
  TextInput,
  required,
  Datagrid,
  TextField,
  SimpleShowLayout,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  DateInput,
  ImageField,
  NumberField,
  NumberInput,
  DateField,
} from 'react-admin';

export const EventList = () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <ReferenceField source="animal.id" reference="animals">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
      <ImageField source="image" />
      <DateField source="situationDate" />
      <TextField source="descriptionEvent" />
    </Datagrid>
  </List>
);

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberField source="id" />
      <DateInput source="situationDate" />
    </SimpleForm>
  </Edit>
);


export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="animal" reference="animals">
        <SelectInput optionText="id"/>
      </ReferenceInput>
      <TextInput source="image"/>
      <DateInput source="situationDate"/>
      <TextInput source="descriptionEvent" multiline />
    </SimpleForm>
  </Create>
);
export const EventShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" />
      <ReferenceField source="animal.id" reference="animals">
        <TextField source="animalTemplate.id" />
      </ReferenceField>
      <ImageField source="image" />
      <DateField source="situationDate" />
      <TextField source="descriptionEvent" />
    </SimpleShowLayout>
  </Show>
);
