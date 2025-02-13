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
  } from 'react-admin';
  
export const AnimalList = () => (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <ReferenceField source="id_animal_template" reference="animal_templates">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="sex" />
        <TextField source="origin" />
        <TextField source="price" />
        <TextField source="status" />
      </Datagrid>
    </List>
);
  
export const AnimalEdit = () => (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="id_animal_template" reference="animal_templates">
          <SelectInput optionText="name" validate={[required()]} />
        </ReferenceInput>
        <SelectInput source="sex" choices={[
          { id: 'male', name: 'Male' },
          { id: 'female', name: 'Female' }
        ]} />
        <TextInput source="origin" validate={[required()]} />
        <NumberInput source="price" />
        <NumberInput source="rent" />
        <SelectInput source="status" choices={[
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]} />
        <TextInput source="color" validate={[required()]} />
      </SimpleForm>
    </Edit>
);
  
export const AnimalCreate = () => (
    <Create>
      <SimpleForm>
        <ReferenceInput source="id_animal_template" reference="animal_templates">
          <SelectInput optionText="name" validate={[required()]} />
        </ReferenceInput>
        <SelectInput source="sex" choices={[
          { id: 'male', name: 'Male' },
          { id: 'female', name: 'Female' }
        ]} />
        <TextInput source="origin" validate={[required()]} />
        <NumberInput source="price" />
        <NumberInput source="rent" />
        <SelectInput source="status" choices={[
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]} />
        <TextInput source="color" validate={[required()]} />
      </SimpleForm>
    </Create>
);
  
export const AnimalShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField source="id_animal_template" reference="animal_templates">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="sex" />
        <TextField source="origin" />
        <TextField source="price" />
        <TextField source="rent" />
        <TextField source="status" />
        <TextField source="color" />
      </SimpleShowLayout>
    </Show>
);