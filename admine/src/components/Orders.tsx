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
  NumberField,
} from 'react-admin';

export const OrdersList = () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="orderDate" />
      <TextField source="status" />
      <NumberField source="quantity" />
    </Datagrid>
  </List>
);

export const OrdersEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="id" />
      <DateInput source="orderDate" validate={[required()]} />
      <SelectInput source="status" choices={[
        { id: 'append', name: 'Append' },
        { id: 'available', name: 'Available' },
        { id: 'unavailable', name: 'Unavailable' }
      ]} />
      <NumberInput source="quantity" validate={[required()]} min={1} />
      <ReferenceInput source="id_client" reference="clients">
        <SelectInput optionText="clientName" validate={[required()]} />
      </ReferenceInput>
      <ReferenceInput source="id_animal" reference="animals">
        <SelectInput optionText="animalTemplate.name" validate={[required()]} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const OrdersShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="orderDate" />
      <TextField source="status" />
      <NumberField source="quantity" />
      <ReferenceField source="id_client" reference="clients">
        <TextField source="clientName" />
      </ReferenceField>
      <ReferenceField source="id_animal" reference="animals">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
