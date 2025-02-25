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
    NumberField,
    NumberInput,
} from 'react-admin';
  
export const ReviewList = () => (
    <List>
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="author" />
        <TextField source="rating" />
        <TextField source="status" />
      </Datagrid>
    </List>
);
  
export const ReviewShow = () => (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
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