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
    DateInput,
    ImageField,
    NumberField,
    NumberInput,
  } from 'react-admin';

export const EventList = () => (
    <List>
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <ReferenceField source="id_animal" reference="animals">
          <TextField source="id" />
        </ReferenceField>
        <ImageField source="image" />
        <TextField source="situation_date" />
      </Datagrid>
    </List>
);
  
export const EventEdit = () => (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" />
        <ReferenceInput source="id_animal" reference="animals">
          <SelectInput optionText="id" validate={[required()]} />
        </ReferenceInput>
        <TextInput source="image" validate={[required()]} />
        <DateInput source="situation_date" validate={[required()]} />
      </SimpleForm>
    </Edit>
);
  
export const EventCreate = () => (
    <Create>
      <SimpleForm>
        <NumberInput source="id" />
        <ReferenceInput source="id_animal" reference="animals">
          <SelectInput optionText="id" validate={[required()]} />
        </ReferenceInput>
        <TextInput source="image" validate={[required()]} />
        <DateInput source="situation_date" validate={[required()]} />
      </SimpleForm>
    </Create>
);
  
export const EventShow = () => (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <ReferenceField source="id_animal" reference="animals">
          <TextField source="id" />
        </ReferenceField>
        <ImageField source="image" />
        <TextField source="situation_date" />
      </SimpleShowLayout>
    </Show>
);