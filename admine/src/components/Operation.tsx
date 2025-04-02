import {
  List,
  Edit,
  Create,
  Show,
  SimpleForm,
  TextInput,
  Datagrid,
  TextField,
  SimpleShowLayout,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateInput,
  NumberField,
  DateField,
} from 'react-admin';

export const OperationList = () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <NumberField source="price" />
      <ReferenceField source="animal.id" reference="animals">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
      <DateField source="operationDate" />
      <TextField source="operationType" />
    </Datagrid>
  </List>
);

export const OperationEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <NumberInput source="price" />
      <ReferenceInput source="animal.id" reference="animals">
        <SelectInput optionText="animalTemplate.name" />
      </ReferenceInput>
      <DateInput source="operationDate" />
      <TextInput source="operationType" />
    </SimpleForm>
  </Edit>
);

export const OperationCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="price" min={0} />
      <ReferenceInput source="animal.id" reference="animals">
        <SelectInput 
          optionText={(record) => `${record.animalTemplate.name} (${record.id})`} 
        />
      </ReferenceInput>
      <DateInput source="operationDate" />
      <TextInput source="operationType" />
    </SimpleForm>
  </Create>
);

export const OperationShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" />
      <NumberField source="price" />
      <ReferenceField source="animal.id" reference="animals">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
      <DateField source="operationDate" />
      <TextField source="operationType" />
    </SimpleShowLayout>
  </Show>
);