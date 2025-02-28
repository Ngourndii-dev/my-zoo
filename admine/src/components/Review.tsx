import {
  List,
  Show,
  Datagrid,
  TextField,
  SimpleShowLayout,
  NumberField,
  ReferenceField,
} from 'react-admin';

export const ReviewList = () => (
  <List>
    <Datagrid rowClick="show">
      <NumberField source="id" />
      <TextField source="author" label="Author" />
      <ReferenceField source="animal.id" reference="animals">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
      <NumberField source="rating" />
    </Datagrid>
  </List>
);

export const ReviewShow = () => (
  <Show>
    <SimpleShowLayout>
      <NumberField source="id" />
      <TextField source="author" label="Author" />
      <ReferenceField source="animal.id" reference="animals">
        <TextField source="animalTemplate.name" />
      </ReferenceField>
      <NumberField source="rating" />
      <TextField source="comment" />
    </SimpleShowLayout>
  </Show>
);
