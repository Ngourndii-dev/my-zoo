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
      <NumberInput source="price" validate={[required()]} min={0} />
      <ReferenceInput source="animal.id" reference="animals" validate={[required()]}>
        <SelectInput optionText="animalTemplate.name" />
      </ReferenceInput>
      <DateInput source="operationDate" />
      <TextInput source="operationType" validate={[required()]} />
    </SimpleForm>
  </Edit>
);

export const OperationCreate = () => (
  <Create transform={(data) => ({
    ...data,
    animal: { id: data.animal }, 
  })}>
    <SimpleForm>
      <NumberInput source="price" validate={[required()]} min={0} />
      <ReferenceInput source="animal" reference="animals">
        <SelectInput optionText="animalTemplate.name" validate={[required()]} />
      </ReferenceInput>
      <DateInput source="operationDate" validate={[required()]} />
      <TextInput source="operationType" validate={[required()]} />
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