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

export const ClientList = () => (
    <List>
      <Datagrid rowClick="show">
        <TextField source="client_name" />
        <TextField source="phone_number" />
        <TextField source="email" />
      </Datagrid>
    </List>
);
  
  export const ClientEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="client_name" validate={[required()]} />
        <TextInput source="phone_number" validate={[required()]} />
        <TextInput source="email" validate={[required()]} type="email" />
      </SimpleForm>
    </Edit>
);
  
  export const ClientCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="client_name" validate={[required()]} />
        <TextInput source="phone_number" validate={[required()]} />
        <TextInput source="email" validate={[required()]} type="email" />
      </SimpleForm>
    </Create>
);
  
  export const ClientShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="client_name" />
        <TextField source="phone_number" />
        <TextField source="email" />
      </SimpleShowLayout>
    </Show>
);