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
  NumberField,
  NumberInput,
  ImageField,
} from 'react-admin';

export const AnimalTemplateList= () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="species" />
      <ImageField source="imageUrl"/>
    </Datagrid>
  </List>
);

export const AnimalTemplateEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="species" validate={[required()]} fullWidth />
      <TextInput source="imageUrl"/>
    </SimpleForm>
  </Edit>
);

export const AnimalTemplateCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="species" validate={[required()]} fullWidth />
      <TextInput source="imageUrl"/>
    </SimpleForm>
  </Create>
);

export const AnimalTemplateShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="species" />
      <ImageField source="imageUrl"/>
    </SimpleShowLayout>
  </Show>
);
