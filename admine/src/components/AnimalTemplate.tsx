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
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="animalTemplate.id" reference="animal-templates">
        <SelectInput optionText="name" disabled />
      </ReferenceInput>
      <TextInput source="sex" disabled />
      <TextInput source="origin" disabled />
      <NumberInput source="price" validate={[required()]} />
      <NumberInput source="rent" validate={[required()]} />
      <SelectInput
        source="status"
        choices={[
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]}
        validate={[required()]}
      />
      <TextInput source="color" disabled />
      <ImageInput source="imageUrl" label="Animal Image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const AnimalCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="animalTemplate.id" reference="animal-templates">
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
      <NumberInput source="price" validate={[required()]} />
      <NumberInput source="rent" validate={[required()]} />
      <SelectInput
        source="status"
        choices={[
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]}
        validate={[required()]}
      />
      <TextInput source="color" validate={[required()]} />
      <ImageInput source="imageUrl" label="Animal Image" accept="image/*">
        <ImageField source="src" title="title" />
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

// AnimalTemplate Components
export const AnimalTemplateList = () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="species" />
      <ImageField source="imageUrl" />
    </Datagrid>
  </List>
);

export const AnimalTemplateEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="species" validate={[required()]} fullWidth />
      <TextInput source="imageUrl" validate={[required()]} />
    </SimpleForm>
  </Edit>
);

export const AnimalTemplateCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="species" validate={[required()]} fullWidth />
      <TextInput source="imageUrl" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export const AnimalTemplateShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="species" />
      <ImageField source="imageUrl" />
    </SimpleShowLayout>
  </Show>
);