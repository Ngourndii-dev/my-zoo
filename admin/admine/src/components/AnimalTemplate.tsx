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
} from 'react-admin';
  
export const AnimalTemplateList = () => (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="species" />
      </Datagrid>
    </List>
);
  
export const AnimalTemplateEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="species" validate={[required()]} fullWidth />
      </SimpleForm>
    </Edit>
);
  
export const AnimalTemplateCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="species" validate={[required()]} fullWidth />
      </SimpleForm>
    </Create>
);
  
export const AnimalTemplateShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="species" />
      </SimpleShowLayout>
    </Show>
);