import {
  List,
  Edit,
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
  ImageField,
  EmailField
} from 'react-admin';

export const OrdersList = () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="orderDate" />
      <TextField source="status" />
      <NumberField source="quantity" />
      <ReferenceField source="client.id" reference="clients">
        <TextField source="clientName" />
      </ReferenceField>
      <ReferenceField source="animal.id" reference="animals">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const OrdersEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <DateInput source="orderDate" validate={[required()]} />
      <SelectInput source="status" choices={[ 
        { id: 'append', name: 'Append' },
        { id: 'available', name: 'Available' },
        { id: 'unavailable', name: 'Unavailable' }
      ]} />
      <NumberInput source="quantity" validate={[required()]} min={1} />
      <ReferenceInput source="client.id" reference="clients">
        <SelectInput optionText="clientName" validate={[required()]} />
      </ReferenceInput>
      <ReferenceInput source="animal.id" reference="animals">
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
      
      <ReferenceField source="client.id" reference="clients">
        <TextField source="clientName" />
      </ReferenceField>
      <TextField source="client.phoneNumber" label="Phone" />
      <EmailField source="client.email" label="Email" />
      
      <ReferenceField source="animal.id" reference="animals">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
      <TextField source="animal.sex" label="Sex" />
      <TextField source="animal.origin" label="Origin" />
      <NumberField source="animal.prix" label="Price" />
      <NumberField source="animal.loyer" label="Rent" />
      <TextField source="animal.statut" label="Status" />
      <TextField source="animal.couleur" label="Color" />
      <ImageField source="animal.imageUrl" label="Animal Image" />
    </SimpleShowLayout>
  </Show>
);