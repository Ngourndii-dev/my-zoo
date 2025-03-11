import {
    List,
    Show,
    Datagrid,
    TextField,
    SimpleShowLayout,
    NumberField,
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