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
  } from 'react-admin';

export const EventList = () => (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
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
        <TextField source="id" />
        <ReferenceField source="id_animal" reference="animals">
          <TextField source="id" />
        </ReferenceField>
        <ImageField source="image" />
        <TextField source="situation_date" />
      </SimpleShowLayout>
    </Show>
);