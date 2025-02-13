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
  } from 'react-admin';

export const OperationList = () => (
    <List>
      <Datagrid rowClick="show">
        <TextField source="operation_type" />
        <TextField source="price" />
        <TextField source="operation_date" />
      </Datagrid>
    </List>
);
  
export const OperationEdit = () => (
    <Edit>
      <SimpleForm>
        <NumberInput source="price" validate={[required()]} min={0} />
        <ReferenceInput source="id_animal" reference="animals">
          <SelectInput optionText="id" validate={[required()]} />
        </ReferenceInput>
        <DateInput source="operation_date" />
        <TextInput source="operation_type" validate={[required()]} />
      </SimpleForm>
    </Edit>
);
  
export const OperationCreate = () => (
    <Create>
      <SimpleForm>
        <NumberInput source="price" validate={[required()]} min={0} />
        <ReferenceInput source="id_animal" reference="animals">
          <SelectInput optionText="id" validate={[required()]} />
        </ReferenceInput>
        <DateInput source="operation_date" />
        <TextInput source="operation_type" validate={[required()]} />
      </SimpleForm>
    </Create>
);
  
export const OperationShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="price" />
        <ReferenceField source="id_animal" reference="animals">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="operation_date" />
        <TextField source="operation_type" />
      </SimpleShowLayout>
    </Show>
);