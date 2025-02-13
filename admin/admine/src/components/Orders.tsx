import {
    List,
    Edit,
    Create,
    Show,
    SimpleForm,
    required,
    Datagrid,
    TextField,
    SimpleShowLayout,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    NumberInput,
    DateInput,
} from 'react-admin';

export const OrdersList = () => (
    <List>
      <Datagrid rowClick="show">
        <TextField source="order_date" />
        <TextField source="status" />
        <TextField source="quantity" />
      </Datagrid>
    </List>
);
  
export const OrdersEdit = () => (
    <Edit>
      <SimpleForm>
        <DateInput source="order_date" validate={[required()]} />
        <SelectInput source="status" choices={[
          { id: 'append', name: 'Append' },
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]} />
        <NumberInput source="quantity" validate={[required()]} min={1} />
        <ReferenceInput source="id_client" reference="clients">
          <SelectInput optionText="client_name" validate={[required()]} />
        </ReferenceInput>
        <ReferenceInput source="id_animal" reference="animals">
          <SelectInput optionText="id" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
);
  
export const OrdersCreate = () => (
    <Create>
      <SimpleForm>
        <DateInput source="order_date" validate={[required()]} />
        <SelectInput source="status" choices={[
          { id: 'append', name: 'Append' },
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]} />
        <NumberInput source="quantity" validate={[required()]} min={1} />
        <ReferenceInput source="id_client" reference="clients">
          <SelectInput optionText="client_name" validate={[required()]} />
        </ReferenceInput>
        <ReferenceInput source="id_animal" reference="animals">
          <SelectInput optionText="id" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
);
  
export const OrdersShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="order_date" />
        <TextField source="status" />
        <TextField source="quantity" />
        <ReferenceField source="id_client" reference="clients">
          <TextField source="client_name" />
        </ReferenceField>
        <ReferenceField source="id_animal" reference="animals">
          <TextField source="id" />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
);