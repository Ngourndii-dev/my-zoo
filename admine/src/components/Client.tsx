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
} from 'react-admin';

export const ClientList = () => (
    <List>
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="clientName" />
        <TextField source="phoneNumber" />
        <TextField source="email" />
      </Datagrid>
    </List>
);
  
  export const ClientEdit = () => (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="clientName" validate={[required()]} />
        <TextInput source="phoneNumber" validate={[required()]} />
        <TextInput source="email" validate={[required()]} type="email" />
      </SimpleForm>
    </Edit>
);
  
  export const ClientCreate = () => (
    <Create>
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="clientName" validate={[required()]} />
        <TextInput source="phoneNumber" validate={[required()]} />
        <TextInput source="email" validate={[required()]} type="email" />
      </SimpleForm>
    </Create>
);
  
  export const ClientShow = () => (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="clientName" />
        <TextField source="phoneNumber" />
        <TextField source="email" />
      </SimpleShowLayout>
    </Show>
);