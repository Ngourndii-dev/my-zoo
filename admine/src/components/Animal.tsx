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
  useRecordContext,
} from 'react-admin';

const AnimalTemplateField = () => {
  const record = useRecordContext();
  return <span>{record?.animalTemplate?.name}</span>;
};

export const AnimalList = () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <AnimalTemplateField label="Template" />
      <TextField source="sex" />
      <TextField source="origin" />
      <NumberField source="price" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const AnimalEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput disabled source="id" />
      <ReferenceInput 
        source="animalTemplate.id" 
        reference="animal_templates"
        label="Template"
      >
        <SelectInput 
          optionText="name" 
          validate={[required()]} 
        />
      </ReferenceInput>
      <SelectInput 
        source="sex" 
        choices={[
          { id: 'mâle', name: 'Mâle' },
          { id: 'femelle', name: 'Femelle' }
        ]} 
      />
      <TextInput source="origin" validate={[required()]} />
      <NumberInput source="price" />
      <NumberInput source="rent" />
      <SelectInput 
        source="status" 
        choices={[
          { id: 'disponible', name: 'Disponible' },
          { id: 'indisponible', name: 'Indisponible' }
        ]} 
      />
      <TextInput source="color" validate={[required()]} />
    </SimpleForm>
  </Edit>
);

export const AnimalCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput 
        source="animalTemplate.id" 
        reference="animal_templates"
        label="Template"
      >
        <SelectInput 
          optionText="name" 
          validate={[required()]} 
        />
      </ReferenceInput>
      <SelectInput 
        source="sex" 
        choices={[
          { id: 'mâle', name: 'Mâle' },
          { id: 'femelle', name: 'Femelle' }
        ]} 
      />
      <TextInput source="origin" validate={[required()]} />
      <NumberInput source="price" />
      <NumberInput source="rent" />
      <SelectInput 
        source="status" 
        choices={[
          { id: 'disponible', name: 'Disponible' },
          { id: 'indisponible', name: 'Indisponible' }
        ]} 
      />
      <TextInput source="color" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export const AnimalShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" />
      <AnimalTemplateField label="Template" />
      <TextField source="sex" />
      <TextField source="origin" />
      <NumberField source="price" />
      <NumberField source="rent" />
      <TextField source="status" />
      <TextField source="color" />
      <TextField source="animalTemplate.species" label="Espèce" />
      <img 
        src="<record.animalTemplate.imageUrl>" 
        alt="Template" 
        style={{ maxWidth: '200px' }} 
      />
    </SimpleShowLayout>
  </Show>
);