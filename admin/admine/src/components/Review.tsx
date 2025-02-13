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
} from 'react-admin';
  
export const ReviewList = () => (
    <List>
      <Datagrid rowClick="show">
        <TextField source="author" />
        <TextField source="rating" />
        <TextField source="status" />
      </Datagrid>
    </List>
);
  
export const ReviewEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="author" validate={[required()]} />
        <ReferenceInput source="id_animal" reference="animals">
          <SelectInput optionText="id" validate={[required()]} />
        </ReferenceInput>
        <SelectInput source="rating" choices={[
          { id: 1, name: '1' },
          { id: 2, name: '2' },
          { id: 3, name: '3' },
          { id: 4, name: '4' },
          { id: 5, name: '5' }
        ]} />
        <TextInput source="comment" />
        <SelectInput source="status" choices={[
          { id: 'pending', name: 'Pending' },
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]} />
      </SimpleForm>
    </Edit>
);
  
export const ReviewCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="author" validate={[required()]} />
        <ReferenceInput source="id_animal" reference="animals">
          <SelectInput optionText="id" validate={[required()]} />
        </ReferenceInput>
        <SelectInput source="rating" choices={[
          { id: 1, name: '1' },
          { id: 2, name: '2' },
          { id: 3, name: '3' },
          { id: 4, name: '4' },
          { id: 5, name: '5' }
        ]} />
        <TextInput source="comment" />
        <SelectInput source="status" choices={[
          { id: 'pending', name: 'Pending' },
          { id: 'available', name: 'Available' },
          { id: 'unavailable', name: 'Unavailable' }
        ]} />
      </SimpleForm>
    </Create>
);
  
export const ReviewShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="author" />
        <ReferenceField source="id_animal" reference="animals">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="rating" />
        <TextField source="comment" />
        <TextField source="status" />
      </SimpleShowLayout>
    </Show>
);