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
  ImageField,
  ImageInput
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
      <ImageField source="imageUrl" label="Animal Image" />
    </Datagrid>
  </List>
);

export const AnimalEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberField source="id" />
      <NumberInput source="price" />
      <SelectInput
        source="status"
        choices={[
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]}
        validate={[required()]}
      />
    </SimpleForm>
  </Edit>
);

export const AnimalCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="id_animal_template" reference="animal_templates" label="Template">
        <SelectInput optionText="name" validate={[required()]} />
      </ReferenceInput>
      <SelectInput
        source="sex"
        choices={[
          { id: 'male', name: 'Male' },
          { id: 'female', name: 'Female' }
        ]}
        validate={[required()]}
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
        validate={[required()]}
      />
      <TextInput source="color" validate={[required()]} />
      <ImageInput source="imageUrl" label="Animal Image">
        <ImageField source="src" />
      </ImageInput>
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