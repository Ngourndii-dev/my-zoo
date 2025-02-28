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
  ImageInput,
} from 'react-admin';

export const AnimalTemplateList= () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="species" />
      <ImageField source="image_url"/>
    </Datagrid>
  </List>
);

export const AnimalTemplateEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="species" validate={[required()]} fullWidth />
      <ImageInput source="image_url"/>
    </SimpleForm>
  </Edit>
);

export const AnimalTemplateCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="species" validate={[required()]} fullWidth />
      <ImageInput source="image_url"/>
    </SimpleForm>
  </Create>
);

export const AnimalTemplateShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="species" />
      <ImageField source="image_url"/>
    </SimpleShowLayout>
  </Show>
);
