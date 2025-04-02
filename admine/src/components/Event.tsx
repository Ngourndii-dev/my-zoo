import {
  List,
  Edit,
  Create,
  Show,
  SimpleForm,
  TextInput,
  Datagrid,
  TextField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  DateInput,
  ImageField,
  NumberField,
  DateField,
} from 'react-admin';

export const EventList = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="id" label="Identifiant" />
      <ReferenceField source="animal.id" reference="animals" label="Animal">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
      <ImageField source="image" label="Image" />
      <DateField source="situationDate" label="Date de la situation" />
      <TextField source="descriptionEvent" label="Description de l'événement" />
    </Datagrid>
  </List>
);

export const EventEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" disabled label="Identifiant" />
      <ReferenceInput source="animal.id" reference="animals" label="Animal">
        <SelectInput optionText="animalTemplate.name" />
      </ReferenceInput>
      <TextInput source="image" label="Image (URL)" />
      <DateInput source="situationDate" label="Date de la situation" />
      <TextInput source="descriptionEvent" multiline label="Description de l'événement" />
    </SimpleForm>
  </Edit>
);

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="animal.id" reference="animals" label="Animal">
        <SelectInput optionText="animalTemplate.name" />
      </ReferenceInput>
      <TextInput source="image" label="Image (URL)" />
      <DateInput source="situationDate" label="Date de la situation" />
      <TextInput source="descriptionEvent" multiline label="Description de l'événement" />
    </SimpleForm>
  </Create>
);

export const EventShow = () => (
  <Show>
    <SimpleForm>
      <NumberField source="id" label="Identifiant" />
      <ReferenceField source="animal.id" reference="animals" label="Animal">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
      <ImageField source="image" label="Image" />
      <DateField source="situationDate" label="Date de la situation" />
      <TextField source="descriptionEvent" label="Description de l'événement" />
    </SimpleForm>
  </Show>
);