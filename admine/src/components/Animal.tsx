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
  ReferenceInput,
  SelectInput,
  NumberInput,
  NumberField,
  ImageField
} from 'react-admin';

export const AnimalList = () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="animalTemplate.name" label="Template" />
      <TextField source="sex" />
      <TextField source="origin" />
      <NumberField source="price" />
      <NumberField source="rent" />
      <TextField source="status" />
      <TextField source="color" />
    </Datagrid>
  </List>
);

export const AnimalEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput disabled source="id" />
      <ReferenceInput source="animalTemplate.id" reference="animal_templates" label="Template">
        <SelectInput optionText="name" validate={[required()]} />
      </ReferenceInput>
      <SelectInput 
        source="sex" 
        choices={[
          { id: 'male', name: 'Male' },
          { id: 'female', name: 'Female' }
        ]} 
      />
      <TextInput source="origin" validate={[required()]} />
      <NumberInput source="price" />
      <NumberInput source="rent" />
      <SelectInput 
        source="status" 
        choices={[
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]} 
      />
      <TextInput source="color" validate={[required()]} />
      <ImageField source="imageUrl" label="Animal Image" />
    </SimpleForm>
  </Edit>
);

export const AnimalCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="animalTemplate.id" reference="animal_templates" label="Template">
        <SelectInput optionText="name" validate={[required()]} />
      </ReferenceInput>
      <SelectInput 
        source="sex" 
        choices={[
          { id: 'male', name: 'Male' },
          { id: 'female', name: 'Female' }
        ]} 
      />
      <TextInput source="origin" validate={[required()]} />
      <NumberInput source="price" />
      <NumberInput source="rent" />
      <SelectInput 
        source="status" 
        choices={[
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]} 
      />
      <TextInput source="color" validate={[required()]} />
      <ImageField source="imageUrl" label="Animal Image" />
    </SimpleForm>
  </Create>
);

export const AnimalShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="animalTemplate.name" label="Template" />
      <TextField source="sex" />
      <TextField source="origin" />
      <NumberField source="price" />
      <NumberField source="rent" />
      <TextField source="status" />
      <TextField source="color" />
      <TextField source="animalTemplate.species" label="Species" />
      <ImageField source="animalTemplate.imageUrl" label="Template Image" />
      <ImageField source="imageUrl" label="Animal Image" />
    </SimpleShowLayout>
  </Show>
);
